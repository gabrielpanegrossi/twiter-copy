import CreateAccountForm from '../../component/CreateAccountForm';

import * as S from './style';

export default function CreateAccount() {
	return (
		<S.AccountContainer>
			<S.AccountContent>
				<CreateAccountForm />
			</S.AccountContent>
		</S.AccountContainer>
	);
}
