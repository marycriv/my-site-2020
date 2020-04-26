import React from 'react';
import HeaderTabs from './../components/HeaderTabs';
import HeaderTitle from './../components/HeaderTitle';

export default function HeaderContainer() {
    return (
        <div>
            <HeaderTitle />
            <HeaderTabs changeView={this.props.changeView} />
        </div>
    )
}