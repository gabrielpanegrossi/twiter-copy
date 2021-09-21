import styled from 'styled-components';

export const HeaderContainer = styled.header`
	width: 100%;
	height: 15vh;
	max-height: 15vh;
	background: white;
`;

export const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 90%;
	max-width: 980px;
	margin: 0 auto;

	a,
	span {
		color: #741e00;
	}

	.header-menu {
		display: flex;
		gap: 10px;
	}

	.logo {
		width: 30px;
		object-fit: contain;
	}

	h1 {
		a {
			display: flex;
			gap: 10px;

			cursor: pointer;

			color: #f15c22;
			text-decoration: none;
		}
	}

	nav > a {
		text-decoration: none;
		transition: all 0.2s ease-in;

		&:hover {
			text-decoration: underline;
			color: #f15c22;
		}
	}

	span {
		cursor: default;
	}
`;
