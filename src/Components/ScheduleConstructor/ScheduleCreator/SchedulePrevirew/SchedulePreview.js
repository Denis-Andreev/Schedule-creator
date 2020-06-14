import React from "react";
import classes from "./SchedulePreview.module.css"
import {connect} from "react-redux";

let SchedulePreview = (props) => {
    // map lessonslist + подключить стейт с количеством уроков
    const weekDay = props.scheduleSettings.weekDay && (
        <div className={classes.weekday}>
        {/*todo откорректировать показ даты*/}
        Понедельник
        </div>
    );
    const monthDay = props.scheduleSettings.monthDay && (
        <div className={classes.monthDay}>
            {/*todo откорректировать показ даты*/}
            {(new Date(Date.now())).getDay() + " июня "}
        </div>
    )
    const scheduleHeader = (weekDay || monthDay) && (
        <div className={classes.scheduleHeader}>
            {weekDay}
            {monthDay}
        </div>
    )
    let scheduleItems = [];
    for (let i = 0; i < props.lessonsCount; i++) {
        scheduleItems.push(<ScheduleItem scheduleSettings={props.scheduleSettings}/>)
    }
    return (
        <div className={classes.container}>
            <h1>Предварительный просмотр:</h1>
            <div className={classes.schedule}>
                {scheduleHeader}
                {scheduleItems}
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        scheduleSettings: state.form.scheduleSettings.values,
        lessonsCount: state.form.scheduleCreator.values.lessonsCount

}
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
SchedulePreview = connect(mapStateToProps, mapDispatchToProps)(SchedulePreview)

const ScheduleItem = (props) => {
    const timeInfo = props.scheduleSettings.lessonDuration && (
        <div className={classes.timeInfo}>
            14:00 - 16:00
        </div>
    );
    const lessonType = props.scheduleSettings.lessonType && (
        <div className={classes.lessonType}>
            Тип занятия
        </div>
    );
    const lessonName = props.scheduleSettings.lessonName && (
        <div className={classes.lessonName}>
            Название предмета
        </div>
    );
    const additionalInfo = props.scheduleSettings.additionalInfo && (
        <div className={classes.additional}>
            Дополнительная информация
            <br/>
            Дополнительная информация
        </div>
    );
    return (
        <div className={classes.item}>
            {timeInfo}
            {lessonType}
            <div className={classes.lesson}>
                {lessonName}
                {additionalInfo}
            </div>
        </div>
    )
}

export default SchedulePreview;