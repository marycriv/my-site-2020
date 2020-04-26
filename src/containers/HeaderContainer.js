import React from 'react';
import HeaderTabs from './../components/HeaderTabs';
import HeaderTitle from './../components/HeaderTitle';

export default function HeaderContainer(props) {
    return (
        <div>
            <HeaderTitle />
            <HeaderTabs changeView={props.changeView} />
        </div>
    )
}