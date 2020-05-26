import React, { FC, useState } from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import { IState } from '../reducers';
import { ITodoListReducer } from '../reducers/todoListReducer';

import { ISingleElementList } from '../enitities/todoSingleEL';

const Wrapper = styled.View`
    margin: 80px 20px 0px 20px;
`;

const SingleElementList = styled.View`
    border-radius: 15px;
    background: #CDD5FF;
    margin: 0 0 20px 0;
    padding: 5px 10px;
`;
const NameText = styled.Text`
    font-size: 20px;
    text-align: center;
    align-items: center;
`;
const DescText = styled.Text`
    font-size: 15px;
`;
const ButtonContainer = styled.TouchableHighlight`
    margin: 7px auto 20px auto;
`


const TodoList: FC<{switchView(formView: boolean)}> = props => {
    const todoListState = useSelector<IState, ITodoListReducer>(state => state.todoList)
    const goToForm = () => {
        props.switchView(true)
    }
    return (
        <Wrapper>
            {todoListState.todoList.map((elem: ISingleElementList, index: number) =>
                <SingleElementList key={index}>
                    <NameText>{elem.name}</NameText>
                    <DescText>{elem.description}</DescText>
                </SingleElementList>
            )}
            <ButtonContainer onPress={goToForm} activeOpacity={1} underlayColor={'transparent'}>
            <MaterialCommunityIcons
                name='plus-circle'
                color='#0066FF'
                size={50} />
        </ButtonContainer>
        </Wrapper>
    )
};

export default TodoList;