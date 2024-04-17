import { Panel, Div, Text, Header} from '@vkontakte/vkui';
const Page7 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Div>
                <Header mode="secondary">Коротко о главном</Header>
                <li>С точки зрения пользователя, криптовалюта мало чем отличается от денег на банковской карте.</li>
                <li>Ценность криптовалюты зависит от ее признания инвесторами.</li>
                <li>Крупные компании признали криптовалюты и уже инвестировали в них сотни миллионов долларов.
                    Частный инвестор может косвенно вложиться в криптовалюту через покупку акций таких компаний.</li>


                <Header>В следующих сериях…</Header>
                <Text style={{marginTop: "10px"}}>Компании MicroStrategy и Square инвестируют в биткоин, а PayPal,
                    MasterCard, Visa и другие финансовые компании интегрируют криптовалюты в свои сервисы.
                    Даже государства покупают биткоины на свой баланс. Почему и зачем? Разберемся в следующем
                    уроке, начав с самой технологии блокчейн.</Text>


            </Div>
        </Panel>
    );
};

export default Page7;