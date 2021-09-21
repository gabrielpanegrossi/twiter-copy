import { Link, useHistory } from 'react-router-dom';
import { useState, useContext } from 'react';

import { signInWithGoogle, loginWithEmailAndPassword } from '../../hooks/db';

import * as S from './style';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const history = useHistory();

	function getEmailValue(e) {
		setEmail(e.target.value);
	}

	function getPasswordValue(e) {
		setPassword(e.target.value);
	}

	const successCallback = () => {
		history.push('/feed');
	};

	function errorCallback(error) {
		if (error) {
			alert(error);
		}
	}

	function signWithGoogleAccount(e) {
		e.preventDefault();
		signInWithGoogle(successCallback, errorCallback);
	}

	async function loginAccount(e) {
		e.preventDefault();
		loginWithEmailAndPassword(
			email,
			password,
			successCallback,
			errorCallback
		).then((data) => console.log(data));
	}

	return (
		<S.LoginContainer>
			<S.LoginContent>
				<form>
					<h2>Log in to Twi-Twi</h2>
					<div>
						<input placeholder="E-mail" onChange={getEmailValue} />
					</div>
					<div>
						<input placeholder="Password" onChange={getPasswordValue} />
					</div>
					<Link to="/create-account" className="create-account">
						Create an account
					</Link>
					<button onClick={(e) => signWithGoogleAccount(e)}>
						Log in with Google
					</button>
					<p>or</p>
					<button onClick={loginAccount}>Log in</button>
				</form>
			</S.LoginContent>
		</S.LoginContainer>
	);
}
