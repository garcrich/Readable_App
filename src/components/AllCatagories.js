import React from 'react';
import TopicsOptions from './TopicsOptions';
import Topic from './Topic.js';

class AllCatagories extends React.Component {
    render() {
        return (
            <div>
                <TopicsOptions sortItem="Today's Topics"/>
                <Topic/>
                <Topic/>
                <Topic/>
            </div>
        )
    }
}

export default AllCatagories;