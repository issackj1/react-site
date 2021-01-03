import React from 'react';
import {Grid, Typography} from "@material-ui/core";

interface Props {
    title: string,
    items: { name: string, link: string }[]
}

export const ExtracurricularItem: React.FC<Props> = props => {
    const {title, items} = props;
    return (
        <Grid
            container
            direction={ "column" }
            item
            xs={ 6 }
            sm={ 6 }
            alignItems={ "center" }
        >
            <Typography variant={ "h4" } gutterBottom align={ "center" }>{title}</Typography>
            <ul className={ "list-unstyled" }>
                {
                    items.map((object:any) => {
                        return <a
                            href={object.link}
                                  rel={"noopener noreferrer"}
                                  target={"_blank"}>
                            <li>{object.name}</li>
                        </a>;
                    })
                }
            </ul>
        </Grid>
    );
}