import React from 'react';
import {Grid, Typography} from "@material-ui/core";

interface Props {
    title: String
    items: []
}

export const SkillsItem: React.FC<Props> = props => {
    const {title, items} = props;
    return (
        <Grid item xs={6} sm={3}>
            <Typography variant={"h4"}>{title}</Typography>
            <ul className={"list-unstyled"}>
                {
                    items.map((item: String, i: number) => <li key={i}>{item}</li>)
                }
            </ul>
        </Grid>
    );
};