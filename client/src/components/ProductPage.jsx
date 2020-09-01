import React, { Component } from 'react'


class ProductPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentId: props.currentId,
            selectedBuild: props.selectedBuild,
            allParts: null,
            dataLoaded: false,
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
            <div>
                {this.state.dataLoaded ? <div>
                    {this.state.allParts.map((part, i) =>
                        <div key={i}>
                            <p>{part.make} {part.model} </p>
                        </div>)}
                </div> : null}
            </div>
        )
    }
}

export default ProductPage