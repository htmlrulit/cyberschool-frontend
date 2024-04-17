import React, { useContext } from 'react';
import { Panel, Placeholder, Button } from '@vkontakte/vkui';
import { Icon56ErrorOutline } from '@vkontakte/icons';
import { GlobalContext } from '../context';

const Error = ({ id }) => {
    const { go, index } = useContext(GlobalContext);

    return (
        <Panel id={id}>
            <Placeholder
                icon={<Icon56ErrorOutline />}
                action={
                    <Button stretched size="l" mode="secondary" onClick={() => go(index)}>
                        Вернуться на главную
                    </Button>
                }
                stretched
            >
                Страница, которую Вы пытались открыть, не существует! Пожалуйста, вернитесь на главную страницу!
            </Placeholder>
        </Panel>
    );
}

export default Error;
