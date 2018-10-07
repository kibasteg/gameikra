import React from 'react';

class Answer extends React.Component {

    render () {
        return (
            <div className="answer" onClick={() => {this.props.handleClick(this.props.answer.id)}}>{this.props.answer.text}</div>
        );
    }

};

export default Answer;