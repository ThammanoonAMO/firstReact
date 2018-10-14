import React, { Component } from 'react';
import logo from './keyword.svg';
import './App.css';
import user from'./user.png';
import setting from'./settings.png';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
        </header> 

        <body>
          <div class="email">blackpink.rose@gmail.com</div>
          <div class="imgUser"><img src={user} width="50" height="50" /></div>
          <div class="imgSetting"><a href="default.asp" target="_blank">
            <img src={setting} width="50" height="50" /></a></div>
          <a href="default.asp" target="_blank"><button class="button">write code</button></a>
          <a href="default.asp" target="_blank"><button class="button button1">LOG OUT</button></a>

          <div class="box"><div class="header1">Hello world</div>
          This text is the actual content of the box. We have added a 25px padding, 25px margin and a 25px green border. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          <div class="by">by: blackpink.rose@gmail.com</div>
          <a href="default.asp" target="_blank"><button class="button button2">read more >> </button></a>
          </div>

          <div class="pagination">
              <a href="#">&laquo;</a>
              <a href="#">1</a>
              <a href="#" class="active">2</a>
              <a href="#">3</a>
              <a href="#">4</a>
              <a href="#">5</a>
              <a href="#">6</a>
              <a href="#">&raquo;</a>
              </div>          
          </body>          
      </div>
    );
  }
}

export default App;
