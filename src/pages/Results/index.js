import React from 'react';
import { Container } from '@material-ui/core';
import queryString from 'query-string';

export default () => {
    console.log(queryString.parse(location.search))
    return ( 
        <Container>
            Results
        </Container>
     )
}