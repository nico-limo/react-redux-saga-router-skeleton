import { SvgIcon } from "@material-ui/core";
import MovieIcon from '@material-ui/icons/Movie';
import React from "react";


export default (props) => {
    return (
        <SvgIcon {...props}>
			<MovieIcon/>
        </SvgIcon>
    );
};
