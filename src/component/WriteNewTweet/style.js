import styled from 'styled-components';

export const WriteNewTweetContainer = styled.section`
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100vh;

	background: rgba(0, 0, 0, 0.2);
`;

export const WriteNewTweetContent = styled.div`
	display: flex;
	flex-direction: column;

	width: 80%;
	max-width: 400px;
	margin: 0 auto;
	padding-bottom: 10px;
	gap: 10px;

	background: white;
	border-radius: 5px;

	textarea {
		height: 200px;
		padding: 10px;

		border: none;
		outline: none;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		border-radius: 5px;

		&:focus {
			border-bottom: 1px solid rgba(0, 0, 0, 0.2);
			border-radius: 5px;
		}
	}

	.new-tweet-buttons {
		display: flex;
		justify-content: right;
		align-items: center;

		padding: 0 10px;
		gap: 10px;

		.confirm-new-tweet {
			height: 30px;
			width: 100px;

			color: white;
			background: #f15c22;
			border: 1px solid #f15c22;
			border-radius: 5px;
			transition: all 0.3s ease-in;

			cursor: pointer;

			&:hover {
				background: #f04c21;
				border: 1px solid #f04c21;
			}
		}

		svg {
			font-size: 30px;
			cursor: pointer;
			color: red;
			transition: all 0.3s ease-in;

			&:hover {
				color: #d63333;
			}
		}
	}
`;
