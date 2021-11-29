const default_state = {
    count : 0,
    countfive : 5,
};

const counterReducer = (state = default_state, action) => {
    if(action.type === "Increment"){
        return {
            countfive: state.countfive + 5,
            count : state.count + 1,
        }
    };

    if(action.type === "Decrement"){
        return {
            countfive: state.countfive - 5,
            count : state.count - 1
        }
    };

    return state;
}

export {counterReducer};