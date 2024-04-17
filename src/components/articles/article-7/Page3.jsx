import {Panel, Div, Text, Header, Title} from '@vkontakte/vkui';
const Page3 = ({ onNextPage }) => {
    return (
        <Panel id="cyber-security-article-part7">
            <Header>Продолжение</Header>
            <Div>
                <Title>Схематичное изображение трилеммы масштабируемости</Title>
                <div style={{ overflow: 'hidden', borderRadius: '10px', marginTop: "10px"}}>
                    <img src="/images/articles/article-7/article-7-1.png" alt="article-7-1" style={{ width: '100%', height: '100%' }} />
                </div>
                <Text style={{marginTop: "10px", marginBottom: "10px"}}>Три главные составляющие:</Text>
                <li>1. Безопасность.</li>
                <li>2. Масштабируемость.</li>
                <li>3. Децентрализация.</li>


                <Text style={{marginTop: "10px"}}>Нельзя достичь всего сразу, можно выбрать только два компонента.
                    Масштабируемость — это важный компонент, определяющий пропускную способность, то есть сколько
                    транзакций может обслужить сеть в единицу времени. Чтобы обеспечить высокую масштабируемость,
                    приходится чем-то жертвовать.</Text>
                <Text style={{marginTop: "10px"}}>Соответственно, в зависимости от выбранных характеристик у
                    каждой криптовалюты может быть свое применение.</Text>
            </Div>
        </Panel>
    );
};

export default Page3;
