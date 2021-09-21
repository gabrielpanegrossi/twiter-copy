import { useState } from 'react';

import * as S from './style';

import {
	FaRegHeart,
	FaHeart,
	FaRegComment,
	FaComment,
	FaRegTrashAlt,
	FaTrashAlt,
} from 'react-icons/fa';

export default function Tweet() {
	const [heart, setHeart] = useState(false);
	const [comment, setComment] = useState(false);
	const [trash, setTrash] = useState(false);

	function changeHeartState() {
		setHeart(!heart);
	}

	function changeCommentState() {
		setComment(!comment);
	}

	function changeTrashState() {
		setTrash(!trash);
	}

	return (
		<S.TweetContainer>
			<h4>User Name</h4>
			<p>tweet text</p>
			<div className="tweet-icons">
				<div>
					{heart ? (
						<FaHeart onClick={changeHeartState} />
					) : (
						<FaRegHeart onClick={changeHeartState} />
					)}
				</div>
				<div>
					{comment ? (
						<FaComment onClick={changeCommentState} />
					) : (
						<FaRegComment onClick={changeCommentState} />
					)}
				</div>
				<div>
					{trash ? (
						<FaTrashAlt onClick={changeTrashState} />
					) : (
						<FaRegTrashAlt onClick={changeTrashState} />
					)}
				</div>
			</div>
		</S.TweetContainer>
	);
}
