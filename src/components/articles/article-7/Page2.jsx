import {Panel, Div, Text, Header, Title} from '@vkontakte/vkui';
const Page2 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Div>
                <Header>Ключевые преимущества</Header>
                <li>Неизменность внесенных данных.</li>
                <li>Распределенность среди участников сети.</li>
                <li>Децентрализованная природа управления алгоритмом работы.</li>
                <li>Прозрачность данных.</li>
                <Text style={{marginTop: "20px"}}>Все эти свойства делают блокчейн уникальной технологией с точки
                    зрения безопасности. Еще это называют отсутствием доверия (нет необходимости в доверии).</Text>

                <Header>1. Неизменность</Header>
                <Text style={{marginTop: "20px"}}>Данные, которые уже занесены в блок, неизменны после того,
                    как большинство участников сети сохранило у себя этот блок. Появление последующих блоков
                    закрепляет эту неизменность. Однако есть способы атак для подмены данных (например, если кто-то
                    завладеет более чем 51% вычислительной мощности сети).</Text>
                <Text style={{marginTop: "20px"}}>Важно запомнить, что если часть участников сети считает верным одно,
                    а часть — другое, то это уже две разные сети. Подобное произошло с сетями Биткоин и Эфириум,
                    когда часть майнеров откололась и организовала собственные блокчейны (Bitcoin Cash и
                    Ethereum Classic).</Text>
                <Header>2. Распределенность</Header>
                <Text style={{marginTop: "20px", marginBottom: "10px"}}>Распределенность данных означает, что если
                    часть компьютеров отключится от сети, сгорит или будет украдена, то у остальных участников
                    останется свой экземпляр базы данных и все, кто пользуется этими данными, просто будут
                    подключаться к тем участникам, которые активны и продолжают поддерживать сеть.</Text>
                <Text style={{marginTop: "20px", marginBottom: "10px"}}>Это в корне отличается от централизованных
                    систем, к которым мы все привыкли, когда есть
                    один или несколько серверов, на которых хранится информация. Тот, кто контролирует сервера,
                    может изменять или удалять данные без нашего согласия и без ведения других участников.</Text>
                <Header>3. Децентрализация</Header>
                <Text style={{marginTop: "20px", marginBottom: "10px"}}>Третье очень важное свойство —
                    децентрализованность, то есть отсутствие единого центра управления блокчейном. Например,
                    все узлы в сети Биткоин работают по одному и тому же алгоритму. Если необходимо изменить
                    алгоритм (правила), то это нужно сделать большинству участников. Нет руководителя, который
                    может приказать изменить систему.</Text>
                <Header>4. Прозрачность</Header>
                <Text style={{marginTop: "20px", marginBottom: "10px"}}>В открытых блокчейнах все данные могут быть
                    просмотрены любым другим участником. Например, если кто-то знает ваш адрес в сети Биткоин, то
                    он сможет увидеть ваши транзакции: откуда, когда, куда и сколько вы отправляли. Благодаря
                    этому отправленные деньги не пропадут по дороге и не придется звонить в поддержку и выяснять,
                    куда делся перевод.</Text>
                <Text style={{marginTop: "20px", marginBottom: "10px"}}>Если же хочется сохранить полную анонимность,
                    то стоит воспользоваться специальными сервисами — миксерами (переводы смешиваются в общем котле
                    и уже потом отправляются получателю).</Text>
                <Header>В чем трудности</Header>
                <Text style={{marginTop: "20px", marginBottom: "10px"}}>Все блокчейн-сети разные, но есть трудности,
                    с которыми сталкивается любая из них. Эти трудности как раз и связаны с уникальными свойствами
                    технологии. Есть три главные задачи для развития блокчейн-сети — так называемая трилемма
                    масштабируемости. Впервые подробно об этом написал Виталик Бутерин — создатель
                    блокчейна Эфириум.</Text>
            </Div>
        </Panel>
    );
};

export default Page2;
