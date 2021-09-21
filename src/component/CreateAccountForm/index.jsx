import { Link } from 'react-router-dom';
import { useState } from 'react';
import { signUp } from '../../hooks/db';

import * as S from './style';

export default function CreateAccountForm() {
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState(false);
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState(false);
	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState(false);

	function validateEmail(email) {
		const re =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	function getNameValue(e) {
		setName(e.target.value);
		setNameError(false);
	}

	function getEmailValue(e) {
		setEmail(e.target.value);

		if (validateEmail(email)) {
			setEmailError(false);
		}
	}

	function getPasswordValue(e) {
		setPassword(e.target.value);
		if (e.target.value.length >= 6) {
			setPasswordError(false);
		}
	}

	function checkInputedValues() {
		const errors = [];

		if (name.length < 1) {
			setNameError(true);
			errors.push(true);
		}

		if (!validateEmail(email)) {
			setEmailError(true);
			errors.push(true);
		}

		if (password < 6) {
			setPasswordError(true);
			errors.push(true);
		}

		return errors;
	}

	function successCallback() {
		alert('Usuario cadastrado com sucesso!');
	}

	function errorCallback(error) {
		if (error) {
			alert(error);
		}
	}

	function CreateAccountSubmission(e) {
		e.preventDefault();

		const errors = checkInputedValues();

		if (errors.length === 0) {
			signUp(name, email, password, successCallback, errorCallback);
		}
	}

	return (
		<S.AccountContent>
			<form onSubmit={CreateAccountSubmission}>
				<h2>Create account</h2>
				<div>
					<input placeholder="Name" onChange={getNameValue} />
					{nameError ? (
						<label>Por favor, preencha esse campo corretamente.</label>
					) : (
						''
					)}
				</div>
				<div>
					<input placeholder="E-mail" onChange={getEmailValue} />
					{emailError ? (
						<label>Por favor, preencha esse campo corretamente.</label>
					) : (
						''
					)}
				</div>
				<div>
					<input
						type="password"
						placeholder="Password"
						onChange={getPasswordValue}
					/>
					{passwordError ? (
						<label>
							Por favor, preencha esse campo com pelo menos 6 digitos.
						</label>
					) : (
						''
					)}
				</div>
				<Link to="/login" className="create-account">
					I already have an account
				</Link>
				<button>Submit</button>
			</form>
		</S.AccountContent>
	);
}
