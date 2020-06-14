import React from "react";
import {Field, reduxForm, reset} from "redux-form";
import classes from './scheduleForm.module.css'
let ScheduleSettings = (props) => {
    return (
        <>
            <h1>Добавить в расписание следующие опции:</h1>
            <form className={classes.settingsForm} onSubmit={props.handleSubmit}>
                <div className={classes.options}>
                    <label>
                        <Field component="input" type="checkbox" name="lessonType"/>
                        Тип занятия
                    </label>
                    <label>
                        <Field component="input" type="checkbox" name="lessonName"/>
                        Название предмета
                    </label>
                    <label>
                        <Field component="input" type="checkbox" name="additionalInfo"/>
                        Дополнительная информация
                    </label>
                </div>
                <div className={classes.options}>
                    <label>
                        <Field component="input" type="checkbox" name="lessonDuration"/>
                        Время занятия
                    </label>
                    <label>
                        <Field component="input" type="checkbox" name="weekDay"/>
                        День недели
                    </label>
                    <label>
                        <Field component="input" type="checkbox" name="monthDay"/>
                        Число месяца
                    </label>
                </div>
            </form>
        </>
    )

}
const onSubmit = (values, dispatch) => {
    dispatch(reset('scheduleSettings')) ;
};

ScheduleSettings = reduxForm({
    form: 'scheduleSettings',
    onSubmit,
    initialValues: {
        lessonType: true,
        additionalInfo: true,
        lessonDuration: true,
        lessonName: true,
        weekDay: true,
        monthDay: true,
    },
    destroyOnUnmount: false
})(ScheduleSettings)
export default ScheduleSettings;