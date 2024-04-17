import {Panel, Div, Text, Header} from '@vkontakte/vkui';
const Page4 = ({ onNextPage }) => {
    return (
        <Panel id="cyber-security-article-part7">
            <Header>Как экономят IP-адреса</Header>
            <Div>
                <Text style={{marginTop: "10px", marginBottom: "10px"}}>Провайдеры используют два способа экономии
                    IP-адресов стандарта IPv4:</Text>
                <li>Динамические адреса</li>
                <li>Серые IP</li>

                <Text style={{marginTop: "20px"}}>Динамические адреса можно переиспользовать. Например, когда
                    устройство выходит из сети, то его адрес освобождается и передается другому пользователю.</Text>
                <Text style={{marginTop: "20px", marginBottom: "20px"}}>При серых IP создается большая локальная сеть,
                    например, для жилого дома. К глобальной сети подключается только один главный роутер,
                    а к нему подключают сотни пользователей. В такой схеме внешний IP называется белый IP.</Text>
                <div style={{ overflow: 'hidden', borderRadius: '10px' }}>
                    <img src="/images/articles/article-4/article-4-2.jpg" alt="article-4-2" style={{ width: '100%', height: '100%' }} />
                </div>

                <Text style={{marginTop: "20px"}}>На схеме серые IP-адреса взяты из диапазона частных адресов
                    <code> 172.16.0.0 — 172.31.255.255</code>. Частные и серые IP — это одно и то же.
                    По такому способу можно подключить миллион квартир к одному белому IP-адресу.</Text>
                <Text style={{marginTop: "20px"}}>Чтобы использовать способы динамических и серых IP, нужны затраты
                    на оборудование. При этом адреса все равно могут закончиться. Чтобы решить эту проблему,
                    придумали стандарт IPv6. Он ввел новый способ записи адресов для компьютеров в сети.</Text>
            </Div>
        </Panel>
    );
};

export default Page4;
