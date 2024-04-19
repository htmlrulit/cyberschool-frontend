import { Panel, PanelHeader, Div, Text, Header} from '@vkontakte/vkui';
const SecondPage26 = ({ onNextPage }) => {

    return (
        <Panel id="cyber-security-article-part7">
            <Header>Предотвращение атак</Header>
            <Div>
                <Header mode="secondary">Как предотвратить кибератаки?</Header>
                <Text>Хотя мы рассмотрели несколько способов предотвращения различных типов кибератак, давайте подведем
                    итоги и рассмотрим несколько личных советов, которые можно взять на вооружение,
                    чтобы избежать кибератак в целом.</Text><br/>
            </Div>
            <Div>
                <Header mode="secondary">Как предотвратить кибератаки?</Header>
                <ul>
                    <li>Регулярно меняйте пароли и используйте сложные буквенно-цифровые пароли, которые трудно
                        взломать. Воздержитесь от использования слишком сложных паролей, которые можно забыть.
                        Не используйте один и тот же пароль дважды.</li>
                    <li>Регулярно обновляйте операционную систему и приложения. Это основной метод предотвращения
                        любой кибернетической атаки. Это позволит устранить уязвимости, которыми обычно
                        пользуются хакеры. Используйте надежные и легитимные программы антивирусной защиты.</li>
                    <li>Использование межсетевого экрана и других средств сетевой безопасности, таких как системы
                        предотвращения вторжений, контроля доступа, защиты приложений и т.д.</li>
                    <li>Не открывайте письма от неизвестных отправителей. Проверяйте полученные письма на наличие
                        лазеек и существенных ошибок.</li>
                    <li>Воспользуйтесь VPN. При этом обеспечивается шифрование трафика между
                        VPN-сервером и вашим устройством.</li>
                    <li>Регулярно создавайте резервные копии данных. По мнению многих специалистов по безопасности,
                        идеальным вариантом является наличие трех копий данных на двух разных типах носителей и
                        еще одной копии в удаленном месте (облачном хранилище). Таким образом, даже в случае кибератаки
                        можно стереть данные из системы и восстановить их с помощью недавно созданной
                        резервной копии.</li>
                    <li>Сотрудники должны быть осведомлены о принципах кибербезопасности.
                        Они должны знать о различных типах кибератак и способах борьбы с ними.</li>
                    <li>Используйте двухфакторную или многофакторную аутентификацию. Двухфакторная аутентификация
                        требует от пользователей предоставления двух различных факторов аутентификации для
                        одтверждения своей подлинности. Когда от пользователя требуется более двух дополнительных
                        способов аутентификации, помимо имени пользователя и пароля, мы называем это многофакторной
                        аутентификацией. Это очень важный шаг для обеспечения безопасности учетной записи.</li>
                    <li>Защитите свои сети Wi-Fi и не пользуйтесь публичным Wi-Fi без использования VPN.</li>
                    <li>Защитите свой мобильный телефон, поскольку он также является целью кибератак.
                        Устанавливайте приложения только из легитимных и надежных источников,
                        следите за обновлениями своего устройства.</li>

                    <br/>
                </ul>
                <div style={{ overflow: 'hidden', borderRadius: '10px' }}>
                    <img src="/images/articles/article-2/image_10.jpg" alt="Rounded" style={{ width: '100%', height: 'auto' }} />
                </div>

            </Div>
        </Panel>
    );
};

export default SecondPage26;
