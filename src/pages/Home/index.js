import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Typography,
    Card,
    Grid,
    TextField,
    Button,
} from "@material-ui/core";

import { MovieIcon } from "../../icons";

import styles from "./style";

export default ({ history }) => {
    let token = localStorage.getItem("token");
    let email = localStorage.getItem("email");

    const [searchText, setSearchText] = useState("");
    const classes = styles();

    const handleSearchTextChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleSearchTextClick = (event) =>
        history.push(`/results?movieName=${searchText}`);
    const handleLoginClick = (event) => history.push(`/login`);
    const handleRegisterClick = (event) => history.push(`/register`);
    const handleLogOut = (event) => {
		token = undefined;
		email = undefined;
		localStorage.clear();
	};

    return (
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid>
                        <Typography className={classes.title}>
                            Welcome to my movie app
                        </Typography>
                    </Grid>
                    <Grid>
                        <MovieIcon className={classes.MovieIcon} />
                    </Grid>
                </Grid>
                <TextField
                    className={classes.textFieldSearch}
                    value={searchText}
                    placeholder="Search a movie or serie"
                    onChange={handleSearchTextChange}
                />
                <Grid className={classes.buttonsContainer}>
                    {token ? (
                        <Link to='/'><Button
                            className={classes.searchButton}
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={handleLogOut}
                        >
                            Log Out
                        </Button></Link>
                    ) : (
                        <Button
                            className={classes.searchButton}
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={handleLoginClick}
                        >
                            Log In
                        </Button>
                    )}
                    {token ? (
                        <Typography>
						Bienvenid@ {email}
					</Typography>
                    ) : (
                        <Button
                            className={classes.searchButton}
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={handleRegisterClick}
                        >
                            Register
                        </Button>
                    )}
                    <Button
                        className={classes.searchButton}
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={handleSearchTextClick}
                    >
                        Search
                    </Button>
                </Grid>
            </Card>
        </Container>
    );
};
