import React from 'react';
import { Typography } from '@material-ui/core';

const TripInfoIntem = (props) => {
    return <Typography variant={'body1'}>
        <strong>{props.InfoName}:</strong> {props.info}
    </Typography>
}

export default TripInfoIntem