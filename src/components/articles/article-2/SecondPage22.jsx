import { Panel, PanelHeader, Div, Text, Header} from '@vkontakte/vkui';
const SecondPage21 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Header>39-42</Header>
            <Div>
                <Header mode="secondary">39. Червяк</Header>
                <Text>Реплицирует себя и распространяется на другие компьютеры, но, в отличие от вирусов,
                    черви не требуют взаимодействия с человеком.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">40. Backdoors</Header>
                <Text>Данная уязвимость позволяет злоумышленникам обойти стандартные процедуры аутентификации
                    и получить несанкционированный доступ к системе или сети.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">41. Боты</Header>
                <Text>Эти программы автоматизируют выполнение сетевых или интернет-задач. Они могут использоваться в
                    злонамеренных целях, например, для проведения распределенных атак типа «отказ в
                    обслуживании» (DDoS).</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">42. BEC</Header>
                <Text>Для атак на предприятия и организации используется электронная почта. Злоумышленники выдают
                    себя за доверенный источник, чтобы обманом заставить жертву перевести злоумышленнику
                    деньги или конфиденциальную информацию.</Text><br/>
            </Div>

        </Panel>
    );
};

export default SecondPage21;
