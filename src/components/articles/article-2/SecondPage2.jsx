import {Panel, PanelHeader, Div, Text, Header, Card, Title, Separator, Link} from '@vkontakte/vkui';


const SecondPage2 = ({ onNextPage }) => {


    return (
        <Panel id="malware-article">
            <Header>Вредоносное ПО</Header>
            <Div>
                <Header mode="secondary">1. Вредоносное ПО</Header>
                <Text>Это один из наиболее распространенных видов кибератак.</Text>
                <br/>
                <Text weight="regular">
                    Под «вредоносным ПО» понимаются вредоносные программы-вирусы, включая черви, шпионские программы, программы-вымогатели, рекламное ПО и трояны.
                </Text><br/>
                <Card size="l" mode="shadow">
                    <Div>
                        <Title level="1" weight="medium">Троянский вирус</Title><br/>
                        <Text weight="regular">
                            Троянский вирус маскируется под легитимное программное обеспечение. Ransomware блокирует доступ к ключевым компонентам сети, а Spyware — это программное обеспечение, которое без вашего ведома похищает все ваши конфиденциальные данные. Adware — это программное обеспечение, отображающее на экране пользователя рекламный контент, например баннеры.
                        </Text>
                    </Div>
                </Card>
                <br/>
                <Text weight="regular">
                    Вредоносное ПО проникает в сеть через уязвимость. Когда пользователь переходит по <Link href="https://vk.com" target="_blank">опасной ссылке</Link>, загружает вложение в электронное письмо или когда используется зараженный накопитель.
                </Text>
                <br/>
                <div style={{ overflow: 'hidden', borderRadius: '10px' }}>
                    <img src="/images/articles/article-2/image_1.jpg" alt="Rounded" style={{ width: '100%', height: 'auto' }} />
                </div>
                <br/>
                <Separator wide />
                <br/>
                <Header mode="secondary">Предотвращение атаки вредоносного ПО</Header>
                <br/>
                <Card size="l" mode="shadow">
                    <Div>
                        <Title level="2" weight="medium">Используйте антивирусное программное обеспечение</Title>
                        <br/>
                        <Text weight="regular">
                            Оно позволяет защитить компьютер от вредоносных программ. Avast Antivirus, Norton Antivirus и McAfee Antivirus — вот несколько популярных антивирусных программ.
                        </Text>
                    </Div>
                </Card>
                <br/>
                <Card size="l" mode="shadow">
                    <Div>
                        <Title level="2" weight="medium">Используйте межсетевые экраны</Title>
                        <br/>
                        <Text weight="regular">
                            Брандмауэры фильтруют трафик, который может попасть на устройство. В операционных системах Windows и Mac OS X по умолчанию имеются встроенные брандмауэры, которые называются Windows Firewall и Mac Firewall.
                        </Text>
                    </Div>
                </Card>
                <br/>
                <Text weight="regular">
                    Будьте бдительны и не переходите по подозрительным ссылкам.
                </Text>
                <br/>


            </Div>
        </Panel>
    );
};


export default SecondPage2;
