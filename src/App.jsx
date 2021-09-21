import './App.css';

import Header from './component/Header';
import TweetContext from './context/tweetContext';
import { useState } from 'react';

import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';
import Feed from './pages/userFeed';
import NewTweet from './component/WriteNewTweet';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
	const [createNewTweet, setCreateNewTeet] = useState(false);
	return (
		<>
			<BrowserRouter>
				<TweetContext.Provider value={{ createNewTweet, setCreateNewTeet }}>
					{createNewTweet ? <NewTweet /> : ''}
					<Header />
					<Switch>
						<Route path="/" exact>
							<Home />
						</Route>
						<Route path="/login">
							<Login />
						</Route>
						<Route path="/create-account">
							<CreateAccount />
						</Route>
						<Route path="/feed">
							<Feed />
						</Route>
					</Switch>
				</TweetContext.Provider>
			</BrowserRouter>
		</>
	);
}

export default App;
