

const Infromation = (state = null, action) => {

    switch (action.type) {
        case 'SET_FINAL_ANSWER': return action.payload;

        default: return state;
    }



};


export default Infromation;