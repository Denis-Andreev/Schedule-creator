const CREATE_SCHEDULE = 'CREATE_SCHEDULE';

export const createScheduleAC = (schedule) => ({type: CREATE_SCHEDULE, schedule});

const initialState = {
    userSchedules: [],
}

export const scheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_SCHEDULE: {
            return {
                ...state,
                userSchedules: [...state.userSchedules, action.schedule]
            }
        }
        default: {
            return state;
        }
    }
}