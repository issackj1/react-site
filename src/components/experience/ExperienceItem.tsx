import React from 'react';
import {Typography} from "@material-ui/core";

interface Props {
    title: string,
    company: string,
    date: string
}

export const ExperienceItem: React.FC<Props> = (props) => {
    const {title, company, date} = props;
    return (
        <Typography variant={"body1"} align={"center"}>
            {title} at {company} {date}
        </Typography>
    );
}