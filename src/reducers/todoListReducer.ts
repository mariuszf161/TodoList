import * as actionTypes from '../actions/types/todolistTypes';
import { ISingleElementList } from '../enitities/todoSingleEL';

export interface ITodoListReducer {
    todoList: ISingleElementList[];
}

const defaultState = (): ITodoListReducer => ({
    todoList: [{
        name: 'Pierwszy',
        description: 'Pierwsze zadanie'
    },{
        name: 'drugi',
        description: 'drugie zadanie'
    }]
});

export default (state = defaultState(), action: any): ITodoListReducer => {
    switch (action.type) {
        case actionTypes.SET_NEW_ELEM: {
            return {
                ...state,
                todoList: [...state.todoList, action.newElem]
            };
        }
        default: {
            return state;
        }
    }
};