import React from 'react';
import './ApproverDetails.css';
import ApproverCard from './ApproverCard/ApproverCard';

function ApproverDetails(props) {
  const approvedList = props.data.approvers.filter( approver => approver.status === 'accepted');
  const pendingList = props.data.approvers.filter( approver => approver.status !== 'accepted');
  return (
    <div className="approver-details">
      <section className="approver-details__section">
        <div className="approver-details__section-header">Approved</div>
        {
          approvedList.map( (approver, index) => {
            return <ApproverCard data={approver} key={index}/>
          })
        }
      </section>
      <hr className="approver-details__section-divider" />
      <section className="approver-details__section">
        <div className="approver-details__section-header">Pending</div>
        {
          pendingList.map( (approver, index) => {
            return <ApproverCard data={approver} key={index}/>
          })
        }
      </section>
    </div>
  );
}

export default ApproverDetails;
