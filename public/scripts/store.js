
const store = Redux.createStore( 
    Redux.combineReducers({
        authState: authReducer,
        noteState: noteReducer,
        sidebarState: sideBarReducer
    }),
    {},
    Redux.applyMiddleware(ReduxThunk)
)

