import React, {useState} from 'react'
import { Container, Typography, Card, Grid, TextField, Button } from'@material-ui/core';

import {MovieIcon} from '../../icons'

import styles from './style';

export default ( {history} ) => {
	const [searchText, setSearchText] = useState("");
	const classes = styles();

	const handleSearchTextChange = event => {
		setSearchText(event.target.value)
	}

	const handleSearchTextClick = event => history.push(`/results?movieName=${searchText}`);
	const handleLoginClick = event => history.push(`/login`);
	const handleRegisterClick = event => history.push(`/register`);

	return (
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleGridContainer}>
					<Grid>
						<Typography className={classes.title}>Welcome to my movie app</Typography>
					</Grid>
					<Grid>
						<MovieIcon className={classes.MovieIcon} />
					</Grid>
				</Grid>
				<TextField 
					className={classes.textFieldSearch}
					value={searchText}
					placeholder="Search a movie or serie"
					onChange={handleSearchTextChange} />
					<Grid className={classes.buttonsContainer}>
						<Button className={classes.searchButton} variant="contained" color="primary" size="large" onClick={handleLoginClick}>Login</Button>
						<Button className={classes.searchButton} variant="contained" color="primary" size="large" onClick={handleSearchTextClick}>Search</Button>
						<Button className={classes.searchButton} variant="contained" color="primary" size="large" onClick={handleRegisterClick}>Register</Button>
					</Grid>
			</Card>
		</Container>
	)
}