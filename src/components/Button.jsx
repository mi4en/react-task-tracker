import PropTypes from 'prop-types';

const Button = ({ bgColor, label, onClick }) => {
	return (
		<button
			onClick={onClick}
			style={{ backgroundColor: bgColor }}
			className='btn'
		>
			{label}
		</button>
	);
};

Button.defaultProps = {
	bgColor: 'steelblue',
	onClick: () => console.log('Default Click'),
};

Button.propTypes = {
	label: PropTypes.string,
	bgColor: PropTypes.string,
	onClick: PropTypes.func,
};

export default Button;
