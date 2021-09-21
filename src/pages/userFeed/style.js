import styled from 'styled-components';

export const FeedContainer = styled.section`
	display: flex;
	align-items: flex-start;

	width: 100%;
	height: 85vh;
	max-height: 85vh;

	background: url(/assets/wp4222394.jpg);
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

export const FeedContent = styled.div`
	${(props) =>
		props.displayCondition
			? 'display: flex; justify-content: flex-start; align-items: flex-start; flex-direction:column; gap: 40px;'
			: 'display: flex; justify-content: flex-start; align-items: flex-start; gap: 80px;'}

	width: 90%;
	max-width: 980px;
	padding: 40px 20px;
	margin: 40px auto 0 auto;

	background: rgba(0, 0, 0, 0.5);
`;

export const UserContent = styled.aside`
	${(props) =>
		props.displayCondition
			? 'display:flex; width:100%; gap:40px;'
			: 'max-width: fit-content;'}

	.user-container {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-direction: column;

		height: 100px;
		min-width: 250px;
		max-width: 250px;
		padding: 10px;
		gap: 10px;

		background: white;
		border: 1px solid white;
		border-radius: 5px;

		h2,
		h3,
		span {
			margin: 0;
		}

		h2,
		span {
			margin: 0;
			font-size: 16px;
			font-weight: 400;
		}

		h3 {
			font-size: 18px;
		}

		& > span {
			margin-right: auto;
			color: #f15c22;
			transition: all 0.2s ease-out;

			&:hover {
				text-decoration: underline;
				cursor: pointer;
				color: #741e00;
			}
		}

		.welcome-user-content {
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex-wrap: wrap;

			width: 100%;
			gap: 10px;
		}
	}

	.new-tweet-button {
		${(props) =>
			props.displayCondition
				? ' width:100%;'
				: 'margin-top: 20px; max-width: 250px;'}

		button {
			width: 100%;

			${(props) =>
				props.displayCondition ? 'height: 100px;' : 'height: 60px;'}

			color: white;
			background: #f15c22;
			border: 1px solid #f15c22;
			border-radius: 5px;
			font-size: 20px;
			font-weight: bold;
			cursor: pointer;
			transition: all 0.3s ease-in;

			&:hover {
				background: #f04c21;
				border: 1px solid #f04c21;
			}
		}
	}
`;

export const TweetsContainer = styled.section`
	display: flex;
	flex-direction: column;

	width: 100%;

	.feed-menu {
		display: flex;
		justify-content: space-between;
		align-item: flex-start;

		padding: 10px;

		background: white;
		border: 1px solid white;
		border-radius: 5px;

		.tweets-menu {
			display: flex;
			justify-content: flex-start;
			align-item: center;

			gap: 20px;
			width: 100%;

			span {
				color: #741e00;
			}

			.menu-details {
				cursor: default;
			}

			.tweets-menu-button {
				transition: all 0.2s ease-in;

				&:hover {
					text-decoration: underline;
					cursor: pointer;
					color: #f15c22;
				}
			}
		}

		.display-icons {
			display: flex;
			align-items: center;

			svg {
				color: #741e00;
				transition: all 0.2s ease-in;
				cursor: pointer;

				&:hover {
					color: #f15c22;
				}
			}
		}
	}

	.feed-container {
		margin-top: 20px;
	}
`;
