import { Panel, PanelHeader, Div, Text, Header} from '@vkontakte/vkui';
const SecondPage21 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Header>35-38</Header>
            <Div>
                <Header mode="secondary">35. Атаки на протокол</Header>
                <Text>Использование уязвимостей в сетевых протоколах для получения несанкционированного доступа к
                    системе или нарушения ее нормальной работы. В качестве примеров можно привести атаку SYN
                    Flood по протоколу управления передачей (TCP) и атаку Flood по протоколу управляющих
                    сообщений Интернета (ICMP).</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">36. Атаки на прикладном уровне</Header>
                <Text>Нацелен на прикладной уровень системы и предназначен для использования
                    уязвимостей в приложениях или веб-серверах.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">37. Атаки на словарь</Header>
                <Text>Злоумышленник пытается угадать пароль пользователя, перебирая список обычных слов.
                    Эта атака становится успешной, поскольку многие пользователи используют
                    слабые или простые пароли.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">38. Вирус</Header>
                <Text>Вредоносные программы могут самовоспроизводиться и распространяться на других компьютерах.
                    Вирусы могут наносить значительный ущерб системе, повреждать файлы, похищать
                    информацию и т.д.</Text><br/>
            </Div>

        </Panel>
    );
};

export default SecondPage21;
