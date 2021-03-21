export const EventActionTypes = {
    FETCH_EVENTS: "FETCH_EVENTS",
    FETCH_EVENTS_SUCCESS: "FETCH_EVENTS_SUCCESS",
    FETCH_EVENTS_ERROR: "FETCH_EVENTS_ERROR",

    FETCH_CURRENT_EVENT: "FETCH_CURRENT_EVENT",
    FETCH_CURRENT_EVENT_SUCCESS: "FETCH_CURRENT_EVENT_SUCCESS",
    FETCH_CURRENT_EVENT_ERROR: "FETCH_CURRENT_EVENT_ERROR",

    CREATE_EVENT: "CREATE_EVENT",
    CREATE_EVENT_SUCCESS: "CREATE_EVENT_SUCCESS",
    CREATE_EVENT_ERROR: "CREATE_EVENT_ERROR",

    SET_LOADING_EVENTS: "SET_LOADING_EVENTS",
    UNSET_LOADING_EVENTS: "UNSET_LOADING_EVENTS",
    RESET_EVENTS: "RESET_EVENTS",
}

const initialState = {
    events: [],
    event: null,
    loading: false,
    errors: ''
}

export const EventReducer = (state = initialState, action) => {
    switch (action.type) {
        case EventActionTypes.FETCH_EVENTS:
            return state
        case EventActionTypes.FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload
            };
        case EventActionTypes.FETCH_EVENTS_ERROR:
            return {
                ...state,
                errors: action.payload
            };
        case EventActionTypes.FETCH_CURRENT_EVENT:
            return {
                ...state,
                loading: true
            };
        case EventActionTypes.FETCH_CURRENT_EVENT_SUCCESS:
            return {
                ...state,
                event: action.payload
            };
        case EventActionTypes.FETCH_CURRENT_EVENT_ERROR:
            return {
                ...state,
                errors: action.payload
            };
        case EventActionTypes.CREATE_EVENT_SUCCESS:
            return {
                ...state,
                events: action.payload
            }
        case EventActionTypes.CREATE_EVENT_ERROR:
            return {
                ...state,
                errors: action.payload
            }
        case EventActionTypes.SET_LOADING_EVENTS:
            return {
                ...state,
                loading: true
            };
        case EventActionTypes.UNSET_LOADING_EVENTS:
            return {
                ...state,
                loading: false
            };
        case EventActionTypes.RESET_EVENTS:
            return {
                ...state,
                events: [],
                errors: ''
            }
        default:
            return state;
    }
}