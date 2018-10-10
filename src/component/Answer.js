import React from 'react';

class Answer extends React.Component {

    handleClick = (answerId) => {

        console.log(answerId, this);

        this.props.handleClick(answerId);

    };

    render () {
        return (
            <div className="answer" onClick={() => {this.handleClick(this.props.answer.id)}}><span class="text">{this.props.answer.text}</span></div>
        );
    }

};

export default Answer;