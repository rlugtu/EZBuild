import React, { Component } from 'react'
import ProductInfoPage from './ProductInfoPage'
// import { Link } from 'react-router-dom'
import PartsForm from './PartsForm'

class ProductPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentId: props.currentId,
            selectedBuild: props.selectedBuild,
            allParts: null,
            dataLoaded: false,
            showInfo: false,
            selectedParts: {},
            psu: null,
            motherBoard: null,
            cooling: null,
            storage: null,
            allRam: null
            // selectedParts: {
            //     allParts: null,
            //     motherBoard: null,
            //     cooling: null,
            //     storage: null,
            //     ram: null,
            // }
        }
    }
    getAllParts = () => {
        fetch(`/api/builds/${this.props.selectedNiche}/${this.props.currentId}`, { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    allParts: res.parts,

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
                    dataLoaded: true,
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

    handleChange(e) {
        this.setState({
            value: e.target.value

        });
    }

    //maybe add onclick so price updates based on option chosen


    render() {
        return (
            <div className="productBody">
                <h1>{this.state.currentId[0].toUpperCase() + this.state.currentId.slice(1)} Tier
                </h1>

                <div className="productContainer">
                    {this.state.dataLoaded ?
                        <div className="productContent">
                            <PartsForm
                                allParts={this.state.allParts}
                                psu={this.state.psu}
                                storage={this.state.storage}
                                cooling={this.state.cooling}
                                motherboard={this.state.motherBoard}
                                allRam={this.state.allRam}
                                auth={this.props.auth}
                            />
                            {/* <div>
                                {this.state.allParts.map((part, i) =>
                                    <div className="productInput" key={i}>
                                        <p onClick={() => { this.toggleShowInfo(); this.setSelectedPart(i) }}>{part.make} {part.model} </p>
                                        <p>${part.price}</p>
                                    </div>)}
                                <form>
                                    {this.state.allParts.map((part, i) =>
                                        <select>
                                            <option>{part.make} {part.make}</option>
                                        </select>
                                    )}
                                    <select>
                                        {this.state.motherBoard && <option>{this.state.motherBoard[0].model}</option>}
                                    </select>
                                </form>

                                <div className="productInput">
                                    {this.state.psu && <p>PSU: {this.state.psu[0].model}</p>}
                                    {this.state.psu && <p>${this.state.psu[0].price}</p>}
                                </div>
                                <div className="productInput">
                                    {this.state.cooling && <p>Cooling:{this.state.cooling[0].model}</p>}
                                    {this.state.cooling && <p>${this.state.cooling[0].price}</p>}
                                </div>
                            </div> */}
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