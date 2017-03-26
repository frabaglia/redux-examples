console.log("App running")

import {
    createStore
} from 'redux'


/* DOM stuff */
const incrementButton = document.getElementById('increment')
const decrementButton = document.getElementById('decrement')

const incrementCallback = () => {
    store.dispatch({
        type: "INCREMENT"
    })
}
const decrementCallback = () => {
    store.dispatch({
        type: "DECREMENT"
    })
}

incrementButton.addEventListener('click', incrementCallback)
decrementButton.addEventListener('click', decrementCallback)

/* Redux stuff */
/* Here is the potato */
const reducer = (state = 0, action) => {
    console.log("DISPATCHING ACTION")
    console.debug(action.type)

    switch (action.type) {
        case "INCREMENT":
            {
                /* This is not the correct way */
                state += 1
                return state
                break
            }

        case "DECREMENT":
            {
                /* This is the correct way */
                var _state = state - 1
                return _state
                break
            }

        default:
            {
                console.log("@@redux/INIT or you fucked up?")
                return state
            }
    }
    return state
}

const store = createStore(reducer)

store.subscribe(() => {
    console.log("STORE CHANGES!")
    /* This is the way you get store data */
    console.log(store.getState())
})
