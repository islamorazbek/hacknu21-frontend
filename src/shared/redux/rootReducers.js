import { combineReducers } from "redux";
import { EventReducer } from './events/event.reducer'
import { AuthReducer } from './auth/auth.reducer'
import { ThemeReducer } from "./theme/theme.reducer";

const rootReducers = combineReducers({
    auth: AuthReducer,
    events: EventReducer,

    
    theme: ThemeReducer
})

export default rootReducers