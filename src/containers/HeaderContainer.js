import React from 'react';
import HeaderTabs from './../components/HeaderTabs';
import HeaderTitle from './../components/HeaderTitle';

class HeaderContainer extends React.Component {
    render(){
        return (
            <div>
                <HeaderTitle />
                <HeaderTabs />
            </div>
        )
    }
}

export default HeaderContainer;