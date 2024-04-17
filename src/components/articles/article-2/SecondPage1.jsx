import {Panel, PanelHeader, Div, Text, Header, Card} from '@vkontakte/vkui';
const SecondPage1 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article">
            <PanelHeader>Виды кибер-атак</PanelHeader>
                <Header mode="secondary">Основные опасности интернета</Header>
                <Card size="l" mode="shadow">
                    <Div>
                        <Text weight="regular">
                            В современном мире существует множество разновидностей кибератак. Если мы знаем о различных типах кибератак,
                            нам будет проще защитить от них наши сети и системы. Здесь мы подробно рассмотрим десять основных видов
                            кибератак и еще +44, которые могут поразить как отдельного человека, так и крупный бизнес, в зависимости от масштаба.
                        </Text>
                    </Div>
                </Card>
                <br/>
                <Card size="l" mode="shadow">
                    <Div>
                        <Text weight="regular">
                            В этой короткой статье мы расскажем о всех 54 видах кибер-атаках простым языком
                        </Text>
                    </Div>
                </Card>
            <br/>
        </Panel>
    );
};

export default SecondPage1;
