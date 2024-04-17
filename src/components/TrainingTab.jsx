import React, { useState } from 'react';
import { Panel, PanelHeader, Group, Banner, Button } from '@vkontakte/vkui';
import TrainingPage from './TrainingPage';
import {
    Icon36Coins,
    Icon36DiamondOutline,
    Icon36GiftOutline,
    Icon36IncognitoOutline
} from '@vkontakte/icons';

const TrainingTab = ({ id, openModal, onFinish }) => {
    const [selectedMaterial, setSelectedMaterial] = useState(null);
    const [selectedBanner, setSelectedBanner] = useState(null);

    const materials = [
        { header: '15 правил для работы в интернете', description: 'Большая часть нашей повседневной жизни так или ' +
                'иначе связана с интернетом: в интернете мы работаем, учимся и даже общаемся с друзьями. Важно знать ' +
                'правила безопасности в интернете – они помогут защитить от угроз ваши данные и устройства.',
            icon: <Icon36IncognitoOutline /> },
        { header: '54 вида кибератак', description: 'Интернет привнес в нашу жизнь позитивные изменения, но вместе ' +
                'с этим возникла и огромная проблема защиты данных. Это приводит к возникновению кибератак. В этой ' +
                'статье мы рассмотрим различные виды кибератак и способы их предотвращения.', icon: <Icon36Coins />},
        { header: 'Что такое HTTPS и для чего он нужен?', description: 'В этом уроке мы рассмотрим работу этих ' +
                'протоколов, что отсылается на сервер и какую информацию получает клиент. Также узнаем, почему ' +
                'нельзя передавать банковские данные по протоколу HTTP, а лучше для этих целей использовать HTTPS. ' +
                'Еще мы разберемся, при чем здесь атака Man-in-the-Middle.', icon: <Icon36DiamondOutline />},
        { header: 'Компьютерные адреса', description: 'Хватит ли IP-адресов на всех пользователей и почему их ' +
                'неудобно использовать?', icon: <Icon36GiftOutline />}
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
                        {materials.map((material, index) => (
                            <Banner
                                before={material.icon}
                                key={index}
                                header={material.header}
                                subheader={material.description}
                                actions={<Button size="s" mode="primary" onClick={() => handleStartLearning(index)}>Начать изучение</Button>}
                                style={{ marginBottom: '10px' }}
                            />
                        ))}
                    </Group>
                </Panel>
            ) : (
                <TrainingPage material={selectedMaterial} openModal={openModal} selectedBanner={selectedBanner} />
            )}
        </>
    );
};

export default TrainingTab;
