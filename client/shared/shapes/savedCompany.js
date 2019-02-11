import PropTypes from 'prop-types';

export default PropTypes.shape({
    change: PropTypes.string.isRequired,
    changePercent: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    latestTradingDay: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired
});
