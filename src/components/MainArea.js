import React from 'react';
import { Router, Route } from 'react-router-dom';
import AllCatagories from './AllCatagories';
import SingleTopic from './SingleTopic';
import TopicForm from './TopicForm';

class MainArea extends React.Component {
    render() {
        return (
            <Router>
                <main className="main">
                    <Route path="/popular" component={SingleTopic} />
                    {/* <SingleTopic title="React is the cat's meow"/> */}
                    {/* <AllCatagories/> */}
                    {/* <TopicForm/> */}
                </main>
            </Router>
        )
    }
}

export default MainArea;