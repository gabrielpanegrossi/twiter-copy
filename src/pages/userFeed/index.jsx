import { useState, useContext, useEffect } from 'react';

import { FaThList, FaThLarge } from 'react-icons/fa';
import Tweet from '../../component/Tweet';
import TweetContext from '../../context/tweetContext';
import UserIsLoggedContext from '../../context/tweetContext copy';

import { getAuthUser } from '../../hooks/db';

import * as S from './style';

export default function Feed() {
	const [connectedUser, setConnectedUser] = useState({});

	const [tweetsList, setTweetsList] = useState([]);

	const { createNewTweet, setCreateNewTeet } = useContext(TweetContext);
	const { userIsLoged, setUserIsLoged } = useContext(UserIsLoggedContext);

	const [displayStyleList, setDisplayStyleList] = useState(false);

	useEffect(() => {
		setConnectedUser(getAuthUser());
		setUserIsLoged(true);
	}, []);

	function changeDisplay() {
		setDisplayStyleList(!displayStyleList);
	}

	function displayCreateTweet() {
		setCreateNewTeet(true);
	}

	return (
		<S.FeedContainer>
			<S.FeedContent displayCondition={displayStyleList}>
				<S.UserContent displayCondition={displayStyleList}>
					<div className="user-container">
						<div className="welcome-user-content">
							<h2>Bem vindo</h2>
							<h3>
								{connectedUser.displayName} <span>!</span>
							</h3>
						</div>
						<span>Sair</span>
					</div>
					<div className="new-tweet-button">
						<button onClick={displayCreateTweet}>New Twit</button>
					</div>
				</S.UserContent>
				<S.TweetsContainer>
					<nav className="feed-menu">
						<div className="tweets-menu">
							<span className="tweets-menu-button">Geral</span>
							<span className="menu-details">|</span>
							<span className="tweets-menu-button">My Twits</span>
							<span className="menu-details">|</span>
							<span className="tweets-menu-button">Favorites</span>
						</div>
						<div className="display-icons">
							{displayStyleList ? (
								<FaThLarge onClick={changeDisplay} />
							) : (
								<FaThList onClick={changeDisplay} />
							)}
						</div>
					</nav>
					<section className="feed-container">
						<Tweet></Tweet>
					</section>
				</S.TweetsContainer>
			</S.FeedContent>
		</S.FeedContainer>
	);
}
