import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './style.scss'
import logo,
{
  ReactComponent as ReactLogo
} from '../../logo.svg'

export default class TopNav extends Component {
  render() {
    return (
      <div className="navbar">
        <Link
          to="/home"
        >
          <ReactLogo
            style={{
              top: 0,
              position: "relative",
              height: '10vh',
              width: '10vw',
            }}
          />
        </Link>
        <label>
          <input type='checkbox' />
          <span class="menu">
            <span class="hamburger"></span>
          </span>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </label>
      </div>
    )
  }
}
