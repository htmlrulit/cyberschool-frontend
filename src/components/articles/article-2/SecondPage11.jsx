import { Panel, PanelHeader, Div, Text, Header} from '@vkontakte/vkui';
const SecondPage11 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Header>10. Нападение на водопой</Header>
            <Div>
                <Header mode="secondary">10. Нападение на водопой</Header>
                <Text>В данном случае жертвой является определенная группа людей в организации, регионе и т.д.
                    В ходе такой атаки злоумышленник выбирает сайты, которые часто используются целевой группой.
                    Сайты определяются либо путем тщательного наблюдения за группой, либо путем угадывания.</Text><br/>
                <Text>После этого злоумышленники заражают эти сайты вредоносным ПО, которое инфицирует системы жертв.
                    Вредоносная программа при такой атаке нацелена на личную информацию пользователя.
                    Кроме того, хакер может получить удаленный доступ к зараженному компьютеру.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">предотвратить атаку «водяной ямы»</Header>
                <Text>Теперь посмотрим, как можно предотвратить атаку «водяной ямы»:</Text>
                <ul>
                    <li>Обновляйте свое программное обеспечение и снижайте риск использования уязвимостей
                        злоумышленниками. Регулярно проверяйте наличие патчей безопасности.</li>
                    <li>Используйте средства сетевой безопасности для обнаружения атак типа «водяная дыра».
                        Системы предотвращения вторжений (IPS) хорошо справляются с обнаружением таких
                        подозрительных действий.</li>
                    <li>Для предотвращения атаки «водяной дыры» рекомендуется скрывать свои действия в Интернете.
                        Для этого следует использовать VPN, а также воспользоваться функцией приватного просмотра в
                        браузере. VPN обеспечивает безопасное соединение с другой сетью через Интернет.
                        Она служит защитой для просмотра веб-страниц.</li><br/>
                </ul>


            </Div>
        </Panel>
    );
};

export default SecondPage11;
