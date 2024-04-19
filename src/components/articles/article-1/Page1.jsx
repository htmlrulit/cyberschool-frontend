import React, {useState} from 'react';
import {Panel, PanelHeader, Div, Text, Header, Separator, Card, RichCell, Avatar,
    Progress, FormItem, Input} from '@vkontakte/vkui';
import {Icon16CheckCircle, Icon20RefreshOutline} from "@vkontakte/icons";

const Page1 = ({ onNextPage }) => {

    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);

    const generatePassword = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$';
        const passwordLength = Math.floor(Math.random() * 7) + 6;
        let generatedPassword = '';
        for (let i = 0; i < passwordLength; i++) {
            generatedPassword += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        setPassword(generatedPassword);
        calculatePasswordStrength(generatedPassword);
    };

    const calculatePasswordStrength = (password) => {
        let strength = 0;
        const length = password.length;
        strength += length * 4;
        const numCount = (password.match(/\d/g) || []).length;
        strength += numCount * 4;
        const uppercaseCount = (password.match(/[A-Z]/g) || []).length;
        if (uppercaseCount > 0) {
            strength += (length - uppercaseCount) * 2;
        }
        const lowercaseCount = (password.match(/[a-z]/g) || []).length;
        if (lowercaseCount > 0) {
            strength += (length - lowercaseCount) * 2;
        }
        const specialCount = length - numCount - uppercaseCount - lowercaseCount;
        strength += specialCount * 6;
        if (numCount > 0 && uppercaseCount > 0 && lowercaseCount > 0 && specialCount > 0) {
            strength += 10;
        }

        setPasswordStrength(Math.min(100, strength));
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        calculatePasswordStrength(newPassword);
    };



    return (
        <Panel id="cyber-security-article">

                <Header mode="secondary">Основные опасности интернета</Header>
                <RichCell
                    disabled
                    multiline
                    before={<Avatar size={48} src="images/articles/article-1/phising.png" mode="image" />}
                    text="Фишинг - одна из самых распространенных атак, целью которой является получение
                    конфиденциальной информации, такой как пароли и данные банковских карт."
                    after={<Icon16CheckCircle />}
                />
                <RichCell
                    disabled
                    multiline
                    before={<Avatar size={48} src="images/articles/article-1/carder.png" mode="image" />}
                    text="Мошенничество - злоумышленники могут представляться вашими друзьями или знакомыми,
                    чтобы выманивать деньги или конфиденциальные данные."
                    after={<Icon16CheckCircle />}
                />
                <RichCell
                    disabled
                    multiline
                    before={<Avatar size={48} src="images/articles/article-1/virus.png" mode="image" />}
                    text="Вредоносные программы - вирусы, трояны и другие вредоносные программы могут
                    навредить вашему устройству и украсть ваши данные."
                    after={<Icon16CheckCircle />}
                />

            <Separator />
            <Div>
                <Header mode="secondary">Как защитить себя в интернете</Header>
                <Card size="l" mode="shadow">
                    <Div>
                        <Text weight="regular">Для обеспечения безопасности в интернете необходимо использовать
                            надежные пароли, не отвечать на подозрительные сообщения и быть осторожными
                            при скачивании файлов.</Text>
                    </Div>


                </Card>
                <br/><br/>
                <Card size="l" mode="shadow">
                    <Div>
                        <Header mode="secondary">Генератор сложных паролей</Header>
                        <Div style={{ display: 'flex', alignItems: 'center' }}>
                            <Input
                                type="text"
                                placeholder="Введите пароль"
                                value={password}
                                onChange={handlePasswordChange}
                            />
                            <Icon20RefreshOutline onClick={generatePassword}/>
                        </Div>
                        <FormItem id="progresslabelPositive" top={`Сложность пароля ${passwordStrength}%`}>
                            <Progress
                                value={passwordStrength}
                                appearance={passwordStrength > 80 ? "positive" : passwordStrength < 50 ? "negative" : undefined}
                            />
                        </FormItem>
                    </Div>
                </Card>
            </Div>
        </Panel>
    );
};

export default Page1;
