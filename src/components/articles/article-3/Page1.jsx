import { Panel, Div, Text, Header} from '@vkontakte/vkui';
const Page1 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Div>
                <Header mode="secondary">Протоколы HTTP и HTTPS</Header>
                <Text>Все сайты в интернете построены по принципу «Запрос — ответ». Например, когда вы спрашиваете
                    в Google «Как приготовить торт», то запрос с таким текстом посылается на сервер. Он находит все
                    подходящие ссылки и возвращает страницу, на которой расположены результаты по запросу:</Text><br/>
                <div style={{ overflow: 'hidden', borderRadius: '10px' }}>
                    <img src="/images/articles/article-3/article-3-1.jpg" alt="article-3-1" style={{ width: '100%', height: '100%' }} />
                </div>

                <Text style={{marginTop: "20px"}}>Клиент и сервер общаются по правилам, то есть по протоколам. Для работы с сайтами
    используются два основных протокола:</Text>
                <li>HTTP (HyperText Transfer Protocol) — протокол передачи гипертекста</li>
                <li>HTTPS (HyperText Transfer Protocol Secure) — защищенный протокол передачи гипертекста</li>
            </Div>

            <Div>
                <Text>Эти протоколы находятся на прикладном уровне модели TCP/IP и описывают, в каком формате
                    посылаются запросы, и что ожидается в ответ. Это скрыто от пользователя. При этом даже простой
                    запрос в поисковую систему состоит из множества дополнительной информации, которая пересылается
                    от пользователя.</Text>
            </Div>
        </Panel>
    );
};

export default Page1;
