import React, { Component } from 'react'

class ProductInfoPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentId: props.currentId,
            selectedBuild: props.selectedBuild,
            allParts: props.allParts,
            dataLoaded: false,
            selectedPart: props.selectedPart
        }
    }
    getAllParts = () => {
        fetch(`/builds/${this.props.selectedNiche}/${this.props.currentId}`, { credentials: 'include' })
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
    }

    render() {
        return (
            <div className="infoContainer">
                {/* <div className="productContent">
                        {this.props.allParts.map((part, i) =>
                            <div className="productInput" key={i}>
                                <p>{part.part_description}</p>
                            </div>)}
                    </div> */}
                <div className="infoContent">
                    <p>{this.props.allParts[this.state.selectedPart].part_description}</p>
                    {this.props.allParts[this.state.selectedPart].generation && <p>Generation: {this.props.allParts[this.state.selectedPart].generation}</p>}
                    {this.props.allParts[this.state.selectedPart].cores && <p>Cores: {this.props.allParts[this.state.selectedPart].cores}</p>}

                    {this.props.allParts[this.state.selectedPart].image_url && <img src={this.props.allParts[this.state.selectedPart].image_url} />}

                </div>

            </div>
        )
    }
}

export default ProductInfoPage