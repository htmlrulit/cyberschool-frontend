import {Panel, Div, Text, Header, Title} from '@vkontakte/vkui';
const Page3 = ({ onNextPage }) => {
    return (
        <Panel id="cyber-security-article-part7">
            <Header>История</Header>
            <Div>
                <Text style={{marginTop: "10px", marginBottom: "10px"}}>После появления Эфириума и технологии
                    смарт-контрактов выпуск криптовалюты стал доступным более широкому кругу лиц. Стало
                    необязательно запускать целый новый блокчейн, достаточно было лишь выпустить токен в сети
                    Эфириум. Далее выпущенные токены можно использовать для различных целей — платежей,
                    предоставления скидок, обеспечения доступа к каким-либо сервисам и т.д.</Text>

                <Header style={{marginTop: "20px"}}>ICO</Header>
                <Text style={{marginTop: "10px"}}>Одним из наиболее популярных способов заработка стало привлечение
                    средств в проекты путем продажи токенов или коинов. Этот механизм получил название Initial
                    Coin Offering (сокращенно — ICO).</Text>
                <Text style={{marginTop: "10px"}}>Новые компании продавали часть своих токенов с обещанием сделать их
                    полезными в своем проекте. Такой способ можно сравнить с первичной продажей акций.</Text>
                <Text style={{marginTop: "10px"}}>При этом отличительной особенностью ICO, как правило, являлось
                    полное отсутствие юридической связи между реальным владением компанией и токенами.</Text>
                <Text style={{marginTop: "5px"}}>Также наличие токенов в каком-либо проекте не делает сам продукт
                    привлекательнее автоматически. Эти факторы привели к тому, что большинство проектов ICO
                    периода 2017—2018 годов были неудачными, а инвесторы не увидели прибыли.</Text>
                <Text style={{marginTop: "10px"}}>Кардинально другая ситуация складывается на современном
                    криптовалютном рынке. Как правило, большинство проектов финансируется венчурными инвесторами,
                    которые хорошо разбираются в нюансах предлагаемых проектов. Сами проекты, в свою очередь,
                    закладывают в свою модель токена связь с реальными доходами продукта, а также функцию
                    управления продуктом.</Text>

                <Header>Стейблкоины</Header>
                <Text style={{marginTop: "10px"}}>Фундаментом современного криптовалютного рынка являются
                    стейблкоины. Это монеты с фиксированным курсом. Например, есть компания, которая выпустила
                    свою криптовалюту и заявила, что в любой момент готова обменять токен на $1.</Text>
                <Text style={{marginTop: "10px"}}>По сути, для инвесторов такие криптовалюты являются воротами
                    в мир цифровых активов. Инвесторы меняют свои деньги на стейблкоины, а потом тратят их на
                    биржах на покупку биткоинов, эфириумов и других криптоактивов.</Text>
                <Text style={{marginTop: "10px"}}>Примерами стейблкоинов являются USDT и USDC.</Text>
                <Text style={{marginTop: "10px"}}>Стейблкоины используются как частными инвесторами, так и крупными
                    игроками, которые хотят иметь возможность покупать криптовалютные активы в любой момент. Таким
                    образом снижается зависимость капитала от волатильности рынка.</Text>
                <Text style={{marginTop: "10px"}}>В каком-то смысле стейблкоины можно сравнить с деньгами на
                    брокерском счете: люди держат капитал там, а не на вкладе, чтобы докупать акции во время
                    просадок рынка.</Text>
                <Text style={{marginTop: "10px"}}>Также стейблкоины используются для трансграничных переводов, ведь
                    иногда отправить деньги в другую страну проще с помощью блокчейна, а не традиционных банков.</Text>
                <Title level="2">Курс USDT по отношению к доллару США. Иногда курс может колебаться под воздействием

                    спроса и предложения, однако в долгосрочной перспективе он стремится к $1</Title>
                <div style={{ overflow: 'hidden', borderRadius: '10px', marginTop: "10px"}}>
                    <img src="/images/articles/article-9/article-9-2.png" alt="article-9-2" style={{ width: '100%', height: '100%' }} />
                </div>
            </Div>
        </Panel>
    );
};

export default Page3;