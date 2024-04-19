import React, { useState } from 'react';
import { Panel, Header, Card, Div, Text, Input, Button, Separator } from '@vkontakte/vkui';

const Page4 = ({ onNextPage }) => {
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [errors, setErrors] = useState([]);

    const calculatePasswordStrength = (password) => {
        const length = password.length;
        let strength = length * 5;
        if (/[A-ZА-Я]/.test(password)) strength += 20; // Добавляем проверку на заглавные буквы русского алфавита
        if (/[a-zа-я]/.test(password)) strength += 20; // Добавляем проверку на строчные буквы русского алфавита
        if (/\d/.test(password)) strength += 20;
        if (/[^A-Za-z0-9А-Яа-я]/.test(password)) strength += 20; // Добавляем проверку на специальные символы русского алфавита
        return strength;
    };

    const handleCheckPassword = () => {
        const errors = [];
        if (password.length < 8) {
            errors.push("Пароль должен быть не менее 8 символов.");
        }
        if (!/[A-Z]/.test(password)) {
            errors.push("Пароль должен содержать как минимум одну заглавную английскую букву.");
        }
        if (!/\d/.test(password)) {
            errors.push("Пароль должен содержать как минимум одну цифру.");
        }
        if (!/[^A-Za-z0-9]/.test(password)) {
            errors.push("Пароль должен содержать как минимум один специальный символ.");
        }

        const strength = calculatePasswordStrength(password);
        setErrors(errors);
        setPasswordStrength(strength);

        if (errors.length === 0 && strength >= 60) {
            onNextPage();
        }
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
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
            <Separator />
            <Header mode="secondary">Советы по созданию</Header>
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
            <Separator /><br />
            <Card size="l" mode="shadow">
                <Div>
                    <Header mode="secondary">Задание</Header>
                    <Text>Создайте пароль, который удовлетворяет следующим критериям:</Text>
                    <ul>
                        <li>Длина пароля должна быть не менее 8 символов.</li>
                        <li>Пароль должен содержать как минимум одну заглавную английскую букву.</li>
                        <li>Пароль должен содержать как минимум одну цифру.</li>
                        <li>Пароль должен содержать как минимум один специальный символ.</li>
                    </ul>
                    <Input type="password" maxLength="32" placeholder="Введите пароль" value={password} onChange={handleChangePassword} />
                    <br />
                    <Button size="l" onClick={handleCheckPassword}>Проверить пароль</Button>
                    {errors.length > 0 && errors.map((error, index) => (
                        <Text key={index} style={{ color: 'red' }}>{error}</Text>
                    ))}
                    {errors.length === 0 && passwordStrength >= 60 && (
                        <Text style={{ color: 'green' }}>Пароль сложный и надежный!</Text>
                    )}
                </Div>
            </Card>
        </Panel>
    );
};

export default Page4;
