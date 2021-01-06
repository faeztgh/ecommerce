import { SET_SC_WIDTH, SET_SC_HEIGHT } from "../types";

const initState = { width: window.innerWidth, height: window.innerHeight };
const ScSizeReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_SC_WIDTH:
            return {...state,width:action.payload.width}

        case SET_SC_HEIGHT:
            return action.payload.height;
        default:
            return state;
    }
};

export default ScSizeReducer;
