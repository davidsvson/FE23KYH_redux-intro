import { createAction, createReducer } from "@reduxjs/toolkit";

const changeAlias = createAction<string>('change alias');
const changeName = createAction<string>('change name');
const changeProfile = createAction<Profile>('change profile');
const resetProfile = createAction('reset profile');

const actions = {changeAlias, changeName, changeProfile, resetProfile};

export interface Profile {
    alias : string;
    name : string; 
} 

const initialState : Profile = {
    alias : '',
    name : ''
}

const profileReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeAlias , (state, action) => 
            ({ alias : action.payload,
                name : state.name }
            ))
        .addCase(changeName , (state, action) => 
            ({...state, name: action.payload}))
        .addCase(changeProfile, (state, action) => 
            (action.payload)
        )
        .addCase(resetProfile, (state, action ) => initialState)
})

export {actions, profileReducer};