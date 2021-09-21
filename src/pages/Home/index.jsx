import * as S from './style';

import CreateAccountForm from '../../component/CreateAccountForm';

export default function Home() {
	return (
		<>
			<S.HomeContainer>
				<S.HomeContent>
					<div className="image-handler">
						<img src="/assets/globe.png" alt="An orange globe" />
					</div>
					<div className="form-handler">
						<CreateAccountForm />
					</div>
				</S.HomeContent>
			</S.HomeContainer>
		</>
	);
}
