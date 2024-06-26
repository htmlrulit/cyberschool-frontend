import {Panel, Div, Text, Header} from '@vkontakte/vkui';
const Page3 = ({ onNextPage }) => {
    return (
        <Panel id="cyber-security-article-part7">
            <Header>Почему Биткоин важен</Header>
            <Div>
                <Text style={{marginTop: "10px", marginBottom: "10px"}}>Биткоин заложил основу так называемой
                    децентрализованной финансовой системы. Смысл в том, что нет конкретного лица (компании или
                    государства), которое бы контролировало принципы работы этой системы. Участником сети Биткоин
                    может стать любой человек с компьютером или смартфоном и доступом в интернет.</Text>
                <Text style={{marginTop: "10px"}}>Децентрализованные финансы можно сравнить с «частными деньгами»,
                    когда эмитентом может стать компания, регион или даже отдельный человек.</Text>
                <Text style={{marginTop: "10px"}}>В централизованной финансовой системе эмитентами денег выступают
                    государства, а для перевода средств необходимо открыть счет в банке. Децентрализованная система
                    строится на принципах безусловного доступа и отсутствия необходимости в посредниках.</Text>
                <Text style={{marginTop: "10px"}}>Также централизованные государственные валюты предполагают
                    возможность контролировать эмиссию (выпуск) новых денег. То есть ФРС США может напечатать
                    столько долларов, сколько захочет. В Биткоине такая возможность отсутствует.</Text>
                <Header>А сколько всего биткоинов</Header>
                <Text style={{marginTop: "10px"}}>Чтобы не запутаться, давайте разделим понятия сеть Биткоин
                    (блокчейн) и биткоин (монета BTC, которая обращается в сети Биткоин).</Text>
                <Text style={{marginTop: "10px"}}>Спустя 12 лет с момент запуска, по состоянию на начало 2022 года,
                    было добыто уже более 90% всех биткоинов. Всего их может существовать не более 21 млн. Данное
                    ограничение установлено на уровне кода. Из существующих на данный момент примерно 19 млн
                    биткоинов некоторая часть считается утерянной навсегда.</Text>
            </Div>
        </Panel>
    );
};

export default Page3;
