import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';

import logo from '../../assets/logo.png';
import UserIsLoggedContext from '../../context/tweetContext copy';
import { signOut } from '../../hooks/db';

import * as S from './style';

export default function Header() {
	const history = useHistory();
	const { userIsLoged, setUserIsLoged } = useContext(UserIsLoggedContext);

	function signOutSucess() {
		setUserIsLoged(false);
		history.push('/');
	}

	function userSignOut() {
		signOut(signOutSucess);
	}

	return (
		<S.HeaderContainer>
			<S.HeaderContent>
				<h1>
					<Link to="/">
						<img src={logo} className="logo" alt="Logo do Twi-Twi" />
						Twi-Twi
					</Link>
				</h1>
				<nav className="header-menu">
					{userIsLoged ? (
						<button onClick={userSignOut}>Sair</button>
					) : (
						<>
							<Link to="/login">Login</Link>
							<span>|</span>
							<Link to="/create-account">New user</Link>
						</>
					)}
				</nav>
			</S.HeaderContent>
		</S.HeaderContainer>
	);
}
