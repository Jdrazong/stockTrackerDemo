import { connect } from 'react-redux';
import { compose } from 'redux';
import { components, messages } from 'shared';
import actions from './actions';

const { Button } = components;
const { fetchCompanies } = actions;

const mapStateToProps = state => ({
    companyName: state.trackCompany.companyName,
    className: 'track-company-button',
    text: messages.trackCompany.trackCompanyButton,
    isPrimary: true,
    shouldRender: Boolean(state.trackCompany.companyName)
});

const mapDispatchToProps = dispatch => ({
    fetchCompanies: compose(
        dispatch,
        fetchCompanies
    )
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    clickHandler: () => dispatchProps.fetchCompanies({ name: stateProps.companyName })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Button);
