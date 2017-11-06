import React from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom';


class Topic extends React.Component {
    render() {
            return (
            <div key={this.props.id} className="com-block">
                <div className="com-col-1">
                    <a className={`up-button up-${this.props.id}`}>
                    </a>
                    <p>{this.props.voteScore}</p>
                    <a className={`down-button down-${this.props.id}`}>
                    </a>
                </div>
                <div className="com-col-2">
                    <Link to="/single-topic">
                        <h3>{this.props.title}</h3>
                    </Link>
                    <p>{this.props.body}</p>
                    <small>{Moment(this.props.timeStamp).format('MMMM Do H:mm a')}</small>
                </div>
            </div>
        )
    }
}

export default Topic;