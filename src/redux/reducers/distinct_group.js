

const Group = (state = [], action) => {

    switch (action.type) {
        case 'SET_Group': return action.payload;

        default: return state;
    }



};


export default Group;