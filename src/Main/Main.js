import React from 'react';
import ServicesDetails from './ServicesDetails/ServicesDetails';
import RequestDetails from './RequestDetails/RequestDetails';
import ApproverDetails from './ApproverDetails/ApproverDetails';
import './Main.css';
import dataFile from '../request1.json';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servicesData: {},
      requestData: {},
      approverData: []
    }
    this.setServicesDetails = this.setServicesDetails.bind(this);
    this.setRequestDetails = this.setRequestDetails.bind(this);
    this.setApproverData = this.setApproverData.bind(this);
    this.approveRequest = this.approveRequest.bind(this);
  }

  componentWillMount() {
    this.setServicesDetails(dataFile);
    this.setRequestDetails(dataFile);
    this.setApproverData(dataFile);
  }

  setServicesDetails(data) {
    const { service, id } = data;
    this.setState({servicesData: { service, id }} );
  }

  setRequestDetails(data) {
    const { service, requested_by, renewal_frequency_in_months, description, expense_account, cost, files, id } = data;
    this.setState({requestData: { service, requested_by, renewal_frequency_in_months, description, expense_account, cost, files, id }} );
  }

  setApproverData(data) {
    const { approvers } = data;
    this.setState({approverData: { approvers }});
  }

  approveRequest() {
    /*
    ** This section will be used for approving the request.
    ** Since, there is no info of logged in user, approvals list cannot be updated.
    */
  }

  render() {
    return (
      <main className="approval-main">
        <ServicesDetails data={this.state.servicesData} />
        <div className="approval-main__request">
          <RequestDetails data={this.state.requestData} />
          <ApproverDetails data={this.state.approverData} />
        </div>
        <div className="approval-main__actions">
          <button className="approval-main__actions-btn approval-main__actions-btn--approve" onClick={this.approveRequest}>Approve</button>
          <button className="approval-main__actions-btn approval-main__actions-btn--deny">Deny</button>
        </div>
      </main>
    );
  }
}

export default Main;
