import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { TextInput, Button } from 'react-native';
import Layout from '../constans/Layout';

import { useDispatch } from 'react-redux';

import { setNewElemTodoList } from '../actions/todoListActions'
import { ISingleElementList } from '../enitities/todoSingleEL';


const Wrapper = styled.View`
    margin: 0px 20px 0px 20px;
    padding-top: ${Layout.statusBar + 10}px;
    
    
`;
const CustomTextInput = styled.TextInput`
    border-radius: 15px;
    margin: 10px auto;
    padding: 10px;
    color: black;
    width: 100%;
    border: 2px solid #0066FF;
    background: white;
    
`;
const ButtonContainer = styled.TouchableHighlight`
    margin: 0 auto;
    padding: 0;
    background: #3f77d1;
    width: 100px;
    height: 35px;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`
const ButtonContent = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin: 0;
    padding: 0;
    color: white;
    margin-top: -2px;
`

type SetNewElemTodoList = ReturnType<typeof setNewElemTodoList>

const Form: FC<{switchView(formView: boolean)}> = props => {
    const dispatch = useDispatch();

    const [nameInput, setNameInput] = useState<string>('');
    const [descInput, setDescInput] = useState<string>('');

    const nameValueChange = (txt) => {
        setNameInput(txt.nativeEvent.text)
    }
    const descriptionValueChange = (txt) => {
        setDescInput(txt.nativeEvent.text)
    }

    const saveDate = () => {
        dispatch<SetNewElemTodoList>(setNewElemTodoList({
            name: nameInput,
            description: descInput
        } as ISingleElementList
        ));
        props.switchView(false)
    }
    return (
        <Wrapper>
            <CustomTextInput value={nameInput} onChange={nameValueChange} placeholder="Tytuł"/>
            <CustomTextInput value={descInput} onChange={descriptionValueChange} placeholder="Opis"/>
            <ButtonContainer onPress={saveDate}>
            <ButtonContent>Dodaj</ButtonContent>
            </ButtonContainer>
        </Wrapper>
        
    )
};

export default Form;