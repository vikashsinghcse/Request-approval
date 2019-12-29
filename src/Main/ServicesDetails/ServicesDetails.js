import React from 'react';
import './ServicesDetails.css';

function ServicesDetails(props) {
  const data = props.data;
  return (
    <div className="request__header">
      <img src={data.service.logo} alt={data.service.name} height="36px" width="36px" />
      <span className="request__header-title">Request for {data.service.name} (#{data.id})</span>
    </div>
  );
}

export default ServicesDetails;
