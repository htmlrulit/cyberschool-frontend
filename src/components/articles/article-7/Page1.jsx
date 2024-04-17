import {Panel, Div, Text, Header, Title} from '@vkontakte/vkui';
const Page1 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Div>
                <Title>План курса №3</Title>
                <Header style={{marginTop: "20px"}}>Что Вы узнаете?</Header>
                <li>Сильные стороны блокчейна</li>
                <li>Области применения технологии блокчейн</li>
                <li>Как работает Эфириум</li>
                <Header style={{marginTop: "20px"}}>Чему вы научитесь</Header>
                <li>Оценивать криптовалюты с точки зрения их слабых и сильных сторон</li>
                <li>Ориентироваться в принципах работы смарт-контрактов</li>
                <Text style={{marginTop: "20px"}}>Очень часто из уст различных экспертов индустрии можно услышать,
                    что криптовалюты имеют ряд преимуществ перед традиционными платежными средствами. Но почему
                    криптовалюта до сих пор не используется повсеместно? Или используется? Давайте разбираться.</Text>
            </Div>
        </Panel>
    );
};

export default Page1;
