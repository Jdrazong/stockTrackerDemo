import { connect } from 'react-redux';
import { components } from 'shared';
import actions from './actions';

const {
    setCompanyName
} = actions;

const { Input } = components;

const mapDispatchToProps = dispatch => ({
    changeHandler: event => dispatch(setCompanyName({ companyName: event.target.value }))
});

const mapStateToProps = state => ({
    className: 'track-company-input',
    value: state.trackCompany.companyName
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);
