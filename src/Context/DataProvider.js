import { createContext, useReducer } from "react";


const initialState = {
    quizzes: [],
    finalAnswers: [],
    courses: [],
    cart: []
}

const reducer = (state, action) => {
    if (action.type === 'LOAD_COURSE') {
        return { ...state, courses: action.payload }
    }
    if (action.type === 'LOAD_QUIZ') {
        return { ...state, quizzes: action.payload }
    }
    if (action.type === 'SUBMIT_QUIZ') {
        return { ...state, finalAnswers: action.payload }
    }
    if (action.type === 'ADD_TO_CART') {
        return { ...state, cart: action.payload }
    }
}

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (

        <DataContext.Provider value={{ dataContext: state, dispatch }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;