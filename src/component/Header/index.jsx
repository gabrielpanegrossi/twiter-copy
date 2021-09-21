import * as S from './style';

import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
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
					<Link to="/login">Login</Link>
					<span>|</span>
					<Link to="/create-account">New user</Link>
				</nav>
			</S.HeaderContent>
		</S.HeaderContainer>
	);
}
