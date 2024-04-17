import { Panel, PanelHeader, Div, Text, Header} from '@vkontakte/vkui';
const SecondPage3 = ({ onNextPage }) => {
    return (
        <Panel id="cyber-security-article-part3">
            <PanelHeader>2. Фишинговая атака</PanelHeader>
            <Div>
                <Header mode="secondary">2. Фишинговая атака</Header>
                <Text>Фишинговые атаки — один из самых распространенных видов кибератак. Это один из видов
                    социально-инженерных атак, в ходе которого злоумышленник выдает себя за доверенного человека и
                    рассылает жертве фальшивые письма.</Text><br/>
                <Text>Не зная об этом, жертва открывает письмо и переходит по вредоносной ссылке или открывает
                    вложение письма. Таким образом злоумышленники получают доступ к конфиденциальной информации и
                    учетным данным. Кроме того, с помощью фишинговой атаки они могут установить вредоносное ПО.</Text>
            </Div>
            <div style={{ overflow: 'hidden', borderRadius: '10px' }}>
                <img src="/images/articles/article-2/image_2.jpg" alt="Rounded" style={{ width: '100%', height: 'auto' }} />
            </div>
            <Div>
                <Header mode="secondary">Рекомендации</Header>
                <Text>Фишинговые атаки можно предотвратить, выполнив описанные ниже действия:</Text>
                <ul>
                    <li>Внимательно изучайте получаемые электронные письма. Большинство фишинговых писем содержат
                        существенные ошибки, такие как орфографические ошибки и изменение формата по сравнению с
                        легитимными источниками.</li>
                    <li>Используйте панель инструментов антифишинга.</li>
                    <li>Регулярно обновляйте пароли.</li>
                </ul>
            </Div>
        </Panel>
    );
};

export default SecondPage3;
