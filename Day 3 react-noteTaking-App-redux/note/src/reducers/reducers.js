import { OPEN_OR_CLOSE_DRAWER,ADD_NOTE_TITLE,ADD_NOTE_DESCRIPTION } from '../actions/action'

const initialState = {
    isDraweropen:false,
        notesTitle:[],
        notesDesc:[]
    
}

export default function notesApp(state=initialState, action){
    switch (action.type){
        case OPEN_OR_CLOSE_DRAWER:
            return{
                ...state,
                isDraweropen:action.val
            }

            case ADD_NOTE_TITLE:
            return{
                ...state,
                notesTitle:[...state.notesTitle,action.val]
            }
            case ADD_NOTE_DESCRIPTION:
            return{
                ...state,
                notesDesc:[...state.notesTitle,action.val]
            }
        default:
            return state
    }
}