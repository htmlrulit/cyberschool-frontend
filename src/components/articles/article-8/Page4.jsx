import {Panel, Div, Text, Header, Title} from '@vkontakte/vkui';
const Page4 = ({ onNextPage }) => {
    return (
        <Panel id="cyber-security-article-part7">
            <Header>Классификация криптовалют</Header>
            <Div>
                <Text style={{marginTop: "10px", marginBottom: "10px"}}>В мире насчитывается несколько тысяч
                    различных криптовалют. Каждый день появляются десятки новых монет (coins/коинов) и токенов
                    (tokens). В интернете есть различные агрегаторы, на которых можно посмотреть списки
                    существующих криптовалют, примером такого агрегатора является сайт Coingecko.</Text>

                <Text style={{marginTop: "10px", marginBottom: "10px"}}>Чем же различаются криптовалюты? Есть
                    множество классификаций, но самая важная — разделение на криптовалюты с собственным блокчейном
                    и криптовалюты, выпущенные в каком-либо существующем блокчейне. Так сложилось, что криптовалюты
                    со своим блокчейном называют монетами, или коинами, — например, те же биткоины (у сети
                    Биткоин свой блокчейн).</Text>
                <Text style={{marginTop: "10px"}}>Монеты (или коины) появляются в блокчейн-сети в процессе ее работы.
                    В случае с Биткоином новые монеты возникают в результате генерации нового блока, и эти новые
                    монеты получает майнер, добывший блок. Таким образом, количество монет в сети постепенно
                    увеличивается. Майнеры могут продать свои монеты, а могут оставить их в своих кошельках
                    и хранить, переходя в разряд инвесторов.</Text>
            </Div>
        </Panel>
    );
};

export default Page4;
