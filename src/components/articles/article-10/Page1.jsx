import {Panel, Div, Text, Header, Title} from '@vkontakte/vkui';
const Page1 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Div>
                <Title>План курса №6</Title>
                <Header style={{marginTop: "20px"}}>Что Вы узнаете?</Header>
                <li>Каковы основные риски вложения в криптовалюты</li>
                <li>Как относятся к криптовалютам крупные инвесторы</li>
                <li>Каким способом страны регулируют рынок криптовалют</li>
                <Header style={{marginTop: "20px"}}>Чему вы научитесь</Header>
                <li>Понимать риски инвестиций в цифровые активы</li>
                <li>Выбирать наиболее подходящие юрисдикции для вложений в криптовалюты</li>
                <Text style={{marginTop: "20px"}}>В этом уроке мы рассмотрим возможности и риски, связанные с
                    криптовалютами, а также их правовой статус и перспективу появления государственных
                    цифровых валют</Text>
            </Div>
        </Panel>
    );
};

export default Page1;
