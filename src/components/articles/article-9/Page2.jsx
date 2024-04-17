import {Panel, Div, Text, Header, Title} from '@vkontakte/vkui';
const Page2 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Div>
                <Header>Значимые криптовалюты</Header>
                <Text style={{marginTop: "20px"}}>После роста популярности и цены биткоина появились желающие
                    повторить этот успех. Код протокола является открытым, поэтому копирование технологии не
                    составляло большого труда. Вероятно, привлекательность заключалась в возможности создать
                    новый блокчейн, начать майнинг раньше других и завладеть значительным объемом монет
                    до роста популярности и цены.</Text>
                <Text style={{marginTop: "20px"}}>Появились первые альтернативные блокчейны, например Litecoin.
                    Создатели Litecoin заявляли, что транзакции будут проводиться быстрее и дешевле (в общем-то,
                    так и было), однако принципиальных технических инноваций новые блокчейны не предлагали. Основным
                    способом применения технологии блокчейна являлись простые платежи — переводы криптовалюты от
                    пользователя к пользователю.</Text>
                <Text style={{marginTop: "20px"}}>В 2012 году был запущен блокчейн Ripple, развиваемый по сей день
                    одноименной компанией. Внутренней криптовалютой блокчейна является XRP. Компания Ripple одной
                    из первых предложила использовать блокчейн для более сложных финансовых операций — межбанковских
                    переводов и обмена валют и других ценностей, которые могут быть представлены в виде
                    токенов на блокчейне.</Text>
                <Text style={{marginTop: "20px", marginBottom: "10px"}}>Первым банком, использовавшим Ripple, стал
                    Fidor Bank, который объявил о партнерстве в 2014 году. С тех пор количество компаний, использующих
                    Ripple продолжает расти. Однако с 2020 года американский регулятор SEC (Комиссия по ценным бумагам
                    и биржам США) ведет расследование в отношении Ripple. Монеты XRP не зарегистрированы в качестве
                    ценных бумаг, а SEC считает их таковыми.</Text>
                <Title level="2">Динамика курса Ripple. В отличие от многих других криптовалют во время
                    последнего ралли на крипторынке XRP не смог обновить исторические максимумы из-за
                    давления американского регулятора</Title>
                <div style={{ overflow: 'hidden', borderRadius: '10px', marginTop: "10px"}}>
                    <img src="/images/articles/article-9/article-9-1.png" alt="article-9-1" style={{ width: '100%', height: '100%' }} />
                </div>
            </Div>
        </Panel>
    );
};

export default Page2;