import {Panel, Div, Text} from '@vkontakte/vkui';
const Page3 = ({ onNextPage }) => {
    return (
        <Panel id="cyber-security-article-part7">
            <Div>
                <Text style={{marginTop: "10px", marginBottom: "10px"}}>Внешний IP-адрес можно узнать на
                    сервисе <a href="https://2ip.ru" target="_blank">2IP</a>.
                    Если в квартире несколько устройств, то
                    попробуйте посмотреть IP-адрес на каждом из них — он будет одинаковым.</Text>

                <div style={{ overflow: 'hidden', borderRadius: '10px' }}>
                    <img src="/images/articles/article-4/article-4-1.jpg" alt="article-4-1" style={{ width: '100%', height: '100%' }} />
                </div>

                <Text style={{marginTop: "20px"}}>Информация приходит на внешний адрес роутера,
                    который перенаправит ее на нужный частный адрес вашего устройства.</Text>
                <Text style={{marginTop: "20px", marginBottom: "10px"}}>Если от общего количества адресов отнять
                    частные, то получится, что внешних IP-адресов <b>4 272 881 664</b>. Это небольшая цифра,
                    и количество устройств в сети увеличивается, поэтому провайдерам приходится
                    экономить IP-адреса.</Text>
            </Div>
        </Panel>
    );
};

export default Page3;
