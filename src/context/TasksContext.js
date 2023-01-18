import React, { createContext, useReducer } from 'react';

export const TasksContext = createContext();

const TasksReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TASK':
            const id = Math.random() * 100;
            let task = {...action.payload, id}
            return {...state, taskslist: [...state.taskslist, task] }
        case 'REMOVE_TASK':
            let filteredList = state.taskslist.filter(task => task.id !== action.payload.id)
            return {...state, taskslist: filteredList}
        case 'UPDATE_TASK':
            let updatedList = state.taskslist
              .map((task) => action.payload.id === task.id ? action.payload : task)
            return {...state, taskslist: updatedList}
        case 'GET_TASK':
            return state.taskslist;
        case 'SET_SELECTED_TASK':
            return {...state, specificTask: {...action.payload}}   
        case 'GET_SELECTED_TASK': 
            return state.specificTask   
        default:
            return state
    }
    
}
const TasksContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(TasksReducer, {
        taskslist: [],
        specificTask: {}
    })
    return(
     <TasksContext.Provider value={{state, dispatch}}>
        {children}
     </TasksContext.Provider>
    )
}
export default TasksContextProvider;