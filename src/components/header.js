import React, { Component } from "react";
import './header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <div class="wrapper">
            <div class="headline">
                <h1 id="pageHeader">Режиссеры кино Беларуси</h1>
                <select id="selectLanguage">
                    <option value="russian">Русский</option>
                    <option value="belarus">Беларускі</option>
                    <option value="english">English</option>
                </select>
            </div>
            <div class="menu">
                <div class="logo">
                    <img src="img/gerb.png" width="90" height="90" alt="logo" />
                </div>
                <nav>
                    <div class="nav-button"><a id="linkToMain" href="index.html">Главная</a></div>
                    <div class="nav-button"><a id="linkToProducers" href="producers.html">Режиссеры</a></div>
                </nav>
            </div>
        </div>
    </header>
    );
  }
}
export default Header
