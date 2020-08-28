import React, { Component } from 'react'

class NichePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: props.currentPage,
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.currentPage}</h1>
            </div>
        )
    }
}

export default NichePage