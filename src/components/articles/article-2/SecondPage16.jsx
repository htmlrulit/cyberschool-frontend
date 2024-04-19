import { Panel, PanelHeader, Div, Text, Header} from '@vkontakte/vkui';
const SecondPage16 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Header>15-18</Header>
            <Div>
                <Header mode="secondary">15. Туннелирование DNS</Header>
                <Text>Злоумышленник использует систему доменных имен (DNS) для обхода мер безопасности
                    и связи с удаленным сервером.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">16. Подмена DNS</Header>
                <Text>Кибератака, в ходе которой злоумышленник манипулирует DNS-записями веб-сайта,
                    чтобы контролировать его трафик.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">17. Атаки на основе IoT</Header>
                <Text>Использование уязвимостей в сетях Интернета вещей (IoT), таких как «умные»
                    термостаты и камеры наблюдения, для кражи данных.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">18. Ransomware</Header>
                <Text>Шифрует данные жертвы и требует взамен оплату.</Text><br/>
            </Div>

        </Panel>
    );
};

export default SecondPage16;
