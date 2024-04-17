import React, { useState } from 'react';
import {Panel, PanelHeader, Group, Banner, Button, Separator, Cell, Accordion, Div} from '@vkontakte/vkui';
import TrainingPage from './TrainingPage';
import {
    Icon28ClockOutline,
    Icon36BuildingOutline,
    Icon36Coins, Icon36CoinsStacks3Outline,
    Icon36DiamondOutline,
    Icon36GiftOutline,
    Icon36IncognitoOutline, Icon36LockOutline
} from '@vkontakte/icons';

const TrainingTab = ({ id, openModal, onFinish }) => {
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [selectedBanner, setSelectedBanner] = useState(null);
    const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);

    const materials = [
        { header: '15 правил для работы в интернете', description: 'Большая часть нашей повседневной жизни так или ' +
                'иначе связана с интернетом: в интернете мы работаем, учимся и даже общаемся с друзьями. Важно знать ' +
                'правила безопасности в интернете – они помогут защитить от угроз ваши данные и устройства.',
            icon: <Icon36IncognitoOutline />, readingTime: 7 },
        { header: '54 вида кибератак', description: 'Интернет привнес в нашу жизнь позитивные изменения, но вместе ' +
                'с этим возникла и огромная проблема защиты данных. Это приводит к возникновению кибератак. В этой ' +
                'статье мы рассмотрим различные виды кибератак и способы их предотвращения.', icon: <Icon36Coins />, readingTime: 12 },
        { header: 'Что такое HTTPS и для чего он нужен?', description: 'В этом уроке мы рассмотрим работу этих ' +
                'протоколов, что отсылается на сервер и какую информацию получает клиент. Также узнаем, почему ' +
                'нельзя передавать банковские данные по протоколу HTTP, а лучше для этих целей использовать HTTPS. ' +
                'Еще мы разберемся, при чем здесь атака Man-in-the-Middle.', icon: <Icon36LockOutline />, readingTime: 6 },
        { header: 'Компьютерные адреса', description: 'Хватит ли IP-адресов на всех пользователей и почему их ' +
                'неудобно использовать?', icon: <Icon36BuildingOutline />, readingTime: 11 },
        { header: 'Криптовалюта: начало. Часть 1', description: 'Обучающий курс об основах блокчейн-индустрии.' +
                'Рассказываем о децентрализованных финансах и готовим будущих экспертов со своей стратегией ' +
                'инвестирования.', icon: <Icon36CoinsStacks3Outline />, readingTime: 7 },
        { header: 'Криптовалюта: блокчейн. Часть 2', description: 'Обучающий курс об основах блокчейн-индустрии.' +
                'Блокчейн — это двигатель. Поэтому давайте заглянем «под капот» и попробуем разобраться, какие шестер' +
                'енки приводят в движение альтернативную финансовую систему.', icon: <Icon36CoinsStacks3Outline />, readingTime: 7 },
        { header: 'Блокчейн: недостатки. Часть 3', description: 'Обучающий курс об основах блокчейн-индустрии.' +
                'Почему криптовалюта до сих пор не используется повсеместно? Или используется?' +
                ' Давайте разбираться.', icon: <Icon36CoinsStacks3Outline />, readingTime: 10 },
        { header: 'Как появляется криптовалюта. Часть 4', description: 'Может ли криптовалюта существовать без ' +
                'блокчейна? Может ли блокчейн существовать без криптовалюты?', icon: <Icon36CoinsStacks3Outline />, readingTime: 8 },
        { header: 'Значимые криптовалюты. Часть 5', description: 'Поскольку создатели Биткоина неизвестны, то ' +
                'невозможно ответить на вопрос «Зачем Биткоин вообще был создан?»', icon: <Icon36CoinsStacks3Outline />, readingTime: 10 },
        { header: 'Перспективы криптовалюты. Часть 6 • 9 мин', description: 'В этом уроке мы рассмотрим возможности и риски, ' +
                'связанные с криптовалютами, а также их правовой статус и перспективу появления государственных ' +
                'цифровых валют.', icon: <Icon36CoinsStacks3Outline />, readingTime: 9 }
    ];

    const handleStartLearning = (index) => {
        setSelectedMaterial(index + 1);
        setSelectedBanner(index + 1);
    };

    return (
        <>
            {!selectedMaterial ? (
                <Panel id="training">
                    <PanelHeader>Обучение</PanelHeader>
                    <Group>
                        {materials.slice(0, 4).map((material, index) => (
                            <Banner
                                before={material.icon}
                                header={<>
                                    {material.header}
                                    <div style={{ fontSize: '12px', color: '#666' }}>Время прочтения: {material.readingTime} мин</div>
                                </>}
                                subheader={material.description}
                                actions={<Button size="s" mode="primary" onClick={() => handleStartLearning(index)}>Начать изучение</Button>}
                                style={{ marginBottom: '10px' }}
                            />
                        ))}
                        <Banner
                            before={isAdditionalOpen ? <Icon36CoinsStacks3Outline /> : <Icon36CoinsStacks3Outline />}

                            header={<>
                                {"Что такое криптовалюта?"}
                                <div style={{ fontSize: '12px', color: '#666' }}>Время прочтения: 51 мин</div>
                            </>}
                            subheader="Обучающий курс об основах блокчейн-индустрии. Рассказываем о децентрализованных финансах."
                            asideMode="expand"
                            onClick={() => setIsAdditionalOpen(!isAdditionalOpen)}
                            style={{ marginBottom: '10px' }}
                        />
                        {isAdditionalOpen && (
                            <Div>
                                {materials.slice(4).map((material, index) => (
                                    <Banner
                                        before={material.icon}
                                        key={index + 4}
                                        header={<>
                                            {material.header}
                                            <div style={{ fontSize: '12px', color: '#666' }}>Время прочтения: {material.readingTime} мин</div>
                                        </>}
                                        subheader={material.description}
                                        actions={<Button size="s" mode="primary" onClick={() => handleStartLearning(index + 4)}>Начать изучение</Button>}
                                        style={{ marginBottom: '10px' }}
                                    />
                                ))}
                            </Div>
                        )}
                    </Group>
                </Panel>
            ) : (
                <TrainingPage material={selectedMaterial} openModal={openModal} selectedBanner={selectedBanner} />
            )}
        </>
    );
};
export default TrainingTab;