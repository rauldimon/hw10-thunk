import React from 'react';
import { fetchUser } from '../../reducers/actions';
import style from "./style.module.css";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    name: state.user.name,
    age: state.user.age,
    picture: state.user.picture
})

const mapDispatchToProps = dispatch => ({
    fetchUser: fetchUser(dispatch)
})

const Main = ({ name, age, picture, fetchUser }) => {
    return (
      <div onClick={fetchUser} className={style.profile}>
        <div className={style.profileName}>
          {name}
        </div>
        <div className={style.avatarBlock}>
          <img src={picture} alt="Avatar" />
        </div>
          <p className={style.profileInfo}>Age: {age}</p>
	  </div>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Main))