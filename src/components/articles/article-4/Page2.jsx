import { Panel, Div, Text, Header} from '@vkontakte/vkui';
const Page2 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Div>
                <Header mode="secondary">Стандарт IPv4</Header>
                <Text>IP-адрес стандарта IPv4 состоит из четырех числовых блоков и записывается в формате десятичной
                    системы счисления — используются цифры от нуля до девяти. Каждый блок IP-адреса содержит число
                    от 0 до 255 — например, <code>172.32.110.14</code></Text>

                <Text style={{marginTop: "20px"}}>В этом стандарте выделяют два типа адресов:</Text>
                <li>Внутренний IP-адрес</li>
                <li>Внешний IP-адрес</li>

                <Text style={{marginTop: "20px", marginBottom: "10px"}}>Внутренние адреса работают только в пределах
                    локальной сети — по ним
                    нельзя передать информацию из глобальной сети. В интернете насчитывается
                    <code> 22 085 632</code> таких адресов, они выделяются по группам:</Text>
                <code>
                <li>10.0.0.0 — 10.255.255.255</li>
                <li>100.64.0.0 — 100.127.255.255</li>
                <li>172.16.0.0 — 172.31.255.255</li>
                <li>192.168.0.0 — 192.168.255.255</li>
                </code>
 </Div>
            <Div>
                <Text style={{marginTop: "0px"}}>Диапазоны таких адресов придумывались разработчиками по мере
                    необходимости и в них нет «скрытого смысла». Внимательно посмотрите на адреса, в каждом диапазоне
                    разное количество доступных адресов. Это сделано, чтобы использовать диапазоны в
                    зависимости от задачи.</Text>
                <Text style={{marginTop: "20px"}}>Есть адреса, которые используют разработчики, когда создают
                    веб-приложения на компьютере. Например, 127.0.0.1 — адрес компьютера, чтобы обращаться к самому
                    себе. С его помощью проект не попадает в глобальную сеть до конца разработки, и можно не
                    подключаться к интернету.</Text>
                <Text style={{marginTop: "20px"}}>Еще внутренние адреса получают домашние компьютеры в районной сети.
                    Это будет IP-адрес, который получило ваше устройство, раздающее интернет в квартире, например,
                    роутер. У него есть связь с глобальной сетью. Роутер определяет, кому пересылать информацию
                    внутри локальной сети.</Text>
                <Text style={{marginTop: "20px"}}>Устройства в локальной сети получат адрес из внутренней группы
                    адресов, а если устройство подключено к интернету, то оно получит внешний IP-адрес.</Text>
                <Text style={{marginTop: "20px"}}>Например, адрес роутера <code>172.32.110.14</code> — это внешний
                    адрес, а адрес компьютера, который подключен к нему — <code>192.168.0.2</code> — внутренний.</Text>

            </Div>
        </Panel>
    );
};

export default Page2;
