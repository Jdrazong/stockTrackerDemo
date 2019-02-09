import React from 'react';
import loader from 'icons/loader.png';

const withLoader = WrappedComponent => ({ isLoading, ...props }) => (
    <div>
        <WrappedComponent {...props} />
        {isLoading ? (
            <div className="loader-container">
                <img className="loader" src={loader} alt="loader" />
                <WrappedComponent {...props} />
            </div>
        ) : null}
    </div>
);

export default withLoader;
