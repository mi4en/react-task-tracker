import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<p>Copiright &copy; 2021</p>
			<Link to="/about">About</Link>
		</footer>
	);
};

export default Footer;
