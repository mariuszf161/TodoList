import React, { FC, useState } from 'react';
import { Button, ScrollView } from 'react-native';
import styled from 'styled-components/native';


import Colors from '../../constans/Colors';

import Form from '../../compnents/Form';
import TodoList from '../../compnents/TodoList';

const TodoListScreen = ({navigation}) => {
    const [FormViwe, setFromView] = useState<boolean>(false);

    return (
        <ScrollView>
            {FormViwe ? (
                <Form switchView={setFromView}/>
            ) : (
                <TodoList switchView={setFromView}/>
            )}
        </ScrollView>
        
    );
};

export default TodoListScreen;