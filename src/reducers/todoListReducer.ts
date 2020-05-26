import * as actionTypes from '../actions/types/todolistTypes';
import { ISingleElementList } from '../enitities/todoSingleEL';

export interface ITodoListReducer {
    todoList: ISingleElementList[];
}

const defaultState = (): ITodoListReducer => ({
    todoList: [{
        name: 'Zrobić zakupy',
        description: 'Mleko, chleb, kawa, 2 pomidory'
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