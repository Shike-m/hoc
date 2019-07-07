import React, { Component,Fragment } from 'react';

class Tabs extends Component{
    render() {
        const { children } = this.props;
        return (
            <ul>
                {
                    React.Children.map(children, (child, index) => {
                return <li index={index}
                        onClick={this.props.onClick}
                >
                    {child}
                        </li>
                    })
                }
            </ul>
        )
    }
}
const Tab = ({ children }) => {
  return  <Fragment>{children}</Fragment>
};
export default Tabs;
export { Tab };