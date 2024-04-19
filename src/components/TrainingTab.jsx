import React, {useEffect, useState} from 'react';
import {Panel, PanelHeader, Group, Banner, Button, Div, Title, Subhead, Caption} from '@vkontakte/vkui';
import TrainingPage from './TrainingPage';
import {
    Icon36BuildingOutline,
    Icon36Coins, Icon36CoinsStacks3Outline, Icon36HeartUnlock,
    Icon36IncognitoOutline,
} from '@vkontakte/icons';

const TrainingTab = ({ id, openModal, onFinish }) => {
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [selectedBanner, setSelectedBanner] = useState(null);
    const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);


    const materials = [
        { header: '15 правил для работы в интернете', description: 'Большая часть нашей повседневной жизни так или ' +
                'иначе связана с интернетом: в интернете мы работаем, учимся и даже общаемся с друзьями. Важно знать ' +
                'правила безопасности в интернете – они помогут защитить от угроз ваши данные и устройства.',
            icon: <Icon36IncognitoOutline />, readingTime: 7, key: 1},
        { header: '54 вида кибератак', description: 'Интернет привнес в нашу жизнь позитивные изменения, но вместе ' +
                'с этим возникла и огромная проблема защиты данных. Это приводит к возникновению кибератак. В этой ' +
                'статье мы рассмотрим различные виды кибератак и способы их предотвращения.', icon: <Icon36Coins />,
            readingTime: 12, key: 2 },
        { header: 'Что такое HTTPS и для чего он нужен?', description: 'В этом уроке мы рассмотрим работу этих ' +
                'протоколов, что отсылается на сервер и какую информацию получает клиент. Также узнаем, почему ' +
                'нельзя передавать банковские данные по протоколу HTTP, а лучше для этих целей использовать HTTPS. ' +
                'Еще мы разберемся, при чем здесь атака Man-in-the-Middle.', icon: <Icon36HeartUnlock />, readingTime: 6, key: 3 },
        { header: 'Компьютерные адреса', description: 'Хватит ли IP-адресов на всех пользователей и почему их ' +
                'неудобно использовать?', icon: <Icon36BuildingOutline />, readingTime: 11, key: 4 },
        { header: 'Криптовалюта: начало', description: 'Обучающий курс об основах блокчейн-индустрии.' +
                ' Рассказываем о децентрализованных финансах и готовим будущих экспертов со своей стратегией ' +
                'инвестирования.', icon: <Icon36CoinsStacks3Outline />, readingTime: 7, key: 5, number: 1 },
        { header: 'Криптовалюта: блокчейн', description: 'Обучающий курс об основах блокчейн-индустрии.' +
                ' Блокчейн — это двигатель. Поэтому давайте заглянем «под капот» и попробуем разобраться, какие шестер' +
                'енки приводят в движение альтернативную финансовую систему.', icon: <Icon36CoinsStacks3Outline />, readingTime: 7, key: 6, number: 2},
        { header: 'Блокчейн: недостатки', description: 'Обучающий курс об основах блокчейн-индустрии. ' +
                'Почему криптовалюта до сих пор не используется повсеместно? Или используется?' +
                ' Давайте разбираться.', icon: <Icon36CoinsStacks3Outline />, readingTime: 10, key: 7, number: 3 },
        { header: 'Как появляется криптовалюта', description: 'Может ли криптовалюта существовать без ' +
                'блокчейна? Может ли блокчейн существовать без криптовалюты?', icon: <Icon36CoinsStacks3Outline />, readingTime: 8 , key: 8, number: 4},
        { header: 'Значимые криптовалюты', description: 'Поскольку создатели Биткоина неизвестны, то ' +
                'невозможно ответить на вопрос «Зачем Биткоин вообще был создан?»', icon: <Icon36CoinsStacks3Outline/>, readingTime: 10, key: 9, number: 5 },
        { header: 'Перспективы криптовалюты', description: 'В этом уроке мы рассмотрим возможности и риски, ' +
                'связанные с криптовалютами, а также их правовой статус и перспективу появления государственных ' +
                'цифровых валют.', icon: <Icon36CoinsStacks3Outline />, readingTime: 9 , key: 10, number: 6}
    ];

    const handleStartLearning = (index) => {
        setSelectedMaterial(index + 1);
        setSelectedBanner(index + 1);
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Прокрутить страницу вверх при рендеринге
    }, []);


    return (
        <>
            {!selectedMaterial ? (
                <Panel id="training">
                    <PanelHeader>Обучение</PanelHeader>

                        {materials.slice(0, 4).map((material, index) => (
                            <Banner
                                style={{marginBottom: "10px"}}
                                key={material.key}
                                before={material.icon}
                                header={<>
                                    {material.header}
                                    <Subhead style={{ fontSize: '12px', color: '#666' }}>Время прочтения: {material.readingTime} мин</Subhead>
                                </>}
                                subheader={material.description}
                                actions={<Button size="s" mode="primary" onClick={() => handleStartLearning(index)}>Начать изучение</Button>}

                            />
                        ))}
                        <Banner
                            size="medium"
                            before={isAdditionalOpen ? <Icon36CoinsStacks3Outline /> : <Icon36CoinsStacks3Outline />}

                            header={<>
                                {"Что такое криптовалюта?"}
                                <Subhead style={{ fontSize: '12px', color: '#666' }}>Время прочтения: 51 мин</Subhead>
                            </>}
                            subheader="Обучающий курс об основах блокчейн-индустрии. Рассказываем о децентрализованных финансах."
                            asideMode="expand"
                            onClick={() => {
                                setIsAdditionalOpen(!isAdditionalOpen);
                                setTimeout(() => {
                                    window.scrollBy({ top: window.innerHeight - 1, behavior: 'smooth' });
                                }, 100); // Добавляем небольшую задержку в 100 мс
                            }}
                        />
                        {isAdditionalOpen && (
                            <Div>
                                {materials.slice(4).map((material, index) => (
                                    <Banner
                                        before={material.icon}
                                        key={index + 4}
                                        header={

                                        <>
                                            {material.header}
                                            <Subhead style={{ fontSize: '14px', color: '#b7b7b7' }}>Часть {material.number}</Subhead>
                                            <Subhead style={{ fontSize: '12px', color: '#666' }}>Время прочтения: {material.readingTime} мин</Subhead>
                                        </>}
                                        subheader={material.description}
                                        actions={
                                        <Button size="s" mode="primary" onClick={() => handleStartLearning(index + 4)}>Начать изучение</Button>
                                    }
                                        style={{ marginBottom: '10px' }}
                                    />
                                ))}
                            </Div>
                        )}

                </Panel>
            ) : (
                <TrainingPage material={selectedMaterial} openModal={openModal} selectedBanner={selectedBanner} />
            )}
        </>
    );
};
export default TrainingTab;