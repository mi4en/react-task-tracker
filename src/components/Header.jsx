import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
	const location = useLocation();

	return (
		<header className='header'>
			<h1>{title}</h1>
			{location.pathname === '/' && (
				<Button
					onClick={onAdd}
					bgColor={showAdd ? 'blue' : 'green'}
					label={showAdd ? 'Close' : 'Add'}
				/>
			)}
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
