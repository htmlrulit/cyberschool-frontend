import { Panel, PanelHeader, Div, Text, Header} from '@vkontakte/vkui';
const SecondPage5 = ({ onNextPage }) => {


    return (
        <Panel id="cyber-security-article-part5">
            <Header>4. Атака «MITM»</Header>
            <Div>
                <div style={{ overflow: 'hidden', borderRadius: '10px' }}>
                    <img src="/images/articles/article-2/image_4.jpg" alt="Rounded" style={{ width: '100%', height: 'auto' }} />
                </div>
                <Header mode="secondary">4. Атака MITM</Header>
                <Text>Атака «человек посередине» (MITM) также известна как атака с подслушиванием.
                    При этой атаке злоумышленник вклинивается между двумя сторонами, т.е. перехватывает сеанс
                    связи между клиентом и хостом. Таким образом, хакеры похищают данные и манипулируют ими.</Text>
                <Text>Как показано ниже, связь клиент-сервер прервана, и вместо этого линия связи
                    проходит через хакера.</Text>
            </Div>
            <Div>
                <Header mode="secondary">Предотвращение атак</Header>
                <Text>Предотвратить MITM-атаки можно, выполнив описанные ниже действия:</Text>
                <ul>
                    <li>Помните о безопасности используемого веб-сайта. Используйте шифрование на своих устройствах.</li>
                    <li>Воздержитесь от использования публичных сетей Wi-Fi.</li>
                </ul>
            </Div>
        </Panel>
    );
};


export default SecondPage5;
