
import React, {Component} from 'react';
import Fuse from 'fuse.js';
import PeopleJSON from './api/10000.json';
import SearchDisplay from './SearchDisplay';
import _ from 'lodash';

const options = {
  shouldSort: true,
  threshold: 0.3,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: [
    "participant_name"
    // "client_id",
    // "employee_id",
    // "account_number",
    // "plan_admin"
  ]
};

export default class SearchContainer extends Component{
  constructor(props) {
    super(props);
    this.state = {
      people: PeopleJSON,
      peopleFiltered: [],
      term: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  fuseResults(term) {
    const fuse = new Fuse(this.state.people, options);
    const filteredResults = fuse
      .search(term)
      .slice(0, 11);
    this.setState({ peopleFiltered: filteredResults });
  }

  handleChange(e) {
    const term = e.target.value;
    this.setState({ term });
    _.debounce(() => this.fuseResults(term), 400)();
  }

  handleClick(e) {
    //const selectedCard = e.target;
    //console.log(selectedCard);
  }

  render() {
    return <SearchDisplay peopleFiltered={this.state.peopleFiltered} handleClickCallback={this.handleClick} handleChangeCallback={this.handleChange}/>;
  }
}
