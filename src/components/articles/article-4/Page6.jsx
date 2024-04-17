import { Panel, Div, Text, Header} from '@vkontakte/vkui';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/prism';
const Page6 = ({ onNextPage }) => {

    const codeString = `# Адрес для обращения компьютера к себе
127.0.0.1      localhost

# Адреса компьютеров Хекслета в сети
120.1.200.2    Hexlet-PC-JavaScript
97.250.32.12   Hexlet-PC-Ruby
32.42.10.1     Hexlet-PC-DEV`;

    return (
        <Panel id="cyber-security-article-part7">
            <Div>
                <Header mode="secondary">Файл hosts.txt</Header>
                <Text>Отсутствие единой базы имен компьютеров и адресов усложняло жизнь пользователям.
                    Поэтому придумали систему хранения в едином файле — <mark>hosts.txt</mark>.</Text>

                <Text style={{marginTop: "20px", marginBottom: "10px"}}>В файле <code>hosts.txt</code> описывается
                      структура вида IP-адрес — имя компьютера:</Text>

                <SyntaxHighlighter language="http" style={a11yDark}>
                    {codeString}
                </SyntaxHighlighter>
                <Text style={{marginTop: "10px", marginBottom: "10px"}}>Такая запись решила две проблемы:</Text>
                <li>Пользователям не нужно хранить адреса компьютеров в сети самостоятельно</li>
                <li>Компьютеры получили удобные имена для обращения. Например,
                    адреса <code>120.1.200.2, 97.250.32.12, 32.42.10.1</code> заменились
                    на <i>Hexlet-PC-JavaScript</i>, <i>Hexlet-PC-Ruby</i> или <i>Hexlet-PC-DEV</i>.</li>

                <Text style={{marginTop: "20px"}}>Если адрес компьютера менялся, то обновляли файл <code>hosts.txt</code> и не
                    запоминали, какой адрес у компьютера теперь.</Text>
                <Text style={{marginTop: "20px"}}>Файл хранился на одном из компьютеров ARPANet,
                    и пользователи самостоятельно обновляли его на своем устройстве один раз в одну-две недели.
                    Это было удобнее, чем записывать в блокнот.</Text>
                <Text style={{marginTop: "20px"}}>При этом появились бюрократические проблемы. Например, чтобы добавить
                    в сеть новый компьютер, ученые писали запрос в институт, где хранился главный файл <code>hosts.txt.</code>
                    Только так адрес появлялся в новой версии.</Text>
                <Text style={{marginTop: "20px"}}>Но количество пользователей росло, и система хранения адресов
                    <code>hosts.txt</code> становилась сложной и неудобной. Представьте, если один человек записывает телефонные
                    номера людей в районе, и к нему приходят, чтобы обновить базу и получить новые номера.
                    Поэтому систему нужно было автоматизировать.</Text>
            </Div>
        </Panel>
    );
};

export default Page6;
