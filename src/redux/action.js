// https://tawsifhye.github.io/data/courses.json

/* return async (dispatch) => {
    const response = await fetch('https://tawsifhye.github.io/data/shop.json')
        .then(res => res.json());
    dispatch({
        type: 'FETCH_API_DATA',
        payload: response
    })
} */

export const fetchCourse = () => {

    return async (dispatch) => {
        await fetch('https://tawsifhye.github.io/data/courses.json')
            .then(res => res.json())
            .then(
                data => (
                    dispatch({
                        type: 'LOAD_COURSE',
                        payload: data
                    })
                )
            );
    }
}
export const fetchFreeResources = () => {
    return async (dispatch) => {
        await fetch('https://tawsifhye.github.io/data/freeresources.json')
            .then(res => res.json())
            .then(
                data => (
                    dispatch({
                        type: 'LOAD_FREE_RESOURCE',
                        payload: data
                    })
                )
            );

    }
}
export const fetchQuiz = () => {
    return async (dispatch) => {
        await fetch('https://tawsifhye.github.io/data/quizes.json')
            .then(res => res.json())
            .then(
                data => (
                    dispatch({
                        type: 'LOAD_QUIZ',
                        payload: data
                    })
                )
            );

    }
}

export const submitQuiz = (payload) => {

    /*  return {
         type: 'SUBMIT_QUIZ',
         payload
     } */

}

export const addToCart = (payload) => {
    return {
        type: 'ADD_TO_CART',
        payload
    }
}
export const addSubTotal = (payload) => {
    return {
        type: 'ADD_SUBTOTAL',
        payload
    }
}
export const addVat = (payload) => {
    return {
        type: 'ADD_VAT',
        payload
    }
}
export const addTotal = (payload) => {
    return {
        type: 'ADD_TOTAL',
        payload
    }
}
export const discountPrice = (payload) => {
    return {
        type: 'DISCOUNT_PRICE',
        payload
    }
}
export const useCupon = (payload) => {
    return {
        type: 'USE_CUPON',
        payload
    }
}
