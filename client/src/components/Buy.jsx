import React,{Component} from 'react'

class Buy extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            cardNumber:'',
            cvc:'',
            zip:"",
        }
        this.handleInputChange=this.handleInputChange.bind(this);
    }

    handleInputChange(e){
        handleInputChange(e) {
            const name = e.target.name;
            const value = e.target.value;
            this.setState({
                [name]: value,
            })
        }
    }
    render(){
        return(
            <div>
                <form>
                    <input type="text" name='name' value={this.state.name} placeholder='Name' onChange={this.handleInputChange} />
                    <input type="nubmer" name='cardNumber' value={this.state.cardNumber} placeholder='CardNumber' onChange={this.handleInputChange} />
                    <input type="nubmer" name='zip' value={this.state.zip} placeholder='ZipCode' onChange={this.handleInputChange} />
                    <input type="nubmer" name='cvc' value={this.state.cvc} placeholder='CVC' onChange={this.handleInputChange} /> 
                </form>
            </div>
        )
    }
}