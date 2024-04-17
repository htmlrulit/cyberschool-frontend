import React, { useState, useEffect } from 'react';
import {
    PanelHeader,
    PanelHeaderButton,
    Div,
    Banner,
    Button,
    ConfigProvider,
    CellButton,
    Text,
    Subhead,
    Progress,
    FormItem,
    Card,
    Alert
} from '@vkontakte/vkui';
import { formatDistanceToNow, format, isToday, isYesterday } from 'date-fns';
import ru from "date-fns/locale/ru";
import './TestTab.css';
import questionsData from '../../questions.json';
import { Icon28DeleteOutline } from "@vkontakte/icons";
import bridge from "@vkontakte/vk-bridge";
import TestPage from "./TestPage.jsx";

const TestTab = () => {
    const [selectedTraining, setSelectedTraining] = useState(null);
    const [loading, setLoading] = useState(true);
    const [testResults, setTestResults] = useState([]);
    const [showAlert, setShowAlert] = useState(false);
    const [testToReattempt, setTestToReattempt] = useState(null);

    const formattedTime = (time) => {
        if (isToday(time)) {
            return formatDistanceToNow(time, {addSuffix: true, locale: ru});
        } else if (isYesterday(time)) {
            return `вчера в ${format(time, 'HH:mm', {locale: ru})}`;
        } else {
            return format(time, 'dd.MM в HH:mm', {locale: ru});
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const userId = await getUserId();
                const response = await fetch(`https://localhost:3000/tests?user_id=${userId}`);
                const data = await response.json();
                setTestResults(data);
            } catch (error) {
                console.error('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const fetchTestResult = async (userId, testId) => {
        try {
            const response = await fetch(`https://localhost:3000/tests?user_id=${userId}&test_id=${testId}`);
            const data = await response.json();
            return data.length > 0 ? data[0] : null;
        } catch (error) {
            console.error(`Error fetching test result for test ${testId}`);
            return null;
        }
    };

    const getUserId = async () => {
        try {
            const userData = await bridge.send('VKWebAppGetUserInfo');
            return userData.id;
        } catch (error) {
            console.error('Failed to get user ID');
            return null;
        }
    };

    const handleStartTest = (training) => {
        setSelectedTraining(training);
    };

    const handleCloseTest = () => {
        setSelectedTraining(null);
    };

    const handleConfirmReattempt = () => {
        setSelectedTraining(testToReattempt);
        setShowAlert(false);
    };

    const handleCancelReattempt = () => {
        setTestToReattempt(null);
        setShowAlert(false);
    };

    if (loading) {
        return <Div>Loading...</Div>;
    }

    return (
        <ConfigProvider isWebView={true}>
            <>
                <PanelHeader left={<PanelHeaderButton/>}>
                    {selectedTraining ? 'Тест' : 'Тестирование'}
                </PanelHeader>
                {selectedTraining ? (
                    <TestPage training={selectedTraining} onFinish={handleCloseTest} testId={selectedTraining.id}/>
                ) : (
                    <Div className="test-container">
                        {questionsData.map((test, index) => {
                            const result = testResults.find(result => result.id === test.id);
                            let correctPercentage = result ? (result.score / test.count) * 100 : 0;
                            let appearance = correctPercentage >= 70 ? "positive" : (correctPercentage <= 30 ? "negative" : "accent");

                            return (
                                <Banner
                                    key={`question-${test.id}-${index}`}
                                    size="medium"
                                    header={test.name}
                                    subheader={
                                        <React.Fragment key={`subheader-${test.id}-${index}`}>
                                            <Subhead
                                                style={{marginTop: "5px"}}
                                            >
                                                Вопросов: {test.count}
                                            </Subhead>
                                            <Text
                                                style={{marginTop: "10px"}}
                                            >
                                                {test.description}
                                            </Text>
                                            <Card
                                                mode="shadow"
                                                style={{marginTop: "10px"}}
                                            >
                                                {result && typeof result.score !== 'undefined' && (
                                                    <FormItem
                                                        id={`progresslabelPositive_${index}`}
                                                        top={null}
                                                    >
                                                        <React.Fragment>
                                                            <FormItem
                                                                id={`progresslabelPositive_${index}`}
                                                                top={`Набрано баллов: ${result.score}`}
                                                            >
                                                                <React.Fragment>
                                                                    {result && typeof result.score !== 'undefined' && (
                                                                        <React.Fragment>
                                                                            <Progress
                                                                                appearance={appearance}
                                                                                aria-labelledby={`progresslabel_${index}`}
                                                                                value={(result.score / test.count) * 100}
                                                                            />
                                                                            <Subhead
                                                                                style={{marginTop: "3px"}}
                                                                            >
                                                                                Тест был пройден {formattedTime(new Date(result.time))}
                                                                            </Subhead>
                                                                        </React.Fragment>
                                                                    )}
                                                                </React.Fragment>
                                                            </FormItem>
                                                        </React.Fragment>
                                                    </FormItem>

                                                )}
                                            </Card>
                                            {!testResults.some(result => result.id === test.id) && (
                                                <Card
                                                    mode="shadow"
                                                >
                                                    <FormItem
                                                        id={`progresslabelPositive_${index}`}
                                                        top={`Тест не пройден`}
                                                    >
                                                    </FormItem>
                                                </Card>
                                            )}
                                            <Button
                                                style={{marginTop: "10px"}}
                                                appearance={result && typeof result.score !== 'undefined' ? 'negative' : 'outline'}
                                                size="m"
                                                onClick={() => {
                                                    if (result && typeof result.score !== 'undefined') {
                                                        setTestToReattempt(test);
                                                        setShowAlert(true);
                                                    } else {
                                                        handleStartTest(test);
                                                    }
                                                }}
                                                key={`button-${test.id}-${index}`}
                                            >
                                                {result && typeof result.score !== 'undefined' ? 'Перепройти' : 'Начать тест'}
                                            </Button>
                                        </React.Fragment>
                                    }
                                />
                            );
                        })}
                    </Div>
                )}
                {selectedTraining && (
                    <CellButton onClick={handleCloseTest} centered before={<Icon28DeleteOutline/>} mode="danger">
                        Завершить тест
                    </CellButton>
                )}
                {showAlert && (
                    <Alert
                        actions={[
                            { title: 'Отмена', autoclose: "true", mode: 'cancel', action: handleCancelReattempt },
                            { title: 'Да', autoclose: "true", mode: 'destructive', action: handleConfirmReattempt }
                        ]}
                        onClose={() => setShowAlert(false)}
                        actionsLayout="horizontal"
                        dismissButtonMode="inside"
                        header="Предупреждение"
                        text="Перепрохождение теста приведет к сбросу результатов. Вы уверены, что хотите продолжить?"
                    >
                    </Alert>
                )}
            </>
        </ConfigProvider>
    );
};
export default TestTab;
