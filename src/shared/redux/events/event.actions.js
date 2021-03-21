import { EventActionTypes } from "./event.reducer"

export const fetchCurrentEvent = (eventID) => {
    return {
        type: EventActionTypes.FETCH_CURRENT_EVENT,
        payload: eventID
    }
}

export const fetchCurrentEventSuccess = (event) => {
    return {
        type: EventActionTypes.FETCH_CURRENT_EVENT_SUCCESS,
        payload: event
    }
}

export const fetchCurrentEventError = (error) => {
    return {
        type: EventActionTypes.FETCH_CURRENT_EVENT_ERROR,
        payload: error
    }
}

export const fetchEvents = () => {
    return {
        type: EventActionTypes.FETCH_EVENTS
    }
}

export const fetchEventsSuccess = (events) => {
    return {
        type: EventActionTypes.FETCH_EVENTS_SUCCESS,
        payload: events
    }
}

export const fetchEventsError = (error) => {
    return {
        type: EventActionTypes.FETCH_EVENTS_ERROR,
        payload: error
    }
}

export const setCurrentEvent = (eventID) => {
    return {
        type: EventActionTypes.SET_CURRENT_EVENT,
        payload: eventID
    }
}

export const setLoadingEvents = () => {
    return {
        type: EventActionTypes.SET_LOADING_EVENTS,
    }
}

export const unSetLoadingEvents = () => {
    return {
        type: EventActionTypes.UNSET_LOADING_EVENTS,
    }
}

export const resetEvents = () => {
    return {
        type: EventActionTypes.RESET_EVENTS
    }
}