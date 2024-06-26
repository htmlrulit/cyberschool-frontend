import { Panel, Div, Text, Header} from '@vkontakte/vkui';
const Page7 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Div>
                <Header mode="secondary">Коротко о главном</Header>
                <li>Блокчейн позволяет создать финансовую единицу, которая не будет зависима от центра принятия
                    решений. Это позволяет держателям криптовалют обходить надзор государственных регуляторов.</li>
                <li>Масштабируемость, безопасность и децентрализация — три столпа любого блокчейна. Пока не
                    существует криптовалюты, которая была бы идеальна по всем трем параметрам.</li>
                <li>Смарт-контракты позволяют создать программу, которая будет исполняться за счет
                    мощностей блокчейна.</li>
            </Div>
        </Panel>
    );
};

export default Page7;
