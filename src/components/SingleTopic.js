import React from 'react';
import SingleTopicBody from './SingleTopicBody';
import CommentHeader from './CommentHeader';
import { withRouter } from 'react-router';

class SingleTopic extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            postUnfilteredDetails: [],
        };
    }
    
    componentDidMount() {
        
        console.log("http://localhost:3001" + this.props.location.pathname);
        let url = ("http://localhost:3001" + this.props.location.pathname);
        fetch(
            url,
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
                    postUnfilteredDetails: postUnfilteredDetails
                })
            })
    
}

    render() {
        console.log(this.state.postUnfilteredDetails)
            return (
            <div>
                <CommentHeader  title={this.state.postUnfilteredDetails.title}/>
                <SingleTopicBody id={this.state.postUnfilteredDetails.id} voteScore={this.state.postUnfilteredDetails.voteScore} body={this.state.postUnfilteredDetails.body}/>
            </div>
        )
    }
}

export default SingleTopic;