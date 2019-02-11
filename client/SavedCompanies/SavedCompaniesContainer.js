import { connect } from 'react-redux';
import { compose } from 'redux';
import { hocs } from 'shared';
import actions from './actions';
import SavedCompanies from './SavedCompanies';

const { withLoader } = hocs;
const { fetchSavedCompanies } = actions;

const mapStateToProps = state => ({
    isLoading: state.savedCompanies.isDeletingCompany || state.savedCompanies.isFetchingSavedCompanies
});

const mapDispatchToProps = dispatch => ({
    fetchSavedCompanies: compose(dispatch, fetchSavedCompanies)
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withLoader
)(SavedCompanies);
