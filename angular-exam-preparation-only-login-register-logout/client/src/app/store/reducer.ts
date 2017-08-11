import { combineReducers } from 'redux'
import { IAppState } from './app.state'

import { coreReducer } from './core/core.reducer'
import { usersReducer } from './users/users.reducer'

export const reducer = combineReducers<IAppState>({
    core: coreReducer,
    users: usersReducer
})