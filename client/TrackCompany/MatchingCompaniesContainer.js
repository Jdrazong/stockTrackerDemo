import { connect } from 'react-redux';
import MatchingCompanies from './MatchingCompanies';

const mapStateToProps = state => ({
    matchingCompanies: state.trackCompany.matchingCompanies
});

export default connect(
    mapStateToProps
)(MatchingCompanies);
