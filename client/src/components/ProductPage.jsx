import React, { Component } from 'react'
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
            selectedParts: {},
            psu: null,
            motherBoard: null,
            cooling: null,
            storage: null,
            allRam: null,
            counter: 0
        }
    }

    getCheck = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }
    getAllParts = () => {
        fetch(`/api/builds/${this.props.selectedNiche}/${this.props.currentId}`, { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    allParts: res.parts,
                    counter: this.state.counter + 1
                })
            }).catch(err => console.log(err))
    }
    getRam = () => {
        fetch(`/api/parts/ram/${this.props.currentId}`, { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    allRam: res.part,
                    counter: this.state.counter + 1


                })
            }).catch(err => console.log(err))
    }
    getMobo = () => {
        fetch(`/api/parts/motherboard/${this.props.currentId}`, { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    motherBoard: res.part,
                    counter: this.state.counter + 1

                })
            }).catch(err => console.log(err))
    }

    getCooling = () => {
        fetch(`/api/parts/cooling/${this.props.currentId}`, { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    cooling: res.part,
                    counter: this.state.counter + 1,

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
                    counter: this.state.counter + 1

                })
            }).catch(err => console.log(err))
    }

    getAllStorage = () => {
        fetch(`/api/parts/storage`, { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    storage: res.part,
                    counter: this.state.counter + 1

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


    render() {
        return (
            <div className="productBody">
                <h1 className="brandStatement">{this.props.selectedNiche[0].toUpperCase() + this.props.selectedNiche.slice(1)}</h1>
                <h1> {this.state.currentId[0].toUpperCase() + this.state.currentId.slice(1)} Tier
                </h1>

                <div className="productContainer">
                    {this.state.dataLoaded && this.state.counter === 6 ?
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
                        </div>
                        : <p>loading...</p>}
                </div>

            </div>
        )
    }
}

export default ProductPage