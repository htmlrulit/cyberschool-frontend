import { Panel, Div, Text, Header} from '@vkontakte/vkui';
const Page7 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Div>
                <Header mode="secondary">DNS</Header>
                <Text style={{marginTop: "10px"}}>Заменой файлу <code>hosts.txt</code> стала система доменных
                    имен или <b>DNS (Domain Name System) </b>
                    — автоматизированный сервис, который хранит адреса и имена компьютеров в сети.</Text>
                <Text style={{marginTop: "10px"}}>Задача DNS — вернуть IP-адрес компьютера по его имени.
                    Теперь не нужно присваивать и обновлять адреса для каждого компьютера в сети вручную.</Text>
                <Text style={{marginTop: "10px"}}>DNS стала большой базой данных, которая помогает компьютерам в сети
                    общаться друг с другом. Компьютер, на котором находится сервис DNS, называется DNS-сервер.</Text>
                <Text style={{marginTop: "10px", marginBottom: "10px"}}>Сервис может работать внутри локальной и глобальной сетей.
                    Когда компьютер посылает сообщение на другое устройство, то запрашивает IP-адрес получателя
                    у DNS-сервера. Так это выглядит пошагово:</Text>
                <div style={{ overflow: 'hidden', borderRadius: '10px' }}>
                    <img src="/images/articles/article-4/article-4-1.jpg" alt="article-4-1" style={{ width: '100%', height: '100%' }} />
                </div>
                <Text>
                    <li>1. Компьютер Hexlet_1 посылает запрос на DNS-сервер с просьбой сказать ему IP-адрес компьютера Hexlet_4</li>
                    <li>2. DNS-сервер находит в записях компьютер Hexlet_4 и возвращает его IP-адрес на компьютер Hexlet_1</li>
                    <li>3. Компьютер Hexlet_1 посылает информацию на адрес, который получил от DNS-сервера</li>
                </Text>
                <Text style={{marginTop: "10px"}}>С развитием интернета у DNS появились другие серверы, у каждого из
                    которых своя зона работы.</Text>
                <Text style={{marginTop: "10px"}}>Теперь вы знаете, где и как хранится такое большое количество
                    IP-адресов. DNS автоматизировал работу с адресами, что сделало их хранение более удобным.
                    При этом файлом <code>hosts.txt</code> продолжают пользоваться — чаще всего для создания
                    веб-приложений.</Text>


            </Div>
        </Panel>
    );
};

export default Page7;
