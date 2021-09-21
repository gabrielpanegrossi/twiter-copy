import styled from 'styled-components';

export const HomeContainer = styled.section`
	width: 100%;
	height: 85vh;
	max-height: 85vh;

	background: url('./assets/wp4222394.jpg');
	background-repeat: no-repeat;
`;

export const HomeContent = styled.div`
	display: flex;
	justify-content: space-between;

	height: 100%;
	width: 90%;
	max-width: 980px;
	margin: 0 auto;

	.image-handler {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 45%;
		height: 100%;

		img {
			width: 100%;
			max-width: 400px;
		}
	}

	.form-handler {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 45%;
		height: 100%;

		& > div {
			max-width: 400px;
		}
	}
`;
