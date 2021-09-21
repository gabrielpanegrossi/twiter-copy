import * as S from './style';

import { useContext, useState } from 'react';

import { FaRegWindowClose } from 'react-icons/fa';
import TweetContext from '../../context/tweetContext';
import { writeNewTweet } from '../../hooks/db';

export default function NewTweet() {
	const { createNewTweet, setCreateNewTeet } = useContext(TweetContext);
	const [tweetText, setTweetText] = useState('');

	function closeTweetCreator() {
		setCreateNewTeet(false);
	}

	function getTextareaValue(e) {
		setTweetText(e.target.value);
	}

	function CreateTweet() {
		writeNewTweet(tweetText);
		closeTweetCreator();
	}

	return (
		<S.WriteNewTweetContainer>
			<S.WriteNewTweetContent>
				<textarea
					placeholder="O que você está pensando..."
					onChange={getTextareaValue}
				/>
				<div className="new-tweet-buttons">
					<FaRegWindowClose onClick={closeTweetCreator} />
					<button className="confirm-new-tweet" onClick={CreateTweet}>
						Tweet
					</button>
				</div>
			</S.WriteNewTweetContent>
		</S.WriteNewTweetContainer>
	);
}
