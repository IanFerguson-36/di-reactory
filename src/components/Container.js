
import API from "/utils/API";
import React, { Component } from 'react';
import { render } from "@testing-library/react";


export default class Container extends Component {
    state = {
        users: [],
        filteredUsers: [],
    };

componentDidMount() {
API.getUsers().then((res) => {
 this.setState({
     users: res.data.results,

});
console.log(this.state);
});
mappedData= (data) => {
    data.map((item) =>{
        return item.name
    });
}

}

render() {
  return (
  <div className="body">Directory Info will go here</div>
  );
}


export default Container;
