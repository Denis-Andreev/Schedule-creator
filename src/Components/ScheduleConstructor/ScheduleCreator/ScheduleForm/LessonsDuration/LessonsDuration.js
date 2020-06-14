import React, {useEffect} from "react";
import {Field} from "redux-form";


export const LessonsDuration = (props) => {
    const lessonName = "lesson_"+props.order;
    useEffect(() => {
        props.initialValues[lessonName] = props.initialValue;
    },[])
    return (
        <div>
            <span>Длительность занятия №{props.order}</span>
            <Field  component="input" name={lessonName}/>
        </div>
    )
}