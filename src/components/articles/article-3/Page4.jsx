import {Panel, Div, Text, Header} from '@vkontakte/vkui';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
const Page4 = ({ onNextPage }) => {
    const codeString = ("HTTP/1.1 200 OK\n" +
        "Last-Modified: Sun, 07 Jul 2022 13:10:10 GMT\n" +
        "Connection: Keep-Alive\n" +
        "Content-Type: text/html; charset=UTF-8\n" +
        "\n" +
        "<!doctype html>\n" +
        "<html>\n" +
        "Здесь и далее разметка в формате HTML");
    return (
        <Panel id="cyber-security-article-part7">
            <Div>
                <Header mode="secondary">Ответ в HTTP</Header>
                <Text style={{marginBottom: "10px"}}>Когда запрос посылается в HTTP, клиент ожидает ответ.
                    Он включает в себя:</Text>
                <li>Статус ответа. Возможно, запрашиваемой страницы не существует. Тогда сервер вернет статус 404.
                    Если страница есть и все в порядке, то вернется код 200</li>
                <li>Служебные заголовки. Здесь может быть указана дата, размер ответа, тип ответа. Это полезно для
                    браузера, чтобы он мог корректно отобразить страницу</li>
                <li>Тело ответа. Здесь и хранится вся страница, которую нужно отобразить. Она присылается в виде
                    HTML разметки, на которой и проектируются сайты в интернете</li>
                <Text style={{marginTop: "20px"}}>Тело ответа может быть очень большим и содержать десятки тысяч строк
                    кода. А браузеру нужно это обработать перед тем, как вывести на экран.
                    Вот как может выглядеть ответ от сервера:</Text>
                <SyntaxHighlighter language="http" style={a11yDark}>
                    {codeString}
                </SyntaxHighlighter>
                <Text style={{marginTop: "20px", marginBottom: "10px"}}>В запросе и ответе данные посылаются в открытом
                    виде. В итоге можно увидеть, какие данные были посланы и получены. Все это никак не зашифровано.
                    Поэтому такая передача данных ненадежна для конфиденциальной информации, например ваших
                    паспортных данных:</Text>
                <div style={{ overflow: 'hidden', borderRadius: '10px' }}>
                    <img src="/images/articles/article-3/article-3-2.jpg" alt="article-3-2" style={{ width: '100%', height: '100%' }} />
                </div>

            </Div>
            <Div>
                <Text>Чтобы решить проблему защищенности при передаче информации, разработали протокол HTTPS.</Text>

            </Div>
        </Panel>
    );
};

export default Page4;
