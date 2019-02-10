import PropTypes from 'prop-types';

export default PropTypes.shape({
    '1. symbol': PropTypes.string.isRequired,
    '2. name': PropTypes.string.isRequired,
    '3. type': PropTypes.string.isRequired,
    '4. region': PropTypes.string.isRequired,
    '5. marketOpen': PropTypes.string.isRequired,
    '6. marketClose': PropTypes.string.isRequired,
    '7. timezone': PropTypes.string.isRequired,
    '8. currency': PropTypes.string.isRequired,
    '9. matchScore': PropTypes.string.isRequired
});
