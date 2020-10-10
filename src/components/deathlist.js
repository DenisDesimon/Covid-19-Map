import React from "react";

export default class Deathlist extends React.Component {




  render() {
    if (this.props.data.loading) {
      return <div>
        {this.props.data.msg_loading[0]}
      </div>;

    }
    return (
      <div>
        {this.props.data.country.sort(function(a, b){return b.deaths - a.deaths}).map(country => (
           <li key={country.countryregion} className="nums-list list-group-item bg-dark"><span className="text-danger">{country.deaths.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}</span> {this.props.data.total_word_death_lang[0]} {country.countryregion}</li>
        ))}
      </div>
    );
  }
}