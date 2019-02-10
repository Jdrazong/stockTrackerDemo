import { connect } from 'react-redux';
import { compose } from 'redux';
import { components, messages } from 'shared';
import actions from './actions';

const { Button } = components;
const { trackCompany } = actions;

const mapStateToProps = (state, ownProps) => ({
    companyName: state.trackCompany.companyName,
    className: 'track-company-track-button',
    text: messages.trackCompany.trackCompanyButton,
    isPrimary: true,
    shouldRender: true,
    company: ownProps.company
});

const mapDispatchToProps = dispatch => ({
    trackCompany: compose(
        dispatch,
        trackCompany
    )
});

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    clickHandler: () => dispatchProps.trackCompany({ company: stateProps.company })
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(Button);
