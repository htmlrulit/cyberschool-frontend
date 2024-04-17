import React, {useEffect, useState} from 'react';
import {
    Panel,
    PanelHeader,
    Button,
    Div,
    Text,
    Header,
    Progress,
    RadioGroup,
    Radio,
    Checkbox,
    Card, Separator
} from '@vkontakte/vkui';

const Page3 = ({ onNextPage }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);

    const questions = [
        {
            question: 'Вы получили письмо от незнакомого отправителя с вложенным файлом. Какие действия вы выполните?',
            options: [
                'Открою файл, чтобы посмотреть, что внутри.',
                'Удалю письмо без открытия вложения.',
                'Отправлю ответное письмо и попрошу отправителя предоставить подробности.'
            ],
            correctAnswerIndex: 1,
            explanation: 'Вложенные файлы от незнакомых отправителей могут содержать вредоносные программы.'
        },
        {
            question: 'Какие пароли являются наиболее надежными?',
            options: [
                '123456',
                'qwerty',
                '8H*#0p7!9d'
            ],
            correctAnswerIndex: 2,
            explanation: 'Этот пароль содержит разнообразные символы и имеет достаточную длину, что делает' +
                'его более надежным.'
        },
        {
            question: 'Что делать, если вы подозреваете, что ваша учетная запись была взломана?',
            options: [
                'Ничего не делать, это не серьезно.',
                'Изменить пароль и сообщить об инциденте на службу поддержки.',
                'Создать новую учетную запись и забыть о проблеме.'
            ],
            correctAnswerIndex: 1,
            explanation: 'Изменить пароль и сообщить об инциденте на службу поддержки поможет предотвратить' +
                'утерю данных и защитить аккаунт от злоумышленников.'
        }
    ];

    const handleAnswerSubmit = () => {
        if (selectedAnswer === questions[currentQuestionIndex].correctAnswerIndex) {
            setScore(prevScore => prevScore + 1);
        } else {
            setIncorrectAnswers(prevIncorrectAnswers => [
                ...prevIncorrectAnswers,
                {
                    question: questions[currentQuestionIndex].question,
                    correctAnswer: questions[currentQuestionIndex].options[questions[currentQuestionIndex].correctAnswerIndex],
                    explanation: questions[currentQuestionIndex].explanation
                }
            ]);
        }

        if (currentQuestionIndex === questions.length - 1) {
            setGameOver(true);
        } else {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            setSelectedAnswer(null);
        }
    };


    return (
        <Panel id="cyber-security-article-part3">
                <Header mode="secondary">Вирусы и вредоносные программы</Header>
            <Card size="l" mode="shadow">
                <Div>
                <Text>В современном интернете пользователи сталкиваются с риском заражения своих устройств вирусами
                    и вредоносными программами. Вирусы могут проникнуть на компьютер или мобильное устройство
                    через подозрительные вложения в электронных письмах, ненадежные сайты или даже заразные
                    USB-устройства.</Text>
                    </Div>

                </Card>
            <br/>
            <Separator></Separator>
                <Header mode="secondary">Рекомендации по защите от вирусов</Header>
            <Card size="l" mode="shadow">
                <Div>
                <Text>Для защиты от вирусов и вредоносных программ важно соблюдать следующие рекомендации:</Text>
                <ul>
                    <li>Устанавливайте только лицензионное и актуальное антивирусное программное обеспечение.</li>
                    <li>Регулярно обновляйте антивирусные базы данных для обеспечения максимальной защиты.</li>
                    <li>Будьте осторожны при открытии электронных писем от незнакомых отправителей и при
                        скачивании файлов из интернета.</li>
                    <li>Избегайте посещения подозрительных веб-сайтов и сомнительных загрузок.</li>
                </ul>
                </Div>
            </Card>
            <br/>
            <Separator></Separator>
            <Header mode="secondary">Рекомендации по защите от вирусов</Header>
            <Card size="l" mode="shadow">
                <Div>
            {!gameOver && (
                <Div>
                    <Header mode="secondary">Вопрос {currentQuestionIndex + 1} из {questions.length}</Header>
                    <Text>{questions[currentQuestionIndex].question}</Text>
                    {questions[currentQuestionIndex].options.map((option, index) => (
                        <Radio
                            key={index}
                            name="radio"
                            checked={selectedAnswer === index}
                            onChange={() => setSelectedAnswer(index)}
                        >
                            {option}
                        </Radio>
                    ))}
                    <Button size="l" onClick={handleAnswerSubmit}>Ответить</Button>
                </Div>
            )}
            {gameOver && (
                <Div>
                    <Header mode="secondary">Игра окончена</Header>
                    <Text>Вы набрали {score} из {questions.length} возможных баллов.</Text>
                    <Text>Ошибочные ответы:</Text>
                    {incorrectAnswers.map((answer, index) => (
                        <Div key={index}>
                            <Text>{answer.question}</Text>
                            <Text>{`Правильный ответ: ${answer.correctAnswer}`}</Text>
                            <Text>{answer.explanation}</Text>
                        </Div>
                    ))}
                </Div>
            )}
                </Div>
            </Card>
        </Panel>
    );
};

export default Page3;
