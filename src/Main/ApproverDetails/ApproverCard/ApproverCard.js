import React from 'react';
import './ApproverCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ApproverCard(props) {
  const data = props.data;
  const lastUpdateDate = new Date(data.last_notified_time).toDateString();
  return (
    <div className="approver-card">
      <div className="approver-card__bullet"></div>
      <img className="approver-card__img" src={data.approver.profile_picture} alt={data.approver.first_name} height="24px" width="24px"></img>
      <div>
        <div className="approver-card__identity">
          <span className="approver-card__name">{data.approver.first_name}&nbsp;{data.approver.last_name}</span>
          <span className="approver-card__email">({data.approver.email})</span>
        </div>
        <div className="approver-card__info">
          <span className="approver-card__status">{data.status}</span>
          <span className="approver-card__date">{lastUpdateDate}</span>
        </div>
      </div>
      <div className="approver-card__status-indentifier">
        {
          data.status === "accepted" ? <FontAwesomeIcon icon="check-circle" className="approver-card__status--accepted"/> : <div className="approver-card__status--pending"></div>
        }
      </div>
    </div>
  );
}

export default ApproverCard;
