import React from 'react';
import style from './style.module.css';

export default class Header extends React.Component {

    render(){
        return(
            <header>
                <div className={style.blockHeader}>
                    <a href="/#">{this.props.userName}</a>
                </div>
            </header>
        )
    }
}