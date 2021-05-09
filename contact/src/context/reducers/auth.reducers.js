import { REGISTER_ERROR, REGISTER_LOADING, REGISTER_SUCCESS } from "../../constants/actionTypes/actionTypes";

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
            case REGISTER_SUCCESS:
                return {
                    ...state,
                    auth: {
                        ...state.auth,
                        loading: false,
                        data: payload,
                        error: null
                    }
                }
                case REGISTER_ERROR:
                return {
                    ...state,
                    auth: {
                        ...state.auth,
                        loading: false,
                        data: null,
                        error: payload
                    }
                }
        default:
            return state;
    }
}

export default auth