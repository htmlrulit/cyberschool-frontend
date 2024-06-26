import { Panel, PanelHeader, Div, Text, Header} from '@vkontakte/vkui';
const SecondPage19 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Header>27-30</Header>
            <Div>
                <Header mode="secondary">27. Атака грубой силой</Header>
                <Text>Злоумышленник получает несанкционированный доступ к системе, пробуя различные пароли до тех пор,
                    пока не будет найден правильный. Этот метод может быть весьма эффективен при
                    использовании слабых паролей.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">28. Веб-атаки</Header>
                <Text>Нацелен на веб-сайты и может осуществлять SQL-инъекции,
                    межсайтовый скриптинг (XSS) и включение файлов</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">29. Троянские кони</Header>
                <Text>Вредоносное ПО, которое выглядит как легитимная программа, но содержит вредоносный код.
                    После установки она может выполнять такие вредоносные действия, как кража
                    данных и контроль над системой.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">30. Прогулочные атаки</Header>
                <Text>Вредоносные программы попадают в систему пользователя при посещении его скомпрометированного
                    сайта, который использует уязвимости в другом программном обеспечении для установки
                    вредоносных программ без ведома пользователя.</Text><br/>
            </Div>

        </Panel>
    );
};

export default SecondPage19;
