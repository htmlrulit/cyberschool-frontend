import { Panel, PanelHeader, Div, Text, Header} from '@vkontakte/vkui';
const SecondPage20 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Header>31-34</Header>
            <Div>
                <Header mode="secondary">31. Атаки межсайтового скриптинга (XSS)</Header>
                <Text>Злоумышленник вставляет неавторизованный код в легитимный веб-сайт, чтобы получить доступ к
                    информации пользователя и похитить конфиденциальные данные, такие как пароли
                    и данные кредитных карт.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">32. Подслушивающие атаки</Header>
                <Text>Злоумышленник перехватывает коммуникацию между двумя сторонами
                    с целью получения доступа к конфиденциальной информации.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">33. Атака в день рождения</Header>
                <Text>Криптографическая атака использует парадокс дня рождения для получения доступа к
                    коллизии в хэш-функции. Злоумышленник успешно генерирует два входных сигнала, получая на
                    выходе одно и то же хэш-значение. Это может быть использовано для компрометации с
                    целью обхода контроля доступа.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">34. Атаки на основе объема</Header>
                <Text>Злоумышленник наводняет систему большим объемом данных, чтобы сделать ее
                    недоступной для легитимных пользователей. Например, DDoS-атаки, при которых различные
                    скомпрометированные компьютеры наводняют трафиком определенный веб-сайт, чтобы вывести
                    его из строя.</Text><br/>
            </Div>

        </Panel>
    );
};

export default SecondPage20;
