import React from 'react';
import TopicsOptions from './TopicsOptions';
import Topic from './Topic.js';

class AllCatagories extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            postUnfilteredDetails: [],
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
                console.log(...postUnfilteredDetails);
                this.setState({
                    postUnfilteredDetails: [...postUnfilteredDetails]
                })
            })
    }

    render() {
        console.log(this.state.postUnfilteredDetails)
        return (
            <div>
            {this.state.postUnfilteredDetails.map((data) => {
                    return (
                        <div key={data.id}>
                            <Topic title={data.title} body={data.body} timeStamp={data.timestamp} voteScore={data.voteScore}/>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}

export default AllCatagories;