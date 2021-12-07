import React , {useState} from 'react';
import './Login.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

 function Login({user}){

    const [userEmail , setUserName] = useState();
    const [userPassword , setPassword] = useState();
    console.log(user)
    const loginHandler = (event)=>{
        event.preventDefault();
         /* 
        TODO
        - add validation: show invalid input error
        - add a mock file
        - call checkLogin method
          - call login api
        - success: store data in context api
        - fail: show error
        */


    }
    return(
        <div className="login-wrapper">
        <form onSubmit = {loginHandler}>
            <label>
                <p>Username</p>
                <input type="email" onChange={e => setUserName(e.target.value)}></input>
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
            
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        user:state.login.user
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(Login);