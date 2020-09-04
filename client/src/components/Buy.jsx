import React, { Component } from 'react'

class Buy extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            address: '',
            city: '',
            cardNumber: '',
            cvc: '',
            zip: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className="buyContainer">
                {this.props.selectedBuild &&
                    <div>
                        {this.props.selectedBuild.title ? <p>{this.props.selectedBuild.title}</p> : null}
                        <p>{this.props.selectedBuild.cpu}</p>
                        <p>{this.props.selectedBuild.gpu}</p>
                        <p>{this.props.selectedBuild.motherboard}</p>
                        <p>{this.props.selectedBuild.ram}</p>
                        <p>{this.props.selectedBuild.storage}</p>
                        <p>{this.props.selectedBuild.cooling}</p>
                        <p>{this.props.selectedBuild.total}</p>
                        {this.props.selectedBuild.notes ? <p>{this.props.selectedBuild.notes}</p> : null}

                    </div>
                }
                <form className="buyForm">
                    <input type="text" name='name' value={this.state.name} placeholder='Name' onChange={this.handleInputChange} />
                    <input type="text" name='address' value={this.state.address} placeholder='Address' onChange={this.handleInputChange} />
                    <input type="text" name='city' value={this.state.city} placeholder='Town/City' onChange={this.handleInputChange} />
                    <input type="text" name='cardNumber' value={this.state.cardNumber} placeholder='CardNumber' onChange={this.handleInputChange} />
                    <input type="number" maxlength="5" name='zip' value={this.state.zip} placeholder='ZipCode' onChange={this.handleInputChange} />
                    <input type="password" maxlength="3" name='cvc' value={this.state.cvc} placeholder='CVC' onChange={this.handleInputChange} />
                    <input type="submit" name='cvc' value="Buy!" />

                </form>
                <button onClick={this.props.setBuy}>Cancel</button>
            </div>
        )
    }
}

export default Buy;