import React, {useEffect, useState} from 'react';
import {Button, Div, Radio, Text, Title} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import md5 from 'md5';
import {Cell, Pie, PieChart, Tooltip} from 'recharts';
import './TestPage.css';

const TestPage = ({ training, onFinish, testId }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [chartData, setChartData] = useState(null);
    const questions = training ? training.questions : [];
    const clientSecret = 'juUglL4f9pJxPVPhxQOq';
    const handleOptionSelect = (optionIndex) => {
        if (!showResult) {
            setSelectedOption(optionIndex);
        }
    };

    const getUserId = async () => {
        try {
            const userData = await bridge.send('VKWebAppGetUserInfo');
            return userData.id;
        } catch (error) {
            return null;
        }
    };

    useEffect(() => {
        const fetchUserId = async () => {
            try {
                const id = await getUserId();
            } catch (error) {
                console.error('Не смог получить userID');
            }
        };

        fetchUserId();
    }, []);

    async function generateSignature(params) {
        const { user_id, test_id, score} = params;
        const paramsString = `user_id=${user_id}&test_id=${test_id}&score=${score}${clientSecret}`;
        return md5(paramsString);
    }
    const handleNextQuestion = () => {
        if (!showResult && selectedOption !== null) {
            const isCorrect = questions[currentQuestionIndex].correctIndex === selectedOption;
            const updatedAnswers = [...answers];
            updatedAnswers[currentQuestionIndex] = { selectedOption, isCorrect };
            setAnswers(updatedAnswers);
            setSelectedOption(null);
            if (isCorrect) {
                setScore(prevScore => prevScore + 1);
            }
            if (currentQuestionIndex + 1 === questions.length) {
                setShowResult(true);
                handleFinishTest();
            } else {
                setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            }
        } else if (!showResult) {
            console.warn("Не выбран вариант ответа");
        }
    };

    useEffect(() => {
        if (showResult && score !== 0) {
            handleFinishTest();
        }
    }, [showResult, score]);

    const handleFinishTest = async () => {

        const userId = await getUserId();

        try {
            const launchParams = await bridge.send('VKWebAppGetLaunchParams');

            const timestamp = Date.now().toString();
            const signedParams = {
                ...launchParams,
                timestamp,
                score: score,
                test_id: testId,
                user_id: userId,
                totalQuestions: questions.length
            };


            const signature = await generateSignature(signedParams);
            signedParams.sign = signature;

            const response = await fetch('https://localhost:3000/save-test-result', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Launch-Params': JSON.stringify(launchParams),
                    'X-Signature': signature
                },
                body: JSON.stringify(signedParams)
            });

        } catch (error) {
            console.error('client: Ошибка при сохранении ответа на сервер');
        }
    };




    useEffect(() => {
        const calculateChartData = () => {
            let correctCount = 0;
            let incorrectCount = 0;
            for (let i = 0; i < answers.length; i++) {
                if (answers[i] && answers[i].isCorrect) {
                    correctCount++;
                } else {
                    incorrectCount++;
                }
            }
            return [{ name: 'Верно', value: correctCount }, { name: 'Неверно', value: incorrectCount }];
        };

        if (showResult) {
            const data = calculateChartData();
            setChartData(data);
        }
    }, [answers, showResult]);

    return (
        <Div>
            {showResult ? (
                <Div>
                    <Title>Результаты теста:</Title>
                    <Text>Правильных ответов: {score} из {questions.length}</Text>

                    <Div className="chart-container">
                        <PieChart width={400} height={250}>
                            <Pie
                                data={chartData}
                                cx={200}
                                cy={100}
                                labelLine={true}
                                label={({ name, value }) => `${name}: ${value}`}
                                outerRadius={75}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {chartData && chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={index === 0 ? '#82ca9d' : '#ff7f0e'} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </Div>
                    {questions.map((question, index) => (
                        <Div key={index} className="question-wrapper">
                            <Title level="3">{index + 1}. {question.question}</Title>
                            {question.options.map((option, optionIndex) => (
                                <Radio
                                    key={optionIndex}
                                    name={`question-${index}`}
                                    defaultChecked={optionIndex === question.correctIndex}
                                    disabled
                                    className={answers[index] &&
                                    answers[index].selectedOption === optionIndex &&
                                    answers[index].isCorrect
                                        ? 'correct-answer'
                                        : answers[index] &&
                                        answers[index].selectedOption === optionIndex &&
                                        !answers[index].isCorrect
                                            ? 'incorrect-answer'
                                            : ''}
                                >
                                    {option}
                                </Radio>
                            ))}

                            {answers[index] &&
                                (answers[index].isCorrect ? (
                                    <Div className="correct-answer-badge">Верно</Div>
                                ) : (
                                    <Div className="incorrect-answer-badge">
                                        Правильный ответ: {question.options[question.correctIndex]}
                                    </Div>
                                ))}
                        </Div>
                    ))}
                </Div>
            ) : (
                <>
                    <Title level="2">{questions[currentQuestionIndex].question}</Title>
                    <Div>
                        {questions[currentQuestionIndex].options.map((option, index) => (
                            <Radio
                                key={index}
                                name={`question-${currentQuestionIndex}`}
                                value={index}
                                checked={selectedOption === index}
                                onChange={() => handleOptionSelect(index)}
                                className={answers[currentQuestionIndex] &&
                                answers[currentQuestionIndex].selectedOption === index &&
                                answers[currentQuestionIndex].isCorrect
                                    ? 'correct-answer'
                                    : answers[currentQuestionIndex] &&
                                    answers[currentQuestionIndex].selectedOption === index &&
                                    !answers[currentQuestionIndex].isCorrect
                                        ? 'incorrect-answer'
                                        : ''}
                            >
                                {option}
                            </Radio>
                        ))}
                    </Div>
                    <Button size="l" stretched={true} disabled={selectedOption === null || showResult} onClick={handleNextQuestion}>
                        {currentQuestionIndex === questions.length - 1 ? 'Завершить тест' : 'Следующий вопрос'}
                    </Button>
                </>
            )}
        </Div>
    );
};

export default TestPage;
