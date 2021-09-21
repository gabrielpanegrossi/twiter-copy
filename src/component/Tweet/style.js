import styled from 'styled-components';

export const TweetContainer = styled.article`
	width: 100%;
	min-height: 100px;
	background: white;

	border: 1px solid white;
	border-radius: 5px;
	padding: 10px;
	margin-bottom: 20px;

	h4,
	p {
		margin: 0;
	}

	.tweet-icons {
		display: flex;
		justify-content: center;
		align-items: center;

		width: 100%;
		gap: 40px;
		margin-top: 10px;

		font-size: 16px;
		color: #f15c22;

		svg {
			cursor: pointer;
		}
	}
`;
