import React from 'react';
import Moment from 'moment';
import { Link } from 'react-router-dom';


class Topic extends React.Component {
    render() {
            return (
            <div className="com-block">
                <div className="com-col-1">
                    <a className="up-button">
                    </a>
                    <p>{this.props.voteScore}</p>
                    <a className="down-button">
                    </a>
                </div>
                <div className="com-col-2">
                    <Link to="/single-topic">
                        <h3>{this.props.title}</h3>
                    </Link>
                    <p>{this.props.body}</p>
                    <small>{Moment(this.props.timeStamp).format('MMMM Do H:mmA')}</small>
                </div>
            </div>
        )
    }
}

export default Topic;