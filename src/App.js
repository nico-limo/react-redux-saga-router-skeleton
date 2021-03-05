import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Home from './pages/Home';
import Results from './pages/Results';
import MovieDetail from './pages/MovieDetail';
import Register from './pages/Register';
import Login from './pages/Login';

const App = ({ store }) => (
	<Provider store={store}>
		<Router>
			<div style={{background:'white'}}>
				<Route exact path="/" component={Home} />
				<Route path="/results" component={Results} />
				<Route path="/movie/:id" component={MovieDetail} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
			</div>
		</Router>
	</Provider>
);

App.propTypes = {
	store: PropTypes.object.isRequired
};

export default App;
