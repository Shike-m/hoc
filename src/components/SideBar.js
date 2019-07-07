import React from 'react';
import Tabs, { Tab } from './Tabs';
import styled from 'styled-components';

const Div=styled.div`
    ul:first-of-type{
       margin:0 10px 0 0;
    }
    width: 200px;
    height: 100%;
    background: #dad8d8;
    position: relative;
    left:0;
`;
class SideBar extends React.Component{
    handleClick=(e)=>{
        console.log(e.target.textContent);
    }
    render() {
        return (
            <Div>
                <Tabs onClick={this.handleClick}>
                    <Tab>Popular Movies.</Tab>
                    <Tab>popular Books.</Tab>
                    <Tab>Top Stars.</Tab>
                    <Tab>On Showing.</Tab>
                </Tabs>
            </Div>
        )
    }
}
export default SideBar;