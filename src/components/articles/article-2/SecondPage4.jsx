import { Panel, PanelHeader, Div, Text, Header} from '@vkontakte/vkui';
const SecondPage4 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part4">
            <Header>3. Атака на пароль</Header>
            <Div>
                <div style={{ overflow: 'hidden', borderRadius: '10px' }}>
                    <img src="/images/articles/article-2/image_3.jpg" alt="Rounded" style={{ width: '100%', height: 'auto' }} />
                </div>
                <Header mode="secondary">3. Атака на пароль</Header>
                <Text>Это форма атаки, при которой хакер взламывает ваш пароль с помощью различных программ
                    и инструментов для взлома паролей, таких как Aircrack, Cain, Abel, John the Ripper, Hashcat
                    и т.д. Существуют различные типы атак на пароли, такие как атаки грубой силы, атаки по словарю
                    и атаки кейлоггеров.</Text>
            </Div>
            <Div>
                <Header mode="secondary">Способы предотвращения атак</Header>
                <Text>Ниже перечислены некоторые способы предотвращения атак на пароли:</Text>
                <ul>
                    <li>Используйте надежные буквенно-цифровые пароли со специальными символами.</li>
                    <li>Воздержитесь от использования одного и того же пароля для нескольких веб-сайтов или
                        учетных записей.</li>
                    <li>Обновляйте пароли; это позволит ограничить вероятность атаки на пароль.</li>
                    <li>Не делайте никаких намеков на пароль в открытом виде.</li>
                </ul>
            </Div>

        </Panel>
    );
};

export default SecondPage4;
