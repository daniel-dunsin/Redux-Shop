import { OPEN_MODAL, CLOSE_MODAL } from '../actions';


const modalState = {
    isModalOpen: false,
}

const modalReducer = (state = modalState, action) => {
    if (action.type === OPEN_MODAL) {
        return { isModalOpen: true };
    }
    if (action.type === CLOSE_MODAL) {
        return { isModalOpen: false };
    }
    return state;
}

export default modalReducer;