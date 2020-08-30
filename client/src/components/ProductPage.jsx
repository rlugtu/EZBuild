import React, { Component } from 'react'


class ProductPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentId: props.currentId,
            selectedBuild: props.selectedBuild
        }
    }

    render() {
        return (
            <div>Product Page</div>
        )
    }
}

export default ProductPage