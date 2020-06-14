import {createScheduleAC} from "../redux/schedule-reducer";

export const createSchedule = () => {
    return (dispatch, getState) => {
        const scheduleCreator = getState().form.scheduleCreator.values;
        const scheduleSettings = getState().form.scheduleSettings.values;

        let lessonsDuration = parseLessonsDuration(scheduleCreator);
        let breaksBtwLessons = parseBreaksBtwLessons(scheduleCreator);
        let scheduleItems = []
        /// Допистаь логику по вычислению времениииии
        for (let i = 0; i < scheduleCreator.lessonsCount; i++) {
            scheduleItems.push({
                day: i+1,
                item: {
                    duration: {
                        from: scheduleCreator.scheduleStart,
                        to: scheduleCreator.scheduleStart, // todo мб занести вычисление во фронт
                        break: breaksBtwLessons[i],
                    },
                    lessonType: null,
                    lessonName: null,
                    additionalInfo: [],
                }
            })
        }

        let days = [];
        // расписание * 7 дней
        for (let i = 0; i < 7; i++) {
            days.push(scheduleItems);
        }
        let scheduleItem = {

        }
        const schedule = {
            name: scheduleCreator.name,
            lessonsDuration: scheduleCreator.lessonsDuration,
            lessonCount: scheduleCreator.lessonsCount,
            showingSettings: {
                additionalInfo: scheduleSettings.additionalInfo,
                lessonsDuration: scheduleSettings.lessonDuration,
                lessonName: scheduleSettings.lessonName,
                lessonType: scheduleSettings.lessonType,
                monthDay: scheduleSettings.monthDay,
            },
            days,

        };
        dispatch(createScheduleAC(schedule));
        debugger;
    }
}

function parseLessonsDuration(scheduleState) {
    let lessonsDuration = [];
    // BECAUSE FUCKING REDUX FORM OBJECT IS NOT ITERABLE [...scheduleCreator];
    for (let key in scheduleState) {
        debugger;
        if((key+'').match(/lesson_\d/)) {
            lessonsDuration.push({key:scheduleState[key]});
        }
    }
    if(lessonsDuration.length == 0) {
        for(let i = 0; i < scheduleState.lessonsCount; i++) {
            let lesson = 'lesson_'+ (i+1);
            lessonsDuration.push({[lesson]: scheduleState.lessonsDuration});
        }
    }
    return lessonsDuration;
}

function parseBreaksBtwLessons(scheduleState) {
    let breaksBtwLessons = [];
    for (let key in scheduleState) {
        if((key+'').match(/break_from_\d/)) {
            breaksBtwLessons.push({[key]:scheduleState[key]});
        }
    }
    return breaksBtwLessons;
}