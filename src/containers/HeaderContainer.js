import React from 'react';
import HeaderTabs from './../components/HeaderTabs';
import HeaderTitle from './../components/HeaderTitle';

class HeaderContainer extends React.Component {
    render(){
        return (
            <div>
                <HeaderTitle />
                <HeaderTabs changeView={this.props.changeView} />
            </div>
        )
    }
}

export default HeaderContainer;