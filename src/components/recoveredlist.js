import React from "react";

export default class Recoveredlist extends React.Component {


  render() {
    if (this.props.data.loading) {
      return <div>
        {this.props.data.msg_loading[0]}
      </div>;
    }
    return (
      <div>
        {this.props.data.country.sort(function(a, b){return b.recovered - a.recovered}).map(country => (
           <li key={country.countryregion} className="nums-list list-group-item bg-dark"><span className="text-success">{country.recovered.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}</span> {country.countryregion}</li>
        ))}
      </div>
    );
  }
}