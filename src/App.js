import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {

  componentDidMount(){
    getData();
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;

const getData = async () => {
  const apiUrl = 'https://demo.kimai.org/api/ping'
  const user_name = 'susan_super'
  const user_password = 'api_kitten'
  let headers = {
    "X-AUTH-USER":user_name,
    "X-AUTH-TOKEN":user_password   
  }

  return new Promise((resolve, reject) => {
    axios
      .get(apiUrl, {
        headers: headers
      })
      .then(response => {
      debugger;
        resolve(response);
      });
  });
};