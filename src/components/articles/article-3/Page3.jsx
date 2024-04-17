import {Panel, Div, Text, Header} from '@vkontakte/vkui';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
const Page3 = ({ onNextPage }) => {
    const codeString = `GET /search?q=как+приготовить+торт HTTP/1.1
Host: google.com
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.124 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Language: ru,en;q=0.9
Accept-Encoding: gzip, deflate, br`;
    return (
        <Panel id="cyber-security-article-part7">
            <Div>
                <Header mode="secondary">Запрос в HTTP</Header>
                <Text>Рассмотрим, как выглядит запрос и ответ на примере поискового запроса в гугле.</Text>

                <Text style={{marginTop: "20px"}}>Когда пользователь хочет узнать у Google, как приготовить торт,
                    по HTTP отправляется запрос:</Text>
                <SyntaxHighlighter language="http" style={a11yDark}>
                    {codeString}
                </SyntaxHighlighter>
                <Text style={{marginTop: "20px", marginBottom: "10px"}}>Это не полный список данных. Но по нему уже можно понять, как много
                    данных посылается на сервер, чтобы получить список сайтов по запросу. В этом запросе браузер
                    послал на сервер:</Text>
                <li>Поисковую фразу «Как приготовить торт»</li>
                <li>Куда именно посылается информация</li>
                <li>Какой используется браузер или User-Agent — строка, где собираются данные о
                    пользователе, который отправил запрос</li>
                <li>Разрешенные типы данных, которые мы готовы получить</li>
            </Div>
            <Div>
                <Text>То, что указано в примере выше, является протоколом HTTP.</Text>

            </Div>
        </Panel>
    );
};

export default Page3;
