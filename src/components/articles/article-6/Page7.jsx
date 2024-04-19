import {Panel, Div, Text, Header, Title} from '@vkontakte/vkui';
const Page7 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Div>
                <Header mode="secondary">Кто отвечает за безопасность</Header>
                <Text style={{marginTop: "20px"}}>Помимо майнеров, в блокчейн-сети также существуют ноды (узлы) —
                    это компьютеры, которые содержат всю историю блокчейна, то есть хранят у себя полную копию всех
                    операций. Ноды необязательно являются майнинговыми устройствами. И наоборот, не все майнинговые
                    устройства обязательно держат у себя полную историю блокчейна.</Text>
                <Text style={{marginTop: "20px"}}>Конкретный принцип работы зависит от алгоритма консенсуса
                    блокчейна. Есть два основных.</Text>

            </Div>
        </Panel>
    );
};

export default Page7;
