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
            psu: null,
            motherBoard: null,
            cooling: null,
            storage: null,
        }
    }
    getAllParts = () => {
        fetch(`/api/builds/${this.props.selectedNiche}/${this.props.currentId}`, { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    allParts: res.parts,
                    dataLoaded: true,
                })
            }).catch(err => console.log(err))
    }
    getRam = () => {
        fetch(`/api/parts/ram/${this.props.currentId}`, { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    allRam: res.part,

                })
            }).catch(err => console.log(err))
    }
    getMobo = () => {
        fetch(`/api/parts/motherboard/${this.props.currentId}`, { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    motherBoard: res.part,

                })
            }).catch(err => console.log(err))
    }

    getCooling = () => {
        fetch(`/api/parts/cooling/${this.props.currentId}`, { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    cooling: res.part,
                })
            }).catch(err => console.log(err))
    }

    getPSU = () => {
        fetch(`/api/parts/psu/${this.props.currentId}`, { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    psu: res.part,
                })
            }).catch(err => console.log(err))
    }

    getAllStorage = () => {
        fetch(`/api/parts/storage`, { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    storage: res.part
                })
            }).catch(err => console.log(err))
    }
    componentDidMount() {
        this.getAllParts()
        this.getRam()
        this.getMobo()
        this.getPSU()
        this.getAllStorage()
        this.getCooling()
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
                            <div>
                                {this.state.allParts.map((part, i) =>
                                    <div className="productInput" key={i}>
                                        <p onClick={() => { this.toggleShowInfo(); this.setSelectedPart(i) }}>{part.make} {part.model} </p>
                                        <p>${part.price}</p>
                                    </div>)}

                                <div className="productInput">
                                    {this.state.motherBoard && <p>Motherboard:{this.state.motherBoard[0].model}</p>}
                                    {this.state.motherBoard && <p>${this.state.motherBoard[0].price}</p>}
                                </div>
                                <div className="productInput">
                                    {this.state.psu && <p>PSU: {this.state.psu[0].model}</p>}
                                    {this.state.psu && <p>${this.state.psu[0].price}</p>}
                                </div>
                                <div className="productInput">
                                    {this.state.cooling && <p>Cooling:{this.state.cooling[0].model}</p>}
                                    {this.state.cooling && <p>${this.state.cooling[0].price}</p>}
                                </div>
                            </div>

                            <form className="userOptions">
                                <div className="adjustableOptions">
                                    <div className="dropdownMenu">
                                        <label htmlFor="ram">RAM</label>
                                        <select id="ram" name="ram">
                                            {this.state.allRam && <option value={this.state.allRam[0].capacity}>{this.state.allRam[0].capacity}</option>}
                                            {/* should be ram upgrade states*/}
                                            <option></option>
                                        </select>
                                    </div>
                                    <p>${this.state.allRam && <p>{this.state.allRam[0].price}</p>}</p>

                                </div>


                                <div className="adjustableOptions">
                                    <div className="dropdownMenu">
                                        <label htmlFor="storage">Storage</label>
                                        <select id="storage" name="storage">
                                            {this.state.storage && <option value={this.state.storage[0].capacity}>{this.state.storage[0].capacity}</option>}
                                            {this.state.storage && <option value={this.state.storage[1].capacity}>{this.state.storage[1].capacity}</option>}
                                            {this.state.storage && <option value={this.state.storage[2].capacity}>{this.state.storage[2].capacity}</option>}
                                            {this.state.storage && <option value={this.state.storage[3].capacity}>{this.state.storage[3].capacity}</option>}
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