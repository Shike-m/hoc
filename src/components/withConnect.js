import React from 'react';

const withConnect = (url,WrappedComponent) => {
    return class {
        render() {
            return (
                <div></div>
            )
        }
    }
}

export default withConnect;