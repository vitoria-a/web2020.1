import { createStore, combineReducers } from 'redux'

const reducers = combineReducers(
    {
        number: function (state, action) {
            return {
                num1: 5,
                num2: 15
            }
        }
    }
)

function StoreConfig() {
    return createStore(reducers)
}

export default StoreConfig;