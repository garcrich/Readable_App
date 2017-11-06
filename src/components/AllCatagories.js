import React from 'react';
import Topic from './Topic.js';
import { withRouter } from 'react-router';

class AllCatagories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            postUnfilteredDetails: [],
            categories: []
        };
    }

    componentDidMount() {
        fetch(
            "http://localhost:3001/posts",
            {
                method: 'GET',
                headers: { 'Authorization': 'super-secure-authorization' }
            })
            .then(results => {
                return results.json()
            })
            .then((responseData) => {
                let postUnfilteredDetails = responseData
                //console.log(...postUnfilteredDetails);
                this.setState({
                    postUnfilteredDetails: [...postUnfilteredDetails]
                })
            })

            fetch(
                "http://localhost:3001/categories",
                {
                    method: 'GET',
                    headers: { 'Authorization': 'super-secure-authorization' }
                })
                .then(results => {
                    return results.json()
                })
                .then((responseData) => {
                    let categories = responseData.categories
                    this.setState({
                        categories: [...categories]
                    })
                })
    }

    render() {

        console.log((this.props.location.pathname).replace(/\/categories\//,''))
        return (
            <div>

            
            {
                this.props.location.pathname === "/categories" ?
                this.state.postUnfilteredDetails.map((data) => {
                    return (
                            <Topic key={data.id} id={data.id} title={data.title} body={data.body} timeStamp={data.timestamp} voteScore={data.voteScore}/>
                    )
                }) :
            (this.state.postUnfilteredDetails).filter((data) => {
                return data.category === (this.props.location.pathname).replace(/\/categories\//,'')
            })
            .map((data) => {
                return (
                    <Topic key={data.id} id={data.id} title={data.title} body={data.body} timeStamp={data.timestamp} voteScore={data.voteScore}/>
            )
            })}

            </div>
        )
    }
}

export default AllCatagories;