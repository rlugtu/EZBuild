import React,{Component} from 'react';

class Register extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:'',
            email:'',
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleRegisterSubmit=this.handleRegisterSubmit.bind(this);
    }
    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
          [name]: value,
        });
      }
    handleRegisterSubmit(e,data){
        e.preventDefault();
        fetch('/api/auth/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            credentials:'include',
            body:JSON.stringify(data)
        }).then(res=>res.json())
          .then(res=>{
              this.setState({
                  auth:res.auth,
                  user:res.data.user,
                  email:res.data.email,
              })
          }).catch(err => console.log(err));
    }
    render(){
        return(
            <div>
              <form onSubmit={(e)=>this.handleRegisterSubmit(e,this.state)}>
                  <input type="text" name='username' value={this.state.username} placeholder='Username' onChange={this.handleInputChange} />
                  <input type="password" name='password' value={this.state.password} placeholder='Password' onChange={this.handleInputChange} />
                  <input type="email" name='email' value={this.state.email} placeholder='Email' onChange={this.handleInputChange} />
                  <input type="submit" value="Register"/>
                </form>  
            </div>
            
        )
    }
}
export default Register;