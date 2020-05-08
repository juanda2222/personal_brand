import React from 'react';

import './MenuButton.css';

const menuButton = props => (
    <div className="toggle_button">{/* it hides if the size is to big */}
        <button className="toggle-button" onClick={props.click}>
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
        </button>
    </div>
);

export default menuButton;