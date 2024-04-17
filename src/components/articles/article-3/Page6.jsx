import { Panel, Div, Text, Header} from '@vkontakte/vkui';
const Page6 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Div>
                <Header mode="secondary">Man-in-the-Middle</Header>
                <Text>Пока данные переходят от клиента на сервер их возможно перехватить и прочитать. Из-за того,
                    что данные только читаются, то ни сервер, ни клиент не заметят этого, значит,
                    ничего странного для двух сторон не произойдет.</Text>

                <Text style={{marginTop: "20px", marginBottom: "10px"}}>Название Man-in-the-Middle или «Человек посередине» атака получила
                    из-за того, что злоумышленник встраивается в процесс передачи информации. Вначале вся
                    информация проходит через него, а уже потом уходит дальше:</Text>
                <div style={{ overflow: 'hidden', borderRadius: '10px' }}>
                    <img src="/images/articles/article-3/article-3-4.jpg" alt="article-3-4" style={{ width: '100%', height: '100%' }} />
                </div>
                <Text style={{marginTop: "20px"}}>Один из самых простых способов осуществить такую атаку — создать
                    свою публичную Wi-Fi сеть, например, в кафе. В итоге пользователь подключается к ней, и теперь
                    злоумышленник может видеть все пакеты, которые пересылаются по этой сети.</Text>
                <Text style={{marginTop: "20px", marginBottom: "10px"}}>Если используется протокол HTTPS, то между
                    клиентом и сервером
                    устанавливается защищенное соединение. Все данные в нем шифруются, а расшифровать их можно
                    только на одной из сторон, но не во время передачи. Даже если злоумышленник сможет перехватить
                    пакеты, то вместо данных он получит бессмысленную информацию:</Text>
                <div style={{ overflow: 'hidden', borderRadius: '10px' }}>
                    <img src="/images/articles/article-3/article-3-5.jpg" alt="article-3-5" style={{ width: '100%', height: '100%' }} />
                </div>
            </Div>
            <Div>
                <Text style={{marginTop: "20px"}}>Внимательно следите за протоколом при передаче:
                    <li>Логина и пароля</li>
                    <li>Банковских данных</li>
                    <li>Сообщений своим друзьям и близким</li>
                    <li>Персональных данных</li>
                </Text>
                <Text style={{marginTop: "20px"}}>Если вы не доверяете сайту, который запрашивает какие-то данные,
                    то лучше уйдите с него.</Text>
            </Div>
        </Panel>
    );
};

export default Page6;
