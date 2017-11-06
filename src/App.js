import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Nav';
import Header from './components/Header';
import TopicsOptions from './components/TopicsOptions';
import AllCatagories from './components/AllCatagories';
import SingleTopic from './components/SingleTopic';
import TopicForm from './components/TopicForm';
import WelcomeScreen from './components/WelcomeScreen';



const CategoriesPage = () => (
  <div>
  <Navbar />
  <Header />
  <main className="main">
      <Route exact path="/" component={WelcomeScreen} />      
      <Route path ="/categories" render={(props) => (<TopicsOptions postType="topic"/>)} />
      <Route path="/categories" component={AllCatagories} />
      <Route path="/categories/something-else" component={SingleTopic} />
      <Route path="/categories/something" component={TopicForm} />
      <Route path="/topic-form" component={TopicForm}/>
      <Route path="/single-topic" component={SingleTopic}/>
  </main>
</div>
);

class App extends Component {
  render() {
    return (
      <div className="content">
        <BrowserRouter>
          <Route path="/" component={CategoriesPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
