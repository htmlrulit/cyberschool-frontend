import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Div, Progress, Radio, Text, Title} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import md5 from 'md5';
import {Cell, Pie, PieChart, Tooltip} from 'recharts';
import './TestPage.css';

const TestPage = ({ training, onFinish, testId, updateTestList }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [chartData, setChartData] = useState(null);
    const questions = training ? training.questions : [];
    const [progress, setProgress] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const clientSecret = 'juUglL4f9pJxPVPhxQOq';
    const [savingResults, setSavingResults] = useState(false);
    const handleOptionSelect = (optionIndex) => {
        if (!showResult) {
            setSelectedOption(optionIndex);
        }
    };



    useEffect(() => {
        setProgress((currentQuestionIndex / (questions.length - 1)) * 100);
    }, [currentQuestionIndex, questions.length]);

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
            } else {
                setCurrentQuestionIndex(prevIndex => prevIndex + 1);
            }
        } else if (!showResult) {
            console.warn("Не выбран вариант ответа");
        }
    };




    useEffect(() => {
    }, [showResult, score]);

    const handleFinishTest = async () => {
        if (isSubmitted || savingResults) return;
        setIsSubmitted(true);
        setSavingResults(true);

        try {
            const userId = await getUserId(); // Получаем userId
            console.log('userId:', userId); // Проверяем, получилось ли

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
            const response = await fetch('https://htvk.ru:3000/save-test-result', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Launch-Params': JSON.stringify(launchParams),
                    'X-Signature': signature
                },
                body: JSON.stringify(signedParams)
            });

            onFinish();
            updateTestList();
        } catch (error) {
            console.error('client: Ошибка при сохранении ответа на сервер');
        } finally {
            setIsSubmitted(false);
            setSavingResults(false);
            console.log("Результаты теста закрыты");
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
            return [{ name: '✅', value: correctCount }, { name: '🚫', value: incorrectCount }];
        };

        if (showResult) {
            const data = calculateChartData();
            setChartData(data);
            console.log('Total score:', score);
        }
    }, [answers, showResult, score]);

    return (
        <Div>
            {showResult ? (
                <Div>
                    <Title>Результаты теста</Title>
                    <Text>Правильных ответов: {score} из {questions.length}</Text>
                    <Text style={{marginTop: "10px", marginBottom: "5px"}}>Если Вы удовлетворены данными
                        результатами — нажмите на кнопку ниже
                    для сохранения результатов тестирования.</Text>
                    <Button size="l" stretched={true} onClick={handleFinishTest}>
                        Сохранить результаты
                    </Button>
                    <PieChart width={300} height={250} margin={{ left: 0 }}>
                        <Pie
                            data={chartData}
                            labelLine={true}
                            label={({ name, value }) => `${name}: ${value}`}
                            outerRadius={75}
                            fill="#8884d8"
                            dataKey="value"
                            borderWidth={2}
                            borderColor="#fff"
                            borderDash={[5, 5]}
                            borderDashOffset={0}
                            borderJoinStyle="round"
                            borderRadius={10}
                        >
                            {chartData && chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={index === 0 ? '#1d6b1d' : '#771010'} />
                            ))}
                        </Pie>
                        <Tooltip animationBegin={0} animationDuration={200} />
                    </PieChart>
                    {questions.map((question, index) => (
                        <Div key={index} className="question-wrapper">
                            <Title level="3">{index + 1}. {question.question}</Title>
                            {question.options.map((option, optionIndex) => (
                                <Radio
                                    key={optionIndex}
                                    checked={
                                        answers[index] &&
                                        answers[index].selectedOption === optionIndex
                                    }
                                    disabled
                                    className={
                                        answers[index] &&
                                        answers[index].selectedOption === optionIndex &&
                                        answers[index].isCorrect
                                            ? 'correct-answer'
                                            : answers[index] &&
                                            answers[index].selectedOption === optionIndex &&
                                            !answers[index].isCorrect
                                                ? 'incorrect-answer'
                                                : ''
                                    }
                                >
                                    {option}
                                </Radio>
                            ))}

                            {answers[index] && (
                                <Div className={answers[index].isCorrect ? 'correct-answer-badge' : 'incorrect-answer-badge'}>
                                    {answers[index].isCorrect ? 'Верный ответ' : 'Неверный ответ'}
                                </Div>
                            )}
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
                    <Progress style={{marginBottom: "12px"}} value={progress} />
                    <Button size="l" stretched={true} disabled={selectedOption === null || showResult} onClick={handleNextQuestion}>
                        {currentQuestionIndex === questions.length - 1 ? 'Завершить тест' : 'Следующий вопрос'}
                    </Button>
                </>
            )}
        </Div>
    );
};

export default TestPage;
