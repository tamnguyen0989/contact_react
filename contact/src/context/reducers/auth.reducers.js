import { REGISTER_LOADING } from "../../constants/actionTypes/actionTypes";

const auth = (state, { type, payload }) => {
    switch (type) {
        case REGISTER_LOADING:
            return {
                ...state,
                auth: {
                    ...state.auth,
                    loading: true,
                }
            }
        default:
            return state;
    }
}

export default auth