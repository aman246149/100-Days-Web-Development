
//Action types
export const OPEN_OR_CLOSE_DRAWER="OPEN_OR_CLOSE_DRAWER"
export const ADD_NOTE_TITLE="ADD_NOTE_TITLE"
export const ADD_NOTE_DESCRIPTION="ADD_NOTE_DESCRIPTION"

//Action creators

export function openDrawer(val){
    return {
        type:OPEN_OR_CLOSE_DRAWER,
        val:val
    }
}

export function addNoteTitle(val){
    console.log("notes value",val)
    return {
        type:ADD_NOTE_TITLE,
        val:val,
    }
}

export function addNoteDescritption(val){
    console.log("desc value",val)
    return {
        type:ADD_NOTE_DESCRIPTION,
        val:val,
    }
}