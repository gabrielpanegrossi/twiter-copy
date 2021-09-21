import styled from 'styled-components';

export const AccountContent = styled.div`
	width: 100%;
	padding: 40px 20px;
	margin: 0 auto;

	background: rgba(0, 0, 0, 0.5);
	border: 1px solid rgba(0, 0, 0, 0.2);

	.logo {
		width: 50px;
	}

	form {
		display: flex;
		flex-direction: column;

		gap: 10px;

		h2,
		p {
			cursor: default;
		}

		a,
		p {
			color: white;
		}

		a,
		button {
			cursor: pointer;
		}

		h2 {
			text-align: left;
			color: white;
			margin-top: 0;
		}

		& > div {
			width: 100%;

			input {
				height: 35px;
				width: 100%;
				margin: 5px 0;

				outline: none;

				&:focus {
					outline: 1px solid #f15c22;
				}
			}

			label {
				width: 100%;

				color: #eaa6a1;
			}
		}

		p {
			margin: 0;

			text-align: center;
		}

		a {
			margin-bottom: 20px;
			width: fit-content;

			transition: all 0.2s ease-in;
			text-decoration: none;

			&:hover {
				text-decoration: underline;
				color: #f15c22;
			}
		}

		button {
			height: 45px;
			width: 80%;
			max-width: 200px;
			margin: 0 auto;

			border-radius: 25px;
			border: 1px solid rgba(0, 0, 0, 0.2);
			background: white;
			color: black;
			font-weight: bold;
			transition: all 0.2s ease-out;

			&:hover {
				color: white;
				background: #f15c22;
			}
		}
	}
`;
