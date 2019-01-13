import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand font-weight-light" alt="">
          <img src="/img/logo.svg" width="30" height="30" alt="BH" className="mr-2"/>
          bradley harker
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className={this.props.active === 0 ? 'nav-link accent-text' : 'nav-link secondary-text'}>home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={this.props.active === 1 ? 'nav-link accent-text' : 'nav-link secondary-text'}>about</Link>
            </li>
            <li className="nav-item">
              <Link to="/webdesign" className={this.props.active === 2 ? 'nav-link accent-text' : 'nav-link secondary-text'}>web design</Link>
            </li>
            <li className="nav-item">
              <Link to="/graphicdesign" className={this.props.active === 3 ? 'nav-link accent-text' : 'nav-link secondary-text'}>graphic design</Link>
            </li>
            <li className="nav-item">
              <Link to="/photography" className={this.props.active === 4 ? 'nav-link accent-text' : 'nav-link secondary-text'}>photography</Link>
            </li>
            <li className="nav-item">
              <Link to="/machine-learning" className={this.props.active === 5 ? 'nav-link accent-text' : 'nav-link secondary-text'}>machine learning</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
