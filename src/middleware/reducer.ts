import { CHANGE_lOGIN_STATUS } from "./action";
import { CHANGE_VISIBLEMODAL_STATUS } from "./action";


const initialState = {
    loginStatus: false,
    visibleModal: false

};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CHANGE_lOGIN_STATUS:
            return {
                ...state,
                loginStatus: payload,
            };
        case CHANGE_VISIBLEMODAL_STATUS:
            // console.log(payload)
            return {
                ...state,
                visibleModal: payload,
            };
        default:
            return state;
    }
};

export default reducer;