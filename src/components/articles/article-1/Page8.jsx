import {Panel, PanelHeader, Div, Text, Card, Header} from '@vkontakte/vkui';
import React from "react";
const Page3 = ({ onNextPage }) => {
    const handleNextPage = () => {
        onNextPage();
    };

    return (
        <Panel id="cyber-security-article-conclusion">
            <Card size="l" mode="shadow">
                <Div>
                    <Div>
                        <Header mode="secondary">Советы по обновлению программного обеспечения</Header>
                        <ul>Кибербезопасность играет ключевую роль в нашей цифровой жизни.
                                Осознание потенциальных угроз и принятие мер по защите в интернете
                                помогут вам и вашей семье оставаться безопасными в онлайн-мире. Следуйте
                                советам по обеспечению кибербезопасности, чтобы защитить себя от
                                различных киберугроз и сохранить свои личные данные в безопасности.
                        </ul>
                    </Div>
                </Div>
            </Card>

            <Div>
                <Text></Text>
            </Div>
        </Panel>
    );
};

export default Page3;
