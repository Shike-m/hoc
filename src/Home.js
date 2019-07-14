import React from 'react';
import SideBar from './components/SideBar';
import DisplayItems from './components/DisplayItems';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div>
                    <SideBar />
                    <DisplayItems />
                </div>
                <footer />
            </React.Fragment>
        )
    }
}

export default Home;