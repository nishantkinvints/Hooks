const default_state = {
    countten : 0,
};

const counterReducerten = (state = default_state, action) => {
    // console.log(state);
    // console.log(action);

    if(action.type === "Incrementten"){
        return {
            countten: state.countten + 10,
        }
    };

    if(action.type === "Decrementten"){
        return {
            countten: state.countten - 10,
        }
    };

    return state;
}

export {counterReducerten};