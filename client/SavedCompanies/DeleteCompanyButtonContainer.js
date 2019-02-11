import { connect } from 'react-redux';
import { compose } from 'redux';
import { components, messages } from 'shared';
import actions from './actions';

const { Button } = components;
const {
    deleteCompany,
    fetchSavedCompanies
} = actions;

const mapStateToProps = (state, ownProps) => ({
    symbol: ownProps.symbol,
    className: 'saved-companies-delete-company-button',
    text: messages.savedCompanies.deleteCompanyButton,
    isPrimary: true,
    shouldRender: true
});

const mapDispatchToProps = dispatch => ({
    deleteCompany: compose(
        dispatch,
        deleteCompany
    ),
    fetchSavedCompanies: compose(
        dispatch,
        fetchSavedCompanies
    )
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    clickHandler: () => dispatchProps.deleteCompany({ symbol: stateProps.symbol }).then(dispatchProps.fetchSavedCompanies())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Button);
