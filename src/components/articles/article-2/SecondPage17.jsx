import { Panel, PanelHeader, Div, Text, Header} from '@vkontakte/vkui';
const SecondPage17 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Header>19-22</Header>
            <Div>
                <Header mode="secondary">19. «отказ в обслуживании» (DDos)</Header>
                <Text>Наводнение веб-сайта трафиком с целью сделать его недоступным для легитимных
                    пользователей и использовать уязвимые места в конкретной сети.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">20. Рассылка спама</Header>
                <Text>Рассылка неаутентичных электронных писем для распространения фишинговых атак.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">21. CATO</Header>
                <Text>Хакеры используют украденные учетные данные для доступа к чужим банковским счетам.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">22. Выдача наличных через банкомат</Header>
                <Text>Хакеры подбираются к компьютерным системам банка, чтобы снимать с
                    банкоматов большие суммы наличных.</Text><br/>
            </Div>

        </Panel>
    );
};

export default SecondPage17;
