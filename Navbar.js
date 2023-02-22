import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class NAvbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Dexze</h1>

        <div className="menu-icons" onClick={this.handleclick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu "}>
          {MenuItems.map((items, index) => {
            return (
              <li key={index}>
                <Link className={items.cName} to={items.url}>
                  <i className={items.icon}></i>
                  {items.title}
                </Link>
              </li>
            );
          })}
          <button>sign up</button>
          {/*<li>
            <a href="/">
              <i className="fa-solid fa-house-chimney"></i>Home
            </a>
          </li>*/}
        </ul>
      </nav>
    );
  }
}

export default NAvbar;
