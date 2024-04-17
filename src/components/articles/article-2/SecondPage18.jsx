import { Panel, PanelHeader, Div, Text, Header} from '@vkontakte/vkui';
const SecondPage18 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <PanelHeader>23-26</PanelHeader>
            <Div>
                <Header mode="secondary">23. Фишинговые атаки на китов</Header>
                <Text>Нацелены на высокопоставленных лиц, таких как руководители или знаменитости,
                    и используют сложные методы социальной инженерии для получения конфиденциальной информации.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">24. Spear-Phishing-атаки</Header>
                <Text>Нацелены на конкретных людей или группы в организации. Злоумышленники используют
                    методы социальной инженерии для получения конфиденциальной информации.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">25. Интерпретация URL</Header>
                <Text>Веб-браузер интерпретирует URL (Uniform Resource Locator) и запрашивает
                    соответствующую веб-страницу для использования уязвимостей в интерпретации URL.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">26. Перехват сеанса</Header>
                <Text>Хакер получает доступ к идентификатору сеанса пользователя для аутентификации
                    сеанса пользователя в веб-приложении и получения контроля над сеансом пользователя.</Text><br/>
            </Div>

        </Panel>
    );
};

export default SecondPage18;
