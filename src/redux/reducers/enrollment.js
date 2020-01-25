
const Initial_State = {
    enrollment: [],
    dayEnrollment: [],
    timeEnrollment: [],
    rotationEnrollment: []

};


const Enrollment = (state = Initial_State, action) => {

    switch (action.type) {
        case 'SET_Enrollment': return {
            ...state,
            enrollment: [...state.enrollment, action.enrollment],
            dayEnrollment: [...state.dayEnrollment, action.dayEnrollment],
            timeEnrollment: [...state.timeEnrollment, action.timeEnrollment],
            rotationEnrollment: [...state.rotationEnrollment, action.rotationEnrollment],
        }
        case 'SECTOR_CLEAR': return Initial_State;

        default: return state;
    }



};


export default Enrollment;