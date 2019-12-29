import React from 'react';
import './RequestDetails.css';

function RequestDetails(props) {
  const data = props.data;
  return (
    <div className="request__tabular">
      <div className="request__tabular-row">
        <div className="request__tabular-header">Requested by</div>
        <div className="request__tabular-data">
          <div className="request__requested-by">
            <img src={data.requested_by.profile_picture} alt={data.requested_by.first_name} height="24px" width="24px"></img>
            <span>
              {data.requested_by.first_name}&nbsp;{data.requested_by.last_name}
            </span>
          </div>
        </div>
      </div>
      <div className="request__tabular-row">
        <div className="request__tabular-header">Cost</div>
        <div className="request__tabular-data">{data.cost}</div>
      </div>
      <div className="request__tabular-row">
        <div className="request__tabular-header">Renewal Frequency</div>
        <div className="request__tabular-data">{data.renewal_frequency_in_months}</div>
      </div>
      <div className="request__tabular-row">
        <div className="request__tabular-header">Expense Account</div>
        <div className="request__tabular-data">{data.expense_account}</div>
      </div>
      <div className="request__tabular-row">
        <div className="request__tabular-header">File</div>
        <div className="request__tabular-data">{data.files[0]}</div>
      </div>
      <div className="request__tabular-row">
        <div className="request__tabular-header">Description</div>
        <div className="request__tabular-data">{data.description}</div>
      </div>
    </div>
  );
}

export default RequestDetails;
