import React from 'react';
import './AppInfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AppInfo() {
  return (
    <p className="app-info">
      <span className="app-info__title">
        <FontAwesomeIcon icon="lock" />
        <span className="app-info__msg">Security Message</span>
      </span>
      <span className="app-info__desc">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</span>
    </p>
  );
}

export default AppInfo;
