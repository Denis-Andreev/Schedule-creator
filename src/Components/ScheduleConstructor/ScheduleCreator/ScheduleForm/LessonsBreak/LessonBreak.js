import React, {useEffect} from "react";
import {Field} from "redux-form";


export const LessonBreak = (props) => {
    const lessonName = "break_from_"+props.order+"_to_" + (+props.order+1);
    const defaultBreakDuration = 10;
    // todo https://qna.habr.com/q/545628
    useEffect(() => {
        props.initialValues[lessonName] = defaultBreakDuration;
    },[])
    return (
        <div>
            <span>Занятие №{props.order}</span>
            <Field  component="input" name={lessonName}/>
            <span>Занятие №{props.order+1}</span>
        </div>
    )
    return (
        <div>

        </div>
    )
}