import React from 'react';

class Answer extends React.Component {

    render () {
        return (
            <div className="answer">{this.props.answer.text}</div>
        );
    }

};

export default Answer;