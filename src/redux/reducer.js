import { initialState } from "./initialState"

export const reducer = (state = initialState, action) => {
    if (action.type === 'LOAD_COURSE') {
        return {
            ...state,
            courses: action.payload
        }
    }
    else if (action.type === 'LOAD_FREE_RESOURCE') {
        return {
            ...state,
            freeResources: action.payload
        }
    }
    else if (action.type === 'LOAD_QUIZ') {
        return {
            ...state,
            quizzes: action.payload
        }
    }
    else if (action.type === 'SUBMIT_QUIZ') {
        return {
            ...state,
            finalAnswers: action.payload
        }
    }
    else if (action.type === 'ADD_TO_CART') {
        return {
            ...state,
            cart: action.payload
        }
    }
    else if (action.type === 'ADD_SUBTOTAL') {
        return {
            ...state,
            subTotal: action.payload
        }
    }
    else if (action.type === 'ADD_VAT') {
        return {
            ...state,
            totalVat: action.payload
        }
    }
    else if (action.type === 'ADD_TOTAL') {
        return {
            ...state,
            totalPrice: action.payload
        }
    }
    else if (action.type === 'DISCOUNT_PRICE') {
        return {
            ...state,
            discountPrice: action.payload
        }
    }
    else if (action.type === 'USE_CUPON') {
        return {
            ...state,
            cuponUsed: action.payload
        }
    }
    else if (action.type === 'INCREASE_QUANTITY') {
        return {
            ...state,
            cart: state.cart.map(item => {
                if (item.id === action.payload) {
                    item.quantity += 1
                }
                return item;
            })
        }
    }
    else if (action.type === 'DECREASE_QUANTITY') {
        return {
            ...state,
            cart: state.cart.map(item => {
                if (item.id === action.payload) {
                    if (item.quantity > 0) {
                        item.quantity = item.quantity - 1
                    }
                }
                return item;
            })
        }
    }
    else {
        return state;
    }
}