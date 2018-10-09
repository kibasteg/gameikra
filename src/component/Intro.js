import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
class Intro extends React.Component {

    render () {
        return (
            <div className={this.props.introClass}>
                <div className="text">
                    <p>
                        Все люди время от времени придумывают идеи.
                        <br/>
                        И все делают это очень по-разному. В одиночку или сбиваясь в группы, с блокнотом в руке или вооружившись стикерами, молча или обсуждая в чате.
                    </p>
                    <p>
                        Манера придумывания влияет и на другие сферы жизни. А причина, оказывается, в том, что все мы относимся к разным креативным знакам!
                    </p>
                    <p>
                        Школа креативного мышления ИКРА выяснила, какие типы креаторов существуют, и как с этим жить.
                        <br/>
                        Пройдите тест — и получите персональный креативный прогноз.
                    </p>
                </div>
                <div className="action">
                    <button onClick={this.props.handleStart}>Начать тест</button>
                </div>
            </div>
        );
    }

}

export default Intro