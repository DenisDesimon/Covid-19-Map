import React from "react";

export default class Totalrecovered extends React.Component {




  render() {
    if (this.props.data.loading_total) {
      return <div className="total-nums text-center text-success">0</div>;

    }
    return (
      <div className="total-nums text-center text-success">{this.props.data.total.recovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}</div>
    );
  }
}
