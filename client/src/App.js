import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import QuizBuilder from './pages/QuizBuilder';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
			<Switch>
				<Route exact path="/"><Home /></Route>
				<Route path="/quiz/:id"><Quiz /></Route>
        		<Route path="/quizbuilder"><QuizBuilder /></Route>
				<Route path="*"><NotFound /></Route>
			</Switch>
		</Router>
  );
}

export default App;
