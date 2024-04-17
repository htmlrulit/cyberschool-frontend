import { Panel, Div, Text, Header} from '@vkontakte/vkui';
const Page2 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Div>
                <Header mode="secondary">Протокол HTTP</Header>
                <Text>Представьте страницу сайта в интернете. Она состоит из текстов, картинок, видео и аудио.
                    Все это обычная текстовая страница. В интернете страницы связаны между собой ссылками. Например,
                    чтобы зайти в этот урок, вам нужно перейти по ссылке в курсе или нажать кнопку «Далее»
                    в предыдущем уроке.</Text>

                <Text style={{marginTop: "20px"}}>Ссылки, которые направляют на другие страницы, называются
                    гиперссылками,а страница в интернете состоит из гипертекста — текста со ссылками. Именно это и
                    подразумевается под протоколом передачи гипертекста — передается целая страница с текстом,
                    медиафайлами, разметкой на языке HTML, CSS и JavaScript.</Text>

                <Text style={{marginTop: "20px"}}>HTTP — набор правил, по которым передается запрос на получение
                    гипертекста. По этим правилам определяется формат ответа на запрос. Важно, что порядок именно
                    такой — пользователь посылает запрос и получает ответ в виде страницы.</Text>
 </Div>
        </Panel>
    );
};

export default Page2;