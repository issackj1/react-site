import { Grid, Typography } from "@material-ui/core";
import React from 'react';
import { SkillsContent } from "../constants";

interface Props {

}

export const Skills: React.FC<Props> = () => {
    return (
        <Grid direction="column"
            spacing={2}
            justify="center">
            <Typography variant={"h2"} align={"center"} gutterBottom>{SkillsContent.title}</Typography>
            <Typography variant={"h5"} align={"center"} gutterBottom>{SkillsContent.subtitle}</Typography>
            <Grid direction="column" justify="center">
                <Grid item xs={ 3 } md={ 3 }>
                    <Typography variant={"h4"}>Languages</Typography>
                    <ul className={"list-unstyled"}>
                        {
                            SkillsContent.languages.map((language, i) => <li key={i}>{language}</li>)
                        }
                    </ul>
                </Grid>
                <Grid item xs={ 3 } md={ 3 }>
                    <Typography variant={"h4"}>Libraries</Typography>
                    <ul className={"list-unstyled"}>
                        {
                            SkillsContent.libraries.map((library, i) => <li key={i}>{library}</li>)
                        }
                    </ul>
                </Grid>
                <Grid item xs={ 3 } md={ 3 }>
                    <Typography variant={"h4"}>Frameworks</Typography>
                    <ul className={"list-unstyled"}>
                        {
                            SkillsContent.frameworks.map((framework, i) => <li key={i}>{framework}</li>)
                        }
                    </ul>
                </Grid>
                <Grid item xs={ 3 } md={ 3 }>
                    <Typography variant={"h4"}>Databases</Typography>
                    <ul className={"list-unstyled"}>
                        {
                            SkillsContent.databases.map((database, i) => <li key={i}>{database}</li>)
                        }
                    </ul>
                </Grid>
            </Grid>
        </Grid>
    );
};
