import React, { Component } from 'react'
import ProductInfoPage from './ProductInfoPage'
import { Link } from 'react-router-dom'


class ProductPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentId: props.currentId,
            selectedBuild: props.selectedBuild,
            allParts: null,
            dataLoaded: false,
            showInfo: false,
            selectedPart: null,
            ramPrice: null,
            ramCapacity: null,
            storagePrice: null,
            storageCapacity: null
        }
    }
    getAllParts = () => {
        fetch(`/api/builds/${this.props.selectedNiche}/${this.props.currentId}`, { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    allParts: res.parts,
                    dataLoaded: true,
                    ramPrice: res.parts[2].price,
                    ramCapacity: res.parts[2].capacity,
                    // storagePrice: res.parts[3].price,
                    // storageCapacity: res.parts[3].capacity,
                    // chosenParts: {
                    //     cpu: `${res.parts[0].make} ${res.parts[0].model} ${res.parts[0].price}`,
                    //     gpu: `${res.parts[1].make} ${res.parts[1].model} ${res.parts[1].price}`,
                    //     ram: `${res.parts[2].make} ${res.parts[2].model} ${res.parts[2].capacity} ${res.parts[2].price}`,
                    //     storage: `${res.parts[3].make} ${res.parts[3].capacity} ${res.parts[3].price}`,
                    // }
                })
            }).catch(err => console.log(err))
    }
    componentDidMount() {
        this.getAllParts()
    }

    //SHOW INFO BASED ON PART THAT IS CLICKED
    toggleShowInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    setSelectedPart = (index) => {
        this.setState({
            selectedPart: index
        })
    }

    //maybe add onclick so price updates based on option chosen


    render() {
        return (
            <div className="productBody">
                <h1>{this.state.currentId[0].toUpperCase() + this.state.currentId.slice(1)} Tier</h1>
                <div className="productContainer">
                    {this.state.dataLoaded ?
                        <div className="productContent">
                            {this.state.allParts.map((part, i) =>
                                <div className="productInput" key={i}>
                                    <p onClick={() => { this.toggleShowInfo(); this.setSelectedPart(i) }}>{part.make} {part.model} </p>
                                    <p>${part.price}</p>
                                </div>)}
                            <form className="userOptions">
                                <div className="adjustableOptions">
                                    <div className="dropdownMenu">
                                        <label htmlFor="ram">RAM</label>
                                        <select id="ram" name="ram">
                                            <option value={this.state.ram}>{this.state.ramCapacity}</option>
                                            {/* should be ram upgrade states*/}
                                            <option>16GB</option>
                                        </select>
                                    </div>
                                    <p>${this.state.ramPrice}</p>
                                </div>

                                <div className="adjustableOptions">
                                    <div className="dropdownMenu">
                                        <label htmlFor="storage">Storage</label>
                                        <select id="storage" name="storage">
                                            <option>{this.state.storageCapacity}</option>
                                            {/* should be storage upgrade states */}
                                            <option>512GB</option>
                                            <option>1TBGB</option>
                                            <option>2TBGB</option>
                                        </select>
                                    </div>
                                    <p>${this.state.storagePrice}</p>
                                </div>
                            </form>
                            <div className="saveButtonDiv">
                                <button className="saveButton"><Link to="/user">Save Build</Link></button>
                            </div>

                        </div>
                        : null}

                    {this.state.showInfo ?
                        <ProductInfoPage allParts={this.state.allParts} toggleShowInfo={this.toggleShowInfo} selectedPart={this.state.selectedPart} />
                        : null}
                </div>

            </div>
        )
    }
}

export default ProductPage