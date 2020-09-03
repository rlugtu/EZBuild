import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
class PartsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            motherboard: props.motherboard ? props.motherboard[0].model : ' ',
            ram: ' ',
            psu: props.psu ? props.psu[0].model : ' ',
            storage: props.storage ? props.storage[0].make + props.storage[0].capacity : ' ',
            cooling: props.cooling ? props.cooling[0].model : ' ',
            cpu: props.allParts ? props.allParts[1].model : ' ',
            gpu: props.allParts ? props.allParts[0].model : ' ',
            total: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
        this.addItemCost(value)
    }

    handleFormSubmit(e, data) {
        if (this.props.auth) {
            e.preventDefault()
            fetch(`/api/user`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(res => res.json())
                .then(res => {
                    console.log(res);
                }).catch(err => console.log(err));
            this.props.history.push('/user')

        } else {
            this.props.history.push('/user')
        }
    }

    componentDidMount() {
        this.getTotal()
    }

    // getPartPrice()
    getTotal = () => {
        let totalCost = (this.props.allParts ? this.props.allParts[0].price : null) + (this.props.allParts ? this.props.allParts[1].price : null) + (this.props.motherboard ? this.props.motherboard[0].price : null) + (this.props.cooling && this.props.cooling[0].price) + (this.props.psu ? this.props.psu[0].price : null)

        this.setState({
            total: totalCost
        })
        return totalCost
    }

    addItemCost = (item) => {
        let currentTotal = this.state.total
        // item = typeof item !== 'undefined' ? item : 0;
        // let totalCost = (this.props.allParts ? this.props.allParts[0].price : null) + (this.props.allParts ? this.props.allParts[1].price : null) + (this.props.motherboard ? this.props.motherboard[0].price : null) + (this.props.cooling && this.props.cooling[0].price) + (this.props.psu ? this.props.psu[0].price : null)
        this.setState({
            total: currentTotal + parseInt(item)
        })
    }

    render() {
        return (
            <div>
                <form className="userOptions" onSubmit={(e) => this.handleFormSubmit(e, this.state)}>
                    <h1>CPU:</h1>
                    {this.props.allParts && <p>${this.props.allParts[0].price} {this.props.allParts[0].make} {this.props.allParts[0].model}</p>}

                    <h1>GPU:</h1>
                    {this.props.allParts && <p>${this.props.allParts[1].price} {this.props.allParts[1].model}</p>}

                    <h1>Motherboard:</h1>
                    {this.props.motherboard && <p>${this.props.motherboard[0].price} {this.props.motherboard[0].model}</p>}

                    <h1>PSU: </h1>
                    {this.props.psu && <p>${this.props.psu[0].price} {this.props.psu[0].model}</p>}

                    <h1>Cooling: </h1>
                    {this.props.cooling && <p>$ {this.props.cooling[0].price} {this.props.cooling[0].model}</p>}

                    <h1>RAM:</h1>
                    <select onChange={this.handleChange} name={'ram'} value={this.state.ram}    >
                        <option value=' '>Choose Ram</option>
                        {this.props.allRam && <option value={this.props.allRam[0].price + ' ' + this.props.allRam[0].model}>{this.props.allRam[0].capacity}</option>
                        }
                        {this.props.allRam && <option value={this.props.allRam[1].price + ' ' + this.props.allRam[1].model}>{this.props.allRam[1].capacity}</option>
                        }
                        {/* {this.props.allRam && <option value={this.props.allRam[0].model + ' ' + this.props.allRam[0].capacity}>{this.props.allRam[0].capacity}</option>
                        }
                        {this.props.allRam && <option value={this.props.allRam[1].model + ' ' + this.props.allRam[1].capacity}>{this.props.allRam[1].capacity}</option>
                        } */}
                    </select>


                    <h1>Storage:</h1>
                    <select onChange={this.handleChange} name={'storage'} value={this.state.storage}  >
                        <option value=' '>Choose Storage</option>
                        {this.props.storage && <option value={this.props.storage[0].price + ' ' + this.props.storage[0].make + ' ' + this.props.storage[0].capacity}>{this.props.storage[0].capacity}</option>
                        }
                        {this.props.storage && <option value={this.props.storage[1].price + ' ' + this.props.storage[1].make + ' ' + this.props.storage[1].capacity}>{this.props.storage[1].capacity}</option>
                        }
                        {this.props.storage && <option value={this.props.storage[2].price + ' ' + this.props.storage[2].make + ' ' + this.props.storage[2].capacity}>{this.props.storage[2].capacity}</option>
                        }
                        {this.props.storage && <option value={this.props.storage[3].price + ' ' + this.props.storage[3].make + ' ' + this.props.storage[3].capacity}>{this.props.storage[3].capacity}</option>
                        }
                    </select>
                    <input type="submit" value={this.props.isAdd ? 'Add it!' : 'Save this Build'} />
                </form>
                {/* <h1>Total:
                        {(this.props.allParts ? this.props.allParts[0].price : null) + (this.props.allParts ? this.props.allParts[1].price : null) + (this.props.motherboard ? this.props.motherboard[0].price : null) + (this.props.cooling && this.props.cooling[0].price) + (this.props.psu ? this.props.psu[0].price : null)}
                </h1> */}
                <h1>$ {this.state.total}</h1>
                <button onClick={this.getTotal}>Calculate</button>

            </div >

        )
    }
}

export default withRouter(PartsForm);