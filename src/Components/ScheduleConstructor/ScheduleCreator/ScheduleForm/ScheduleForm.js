import React, {useState} from "react";
import {Field, FieldArray, reduxForm, reset} from "redux-form";

import classes from './scheduleForm.module.css';
import {LessonsDuration} from "./LessonsDuration/LessonsDuration";
import {LessonBreak} from "./LessonsBreak/LessonBreak";
import {createSchedule} from "../../../../Thunk/createSchedule";

let ScheduleForm = (props) => {

    const [scheduleName, setScheduleName] = useState(props.initialValues.name);
    const changeScheduleName = (e) => {
        setScheduleName(e.target.value);
    }

    const [durationSettings, changeDurationSettings] = useState({showed: false, fieldCount: props.initialValues.lessonsCount});

    const setLessonsCount = (e) => {
        changeDurationSettings({showed: durationSettings.showed, fieldCount: e.target.value});
    }
    const toggleDurationSettings = () => {
        changeDurationSettings({showed: !durationSettings.showed, fieldCount: durationSettings.fieldCount});
    }

    let durationFields = [];
    for(let i = 0; i < durationSettings.fieldCount; i++) {
        // todo fix initialValue
        durationFields.push(<LessonsDuration initialValues={props.initialValues} initialValue={props.initialValues.lessonsDuration} key={i} order={i+1}/>)
    }
    let durationBreaksFields = [];
    for(let i = 0; i < durationSettings.fieldCount - (durationSettings.fieldCount % 2); i++) {
        durationBreaksFields.push(<LessonBreak initialValues={props.initialValues} key={i} order={i+1}/>)
    }
    return (
        <form className={classes.creatingForm} onSubmit={props.handleSubmit}>
            <div className="form-group">
                Название
                <Field
                    onChange={changeScheduleName}
                    className="form-control"
                    component="input"
                    name="name"
                    type="text"
                />
                Расписание будет доступно по ссылке:<br/>
                http:example.com/yourLogin/{scheduleName || 'имя_расписания'}
            </div>

            <div className="form-group">
                Количество занятий(максимальное)
                <Field
                    className="form-control"
                    component="input"
                    name="lessonsCount"
                    type="text"
                    onChange={setLessonsCount}
                />
            </div>
            <div className="form-group">
                <h3>Длительность занятий</h3>
                <Field
                    className="form-control"
                    component="input"
                    name="lessonsDuration"
                    type="text"
                />
                <button onClick={toggleDurationSettings}>тонкая настройка</button>
                {durationSettings.showed
                    ?
                    <div>
                        <h2>Длительность занятий</h2>
                        {/*todo FUCKING FIELD ARRAY DONT WORK, CHECK EXAMPLE IN DOCS*/}
                        <FieldArray name="durationFields" component={() => durationFields} />
                    </div>
                    : null

                }
            </div>
            <div>
                <h3>Перерывы между занятиями</h3>
                {/*todo FUCKING FIELD ARRAY DONT WORK, CHECK EXAMPLE IN DOCS*/}
                <FieldArray name="durationBreaksFields" component={() => durationBreaksFields} />
            </div>
            <div>
                <h3>Начало учебного дня</h3>
                <Field
                    className="form-control"
                    component="input"
                    name="scheduleStart"
                    type="text"
                />
            </div>
            <button
                // todo redirect + dispatch
                onClick={ () => changeDurationSettings({showed: false, fieldCount: props.initialValues.lessonsCount})}
                type="submit"
                className="btn btn-primary btn-lg"
            >Создать</button>
        </form>
    )
}

const onSubmit = (values, dispatch) => {
    debugger;
    dispatch(createSchedule());
    dispatch(reset('scheduleCreator'));
};

ScheduleForm = reduxForm({
    form: 'scheduleCreator',
    onSubmit,
    initialValues: {
        name: '',
        lessonsCount: 9,
        lessonsDuration: 45,
        scheduleStart: '8:00',
    },
    destroyOnUnmount: false,
})(ScheduleForm);


export default  ScheduleForm;