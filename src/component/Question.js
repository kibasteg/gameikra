import React from 'react';
import Answer from './Answer';

class Question extends React.Component {

    render () {

        const a = this.props.question.opts.map( (a, aIndex) => {
            return <Answer answer={a} key={aIndex} />
        });

        return (
            <div className="question" onClick={this.props.handleClick}>
                <div className="question__text">{this.props.question.text}</div>
                <div className="question__props">{a}</div>
            </div>
        )
    }
}

export default Question;