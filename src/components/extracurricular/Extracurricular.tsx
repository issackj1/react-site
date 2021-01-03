import React from 'react';
import {ExtracurricularContent} from "../../constants";
import {Grid, Typography} from "@material-ui/core";
import {ExtracurricularItem} from "./ExtracurricularItem";
import {v4 as uuidv4} from "uuid";

interface Props {

}

interface ExtracurricularContentItems {
    title: String
    items: []
}

export const Extracurricular: React.FC<Props> = () => {
    return (
        <div className={"container"} id={"extracurricular"}>
            <Grid container direction={"row"} spacing={1}>
                <Grid item xs={12} sm={12}>
                    <Typography variant={"h3"} gutterBottom
                                align={"center"}>{ExtracurricularContent.title}</Typography>
                </Grid>
                {
                    ExtracurricularContent.content.map((object: ExtracurricularContentItems) => <ExtracurricularItem
                        key={uuidv4()} title={object.title} items={object.items}/>)
                }
            </Grid>
        </div>
    );
};
