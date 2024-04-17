import React, { useState } from 'react';
import {Panel, PanelHeader, Button, Div, Text, Header, Input, Card, Separator} from '@vkontakte/vkui';

const Page4 = ({ onNextPage }) => {
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [errors, setErrors] = useState([]);

    const checkPasswordStrength = () => {
        const strength = calculatePasswordStrength(password);
        setPasswordStrength(strength);
        setErrors([]);
    };

    const calculatePasswordStrength = (password) => {
        const length = password.length;
        let strength = length * 5;
        if (/[A-Z]/.test(password)) strength += 20;
        if (/[a-z]/.test(password)) strength += 20;
        if (/\d/.test(password)) strength += 20;
        if (/[^A-Za-z0-9]/.test(password)) strength += 20;
        return strength;
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleCheckPassword = () => {
        checkPasswordStrength();
        if (passwordStrength < 60) {
            setErrors(["Пароль слишком слабый. Попробуйте еще раз."]);
        } else {
            onNextPage();
        }
    };

    return (
        <Panel id="cyber-security-article-part4">
            <Header mode="secondary">Значение безопасных паролей</Header>
            <Card size="l" mode="shadow">
                <Div>

                <Text>Создание и использование безопасных паролей является важным аспектом кибербезопасности.
                    Сильные пароли помогают защитить вашу личную информацию и учетные данные от
                    несанкционированного доступа.</Text>


            </Div>
                </Card>
            <br/>
            <Separator></Separator>
                <Header mode="secondary">Советы по созданию надежных паролей</Header>
                <Card size="l" mode="shadow">
                    <Div>

                    <Text>Ниже приведены некоторые советы по созданию надежных паролей:</Text>
                <ul>
                    <li>Используйте комбинацию заглавных и строчных букв, цифр и специальных символов.</li>
                    <li>Избегайте использования личной информации, такой как даты рождения или имена.</li>
                    <li>Создавайте уникальные пароли для каждого аккаунта.</li>
                    <li>Регулярно изменяйте пароли и не используйте один пароль для всех аккаунтов.</li>
                </ul>
                        </Div>
                    </Card>
            <br/>
            <Separator></Separator><br/>
            <Card size="l" mode="shadow">
                <Div>

                <Header mode="secondary">Задание</Header>
                <Text>Создайте пароль, который удовлетворяет следующим критериям:</Text>
                <ul>
                    <li>Длина пароля должна быть не менее 8 символов.</li>
                    <li>Пароль должен содержать как минимум одну заглавную букву.</li>
                    <li>Пароль должен содержать как минимум одну цифру.</li>
                    <li>Пароль должен содержать как минимум один специальный символ.</li>
                </ul>
                <Input type="password" placeholder="Введите пароль" value={password} onChange={handleChangePassword} />
                    <br/>
                <Button size="l" onClick={handleCheckPassword}>Проверить пароль</Button>
                {errors.length > 0 && (
                    <Div>
                        {errors.map((error, index) => (
                            <Text key={index} style={{ color: 'red' }}>{error}</Text>
                        ))}
                    </Div>
                )}
                {passwordStrength >= 60 && (
                    <Div>
                        <Text style={{ color: 'green' }}>Пароль сложный и надежный!</Text>
                    </Div>
                )}
                </Div>
            </Card>

        </Panel>
    );
};

export default Page4;
