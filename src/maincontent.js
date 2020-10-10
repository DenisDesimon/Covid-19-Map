import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Deathlist from "./components/deathlist";
import Confirmedlist from "./components/confirmedlist";
import Recoveredlist from "./components/recoveredlist";
import Mapcomp from "./components/mapcomp";
import Totalconfirmed from "./components/totalconfirmed";
import Totalrecovered from "./components/totalrecovered";
import Totaldeath from "./components/totaldeath";
import './index.css';

class Maincontent extends React.Component {
  constructor(props){
    super(props);
    this.child = React.createRef();
    this.state = {
    loading: true,
    loading_total : true,
    country: [],
    total: [],
    lang_ru: false,

    total_confirmed_lang: ["Total Confirmed", "Всего инфицированных"],
    total_deaths_lang: ["Total Deaths", "Всего смертей"],
    total_recovered_lang: ["Total Recovered", "Всего выздоровевших"],
    total_confirmed_list_lang: ["Confirmed Cases by Country", "Подтвержденные случаи по странам"],
    total_regions_lang: ["Total Regions", "Всего регионов"],
    total_word_death_lang: ["deaths", "смертей"],
    main_header_lang: ["Ru", "En"],
    msg_loading: ["loading...", "Загружается..."],


  };
     this.handleClick = this.handleClick.bind(this);
     this.change_language = this.change_language.bind(this);
    var lang;

    if (navigator.languages && navigator.languages.length) {
    // latest versions of Chrome and Firefox set this correctly
    lang = navigator.languages[0]
  } else if (navigator.userLanguage) {
    // IE only
    lang = navigator.userLanguage
  } else {
    // latest versions of Chrome, Firefox, and Safari set this correctly
    lang = navigator.language
  }

  if(lang[0] + lang[1] === "ru"){
      this.change_language();
  }
  }
  change_language(){
    var temp = this.swap(this.state.total_confirmed_lang);
    this.setState({total_confirmed_lang: temp});
    temp = this.swap(this.state.total_deaths_lang);
    this.setState({total_deaths_lang: temp});
    temp = this.swap(this.state.total_recovered_lang);
    this.setState({total_recovered_lang: temp});
    temp = this.swap(this.state.total_confirmed_list_lang);
    this.setState({total_confirmed_list_lang: temp});
    temp = this.swap(this.state.total_regions_lang);
    this.setState({total_regions_lang: temp});
    temp = this.swap(this.state.total_word_death_lang);
    this.setState({total_word_death_lang: temp});
    temp = this.swap(this.state.main_header_lang);
    this.setState({main_header_lang: temp});
    temp = this.swap(this.state.msg_loading);
    this.setState({msg_loading: temp});
  }

  swap(a){
    var temp = a[0];
    a[0] = a[1];
    a[1] = temp;
    return a;
  }

handleClick() {
    this.change_language();
  }

  async componentDidMount() {
    var url = "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/latest?onlyCountries=true";
    var response = await fetch(url);
    var data = await response.json();
    this.setState({ country: data, loading: false });

    url = "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu/brief";
    response = await fetch(url);
    const total = await response.json();
    this.setState({ total: total, loading_total: false });


    this.child.current.circledraw(data);

  }





  render(){
  return (
    <div id="Maincontent">
      <table className="table table-xl table-dark " id="tableitm">
        <tbody>
          <tr>
            <td id="table-confirmed">
              <div className="heading-text text-center">{this.state.total_confirmed_lang[0]}</div>
              <Totalconfirmed data = {this.state}/>
            </td>
            <td rowSpan="3" colSpan="2" id="map_pic"><Mapcomp ref={this.child}/></td>
            <td className="table-right">
              <div className="heading-text text-center">{this.state.total_deaths_lang[0]}</div>
              <Totaldeath data = {this.state}/>
            </td>
            <td className="table-right">
              <div className="heading-text text-center">{this.state.total_recovered_lang[0]}</div>
              <Totalrecovered data = {this.state}/>
            </td>
          </tr>
          <tr>
            <td rowSpan="2">
              <div className="heading-text text-center">{this.state.total_confirmed_list_lang[0]}</div>
              <div className="overflow-auto confirmed-item">
                <ul className="list-group">
                  <Confirmedlist data = {this.state}/>
                </ul>
              </div>
            </td>
            <td>
              <div className="overflow-auto death-item">
                <ul className="list-group">
                   <Deathlist data = {this.state}/>
                </ul>
              </div>
            </td>
            <td>
                <div className="overflow-auto recovered-item">
                  <ul className="list-group">
                   <Recoveredlist data = {this.state}/>
                  </ul>
                </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className="heading-text text-danger text-center">{this.state.country.length.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ')}</div>
              <div className="text-center">{this.state.total_regions_lang[0]}</div>
            </td>
            <td>
              <button type="button" className="btn btn-primary btn-lg  btn-block" onClick={() => this.handleClick()}>
              {this.state.main_header_lang[0]}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
}

export default Maincontent;
