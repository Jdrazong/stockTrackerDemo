import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { components } from 'shared';
import CompaniesListContainer from './CompaniesListContainer';

const { Content } = components;

class SavedCompanies extends Component {
    componentDidMount() {
        const { fetchSavedCompanies } = this.props;
        fetchSavedCompanies();
    }

    render() {
        return (
            <Content>
                <CompaniesListContainer />
            </Content>
        );
    }
}

SavedCompanies.propTypes = {
    fetchSavedCompanies: PropTypes.func.isRequired
};

export default SavedCompanies;
