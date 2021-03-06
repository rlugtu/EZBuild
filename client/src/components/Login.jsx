import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleLoginSubmit=this.handleLoginSubmit.bind(this);
    }


    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }

    // handleLoginSubmit(e,data){
    //     e.preventDefault();
    //     fetch('/api/auth/login',{
    //         method:'POST',
    //         headers:{
    //             'Content-Type':'application/json',
    //         },
    //         credentials:'include',
    //         body:JSON.stringify(data)
    //     }).then(res=>res.json())
    //       .then(res=>{
    //           this.setState({
    //               auth:res.auth,
    //               user:res.data.user,
    //           })

    //       }).catch(err => console.log(err));
    // }

    render() {
        return (
            <div className="loginContainer">
                <h1 className="loginBanner">Please Login</h1>
                <form className="loginForm" onSubmit={(e) => this.props.handleLoginSubmit(e, this.state)}>
                    <input type="text" name='username' value={this.state.username} placeholder='Username' onChange={this.handleInputChange} />
                    <input type="password" name='password' value={this.state.password} placeholder='Password' onChange={this.handleInputChange} />
                    <input type="submit" value='Login' />
                </form>
            </div>

        )
    }
}
export default Login;