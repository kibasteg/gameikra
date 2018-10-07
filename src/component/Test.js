import React from 'react';
import Question from './Question';

// di, cr, tr, la

const questions = [

    {
        text: 'Известный банк нанял вас перепридумать бонусную программу дебетовых карт. Что станет отправной точкой создания идеи?',
        opts: [
            {text: 'Потребности пользователя. Подумаю, как бонусная программа может изменить жизнь человека к лучшему.', id: 'di'},
            {text: 'Потребности бизнеса. Подумаю, какая коммуникация с пользователем поможет бренду продать как можно больше банковских карт.', id: 'cr'},
            {text: 'Потребности банковской системы в целом. Подумаю, как выглядела бы идеальная программа начисления бонусов.', id: 'tr'},
            {text: 'Потребность в создании чего-то совсем нового, необычного. Подумаю, какие  классные штуки можно внедрить в бонусную программу, чтобы такого больше ни в одном банке не было.', id: 'la'},
        ]
    },
    {
        text: 'text 2',
        opts: [
            {text: 'q.2.1',id: 'di'},
            {text: 'q.2.2',id: 'cr'},
            {text: 'q.2.3',id: 'tr'},
            {text: 'q.2.4',id: 'la'},
        ]
    },
    {
        text: 'text 3',
        opts: [
            {text: 'q.3.1',id: 'di'},
            {text: 'q.3.2',id: 'cr'},
            {text: 'q.3.3',id: 'tr'},
            {text: 'q.3.4',id: 'la'},
        ]
    },
    {
        text: 'text 4',
        opts: [
            {text: 'q.4.1',id: 'di'},
            {text: 'q.4.2',id: 'cr'},
            {text: 'q.4.3',id: 'tr'},
            {text: 'q.4.4',id: 'la'},
        ]
    },
];

class Test extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            testStarted: false,
            testFinished: false,
            currentQuestion: 0,
            result: {
               di: 0, cr: 0, tr: 0, la: 0
            }
        };
    };

    handleStart = () => {

        console.log('handle start');

        this.setState({testStarted: true});

    };

    handleClick = () => {

        console.log('handleClick');

        this.setState({currentQuestion: this.state.currentQuestion+1});

    };

    render () {

        const q = questions.map((q, qIndex) => {
           return <Question question={q} key={qIndex} handleClick={this.handleClick} />
        });

        return (
            <div className="test">
                <div className={this.state.testStarted ? 'test__intro test__intro--started' : 'test__intro test__intro--ready'}>
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
                        <button onClick={this.handleStart}>Начать тест</button>
                    </div>
                </div>
                <div className={this.state.testStarted ? 'test__questions test__questions--started' : 'test__questions test__questions--ready'}>
                    {q}
                </div>
            </div>
        )
    };
};

export default Test;
