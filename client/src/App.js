import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import QuizBuilder from './pages/QuizBuilder';
import QuizResults from './pages/QuizResults';
import NotFound from './pages/NotFound';
// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
			<Navbar />
			<Switch>
				<Route exact path="/"><Home /></Route>
				<Route path="/quiz/:id/results"><QuizResults /></Route>
				<Route path="/quiz/:id"><Quiz /></Route>
        		<Route path="/quizbuilder"><QuizBuilder /></Route>
				<Route path="*"><NotFound /></Route>
			</Switch>
		</Router>
  );
}

export default App;
