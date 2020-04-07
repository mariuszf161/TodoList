import React, { FC } from 'react';
import {ScrollView, Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';


const FirstImage = styled.Image`
    border-radius: 25px;
    width: 150px;
    height: 150px;
    margin-top: 60px;
    margin-left: 20px;
`;
const SecondImage = styled.Image`
    border-radius: 25px;
    width: 150px;
    height: 150px;
    margin-top: 10px;
    margin-left: 20px;
    flex: 1;
`;

const OneText = styled.Text`
    margin-left: 20px;
    margin-top: 20px;
    font-size: 17px;
    color: ${Colors.black};
 
`;
interface IWelcomeProps {
    myProps: string;
}

const About: FC<IWelcomeProps> = props => {
    return (
        <ScrollView>
            <FirstImage source={require('../../assets/logo.png')} />
            <OneText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt nam, rerum voluptatem facilis enim provident, sit at omnis mollitia unde necessitatibus ut, optio explicabo libero repellat adipisci obcaecati veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.</OneText>
            <SecondImage source={require('../../assets/logo.png')} />
            <OneText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt nam, rerum voluptatem facilis enim provident, sit at omnis mollitia unde necessitatibus ut, optio explicabo libero repellat adipisci obcaecati veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.</OneText>
            <FirstImage source={require('../../assets/logo.png')} />
            <OneText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt nam, rerum voluptatem facilis enim provident, sit at omnis mollitia unde necessitatibus ut, optio explicabo libero repellat adipisci obcaecati veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.</OneText>
            <Image source={require('../../assets/logo.png')} />
            <OneText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt nam, rerum voluptatem facilis enim provident, sit at omnis mollitia unde necessitatibus ut, optio explicabo libero repellat adipisci obcaecati veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.</OneText>
        </ScrollView>
    );
};
export default About;