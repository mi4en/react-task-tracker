import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title }) => {
	const onClick = () => console.log('Prop Click');

	return (
		<header className="header">
			<h1>{title}</h1>
			<Button onClick={onClick} bgColor="green" label="Add" />
		</header>
	);
};

Header.defaultProps = {
	title: 'Task Tracker',
};

Header.propTypes = {
	title: PropTypes.string.isRequired,
};

// In component CSS styling
// const headerStyle = {
// 	color: 'red',
// 	padding: '10px',
// };

export default Header;
