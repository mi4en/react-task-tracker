import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
	return (
		<header className="header">
			<h1>{title}</h1>
			<Button onClick={onAdd} bgColor={showAdd ? 'blue' : 'green'} label={showAdd ? 'Close' : 'Add'} />
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
