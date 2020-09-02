import React, { Component } from 'react'
import ProductInfoPage from './ProductInfoPage'

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
            totalCost: 0
        }
    }
    getAllParts = () => {
        fetch(`/api/builds/${this.props.selectedNiche}/${this.props.currentId}`, { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    allParts: res.parts,
                    dataLoaded: true
                })
            }).catch(err => console.log(err))
    }
    componentDidMount() {
        this.getAllParts()
        this.getTotalCost()
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


    getTotalCost = () => {
        let total = 0
        if (this.state.dataLoaded) {
            this.state.allParts.map((part) => {
                console.log('hi')
                total += part.price
                return total
            })
            this.setState({
                totalCost: total
            })
        }
        return
    }


    render() {
        return (
            <div className="productBody">
                <h1>{this.state.currentId[0].toUpperCase() + this.state.currentId.slice(1)} Tier</h1>
                <div className="productContainer">
                    {this.state.dataLoaded ?
                        <div className="productContent">
                            {this.state.allParts.map((part, i) =>
                                <div className="productInput" key={i}>
                                    <p onClick={() => { this.toggleShowInfo(); this.setSelectedPart(i) }}>{part.make} {part.model} ${part.price} </p>
                                </div>)}
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