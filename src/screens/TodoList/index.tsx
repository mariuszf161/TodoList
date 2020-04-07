import React, { FC, useState } from 'react';
import { Button, View } from 'react-native';
import styled from 'styled-components/native';


import Colors from '../../constans/Colors';

import Form from '../../compnents/Form';
import TodoList from '../../compnents/TodoList';

const TodoListScreen = ({navigation}) => {
    const [FormViwe, setFromView] = useState<boolean>(false);

    return (
        <View>
            {FormViwe ? (
                <Form switchView={setFromView}/>
            ) : (
                <TodoList switchView={setFromView}/>
            )}
        </View>
    );
};

export default TodoListScreen;