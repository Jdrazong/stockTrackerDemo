import { connect } from 'react-redux';
import CompaniesList from './CompaniesList';

const mapStateToProps = state => ({
    savedCompanies: state.savedCompanies.savedCompanies
});

export default connect(
    mapStateToProps
)(CompaniesList);
