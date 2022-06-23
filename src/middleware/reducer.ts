import { CHANGE_lOGIN_STATUS } from "./action";


const initialState = {
    loginStatus: false,

};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_lOGIN_STATUS:
            return {
                ...state,
                loginStatus: payload,
            };
        default:
            return state;
    }
};

export default reducer;