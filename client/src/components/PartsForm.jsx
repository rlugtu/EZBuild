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
            total: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
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
                    <select onChange={this.handleChange} name={'ram'} value={this.state.ram}  >
                        <option value=' '>Choose Ram</option>
                        {this.props.allRam && <option value={this.props.allRam[0].model + ' ' + this.props.allRam[0].capacity}>{this.props.allRam[0].capacity}</option>
                        }
                    </select>


                    <h1>Storage:</h1>
                    <select onChange={this.handleChange} name={'storage'} value={this.state.storage}  >
                        <option value=' '>Choose Storage</option>
                        {this.props.storage && <option value={this.props.storage[0].make + ' ' + this.props.storage[0].capacity}>{this.props.storage[0].capacity}</option>
                        }
                        {this.props.storage && <option value={this.props.storage[1].make + ' ' + this.props.storage[1].capacity}>{this.props.storage[1].capacity}</option>
                        }
                        {this.props.storage && <option value={this.props.storage[2].make + ' ' + this.props.storage[2].capacity}>{this.props.storage[2].capacity}</option>
                        }
                        {this.props.storage && <option value={this.props.storage[3].make + ' ' + this.props.storage[3].capacity}>{this.props.storage[3].capacity}</option>
                        }
                    </select>
                    <h1>Total: {this.state.total}</h1>
                    <input type="submit" value={this.props.isAdd ? 'Add it!' : 'Save this Build'} />
                </form>
            </div>

        )
    }
}

export default withRouter(PartsForm);