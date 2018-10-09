import React from 'react';

class Answer extends React.Component {

    render () {
        return (
            <div className="answer" onClick={() => {this.props.handleClick(this.props.answer.id)}}><span class="text">{this.props.answer.text}</span></div>
        );
    }

};

export default Answer;