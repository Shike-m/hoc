import React from 'react';

class DisplayItems extends React.Component {
    render() {
        const { movies } = this.props;
        return (
            <div>
                {
                    movies.map((item) => {
                        return <span>{item.title}</span>
                    })
                }
            </div>
        )
    }
}

export default DisplayItems;