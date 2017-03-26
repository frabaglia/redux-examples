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
                state += 1
                break
            }

        case "DECREMENT":
            {
                state -= 1
                break
            }

        default:
            {
                console.log("@@redux/INIT or you fucked up?")
            }
    }

    return state
}

const store = createStore(reducer)

store.subscribe(() => {
    console.log("STORE CHANGES!")
    console.log(store.getState())
})
