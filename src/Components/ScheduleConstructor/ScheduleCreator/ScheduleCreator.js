import React from "react";
import ScheduleForm from "./ScheduleForm/ScheduleForm";
import SchedulePreview from "./SchedulePrevirew/SchedulePreview";
import ScheduleSettings from "./ScheduleForm/ScheduleSettings";

export const ScheduleCreator = (props) => {
    return (
        <>
            <ScheduleForm />
            <ScheduleSettings />
            <SchedulePreview />
        </>
    )
}