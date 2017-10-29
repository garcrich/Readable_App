import React from 'react';
import AllCatagories from './AllCatagories';
import SingleTopic from './SingleTopic';
import TopicForm from './TopicForm';

class MainArea extends React.Component {
    render() {
            return (
            <main className="main">
                {/* <AllCatagories/> */}
                <SingleTopic title="React is the cat's meow"/>
                {/* <TopicForm/> */}
            </main>
        )
    }
}

export default MainArea;