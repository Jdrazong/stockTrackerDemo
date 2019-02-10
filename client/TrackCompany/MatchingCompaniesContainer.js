import { connect } from 'react-redux';
import { compose } from 'redux';
import { hocs } from 'shared';
import MatchingCompanies from './MatchingCompanies';

const { withLoader } = hocs;

const mapStateToProps = state => ({
    isLoading: state.trackCompany.isFetchingCompanies,
    matchingCompanies: state.trackCompany.matchingCompanies
});

export default compose(
    connect(
        mapStateToProps
    ),
    withLoader
)(MatchingCompanies);
