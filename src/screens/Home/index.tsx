import React, { FC } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';
import Layout from '../../constans/Layout'


const HomeView = styled.View`
    wmin-height: 100%;
    background: ${Colors.lightBlue};
    padding-top: ${Layout.statusBar + 10}px;
`;

const TitleText = styled.Text`
    font-size: 30px;
    color: ${Colors.black};
    text-align: center;
`;

const HomeImage = styled.Image`
    width: 150px;
    height: 150px;
    margin: 50px auto 20px auto; 
`;
const DescText = styled.Text`
    font-size: 20px;
    margin: auto 20px;
    margin-bottom: 50px;
`;
 interface IHomeProps {
     myProps: string;
 }
 
 const Home: FC<IHomeProps> = props => {
     return (
         <HomeView>
            <HomeImage source={require('../../assets/logo1.png')} />
            <TitleText>Todo List application</TitleText>
            <DescText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dicta, vitae fugiat laborum quod reprehenderit doloribus hic eligendi error recusandae, nihil eveniet. Debitis corporis laborum vitae repudiandae doloremque quis. Necessitatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet perferendis earum, exercitationem eius cupiditate mollitia, aspernatur iste necessitatibus pariatur dolorum, eos consequatur maxime officia magni numquam voluptatum libero nisi natus?</DescText>
         </HomeView>
     );
 };

 export default Home;