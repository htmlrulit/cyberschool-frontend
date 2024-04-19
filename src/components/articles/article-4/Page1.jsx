import {Panel, Div, Text, Header, Title} from '@vkontakte/vkui';
const Page1 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Div>
                <Header mode="secondary">Что такое уникальный адрес</Header>
                <Text>Для того чтобы общаться с другими устройствами в сети, у
                    компьютера есть уникальный адрес. Он стал частью соглашений и правил, которые придумали
                    инженеры ARPANet и назвали Internet Protocol (IP). Уникальный адрес, который описывает адреса
                    компьютеров в сети, назвали IP-адресом.</Text>
                <Text style={{marginTop: "20px"}}>У IP-адреса есть несколько стандартов. Рассмотрим самые
                    используемые в настоящее время:</Text>
                <li>Стандарт IPv4</li>
                <li>Стандарт IPv6</li>
                <Text style={{marginTop: "20px"}}>Разберем подробнее каждый стандарт.</Text>
            </Div>
        </Panel>
    );
};

export default Page1;
