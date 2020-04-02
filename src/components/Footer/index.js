import React from 'react';
import style from './style.module.css';
import Logo from "../../photo/logo.png"

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className={style.blockFooter}>
          <span>365 Freebies. 007/365</span>
            <a href="/#">
              <img src={Logo} alt="logotip" />
            </a>
           <a href="mailto:@anakarenart">@anakarenart</a>
        </div>
      </footer>
    )
  }
}