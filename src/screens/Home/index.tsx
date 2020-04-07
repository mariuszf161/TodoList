import React, { FC } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

const HomeView = styled.View`
    width: 100%;
    height: 100%;
`;

const WelcomeText = styled.Text`
    margin: 40px auto 0px auto; 
    font-size: 20px;
    text-align: center;
    color: ${Colors.black};
    width: 300px;
    height: 100px;
`;

const HomeImage = styled.Image`
    border-radius: 50px;
    width: 100px;
    height: 100px;
    margin: 40px auto 0px auto; 
`;
 interface IWelcomeProps {
     myProps: string;
 }
 
 const Home: FC<IWelcomeProps> = props => {
     return (
         <HomeView>
             <HomeImage source={require('../../assets/icon1.png')} />
             <WelcomeText>This is Home page</WelcomeText>
         </HomeView>
     );
 };

 export default Home;