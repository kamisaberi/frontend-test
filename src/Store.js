import { createStore } from "redux"
const initialState = {
    counter: 101,
    students: [
        { id: 1001, name: "ali", family: "rezaei" },
        { id: 1002, name: "ali", family: "rezaei" },
        { id: 1003, name: "ali", family: "rezaei" },
    ]
    , nextId: 1004
    , users: [
        { id: 1001, name: "ali rezaei", username: "li1234", password: "1234" },
        { id: 1001, name: "ali rezaei", username: "li1234", password: "1234" },
        { id: 1001, name: "ali rezaei", username: "li1234", password: "1234" },
        { id: 1001, name: "ali rezaei", username: "li1234", password: "1234" },
    ]

}

const reducer = (state = initialState, action) => {
    if (action.type == "INC") {
        return { ...state, counter: state.counter + 1 }
    } else if (action.type == "INCN") {
        return { ...state, counter: state.counter + action.payload.value }
    }
    return state
}

const Store = createStore(reducer)
export default Store

