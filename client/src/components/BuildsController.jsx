import React, { Component } from 'react'
import NichePage from './NichePage'
import { Redirect } from 'react-router-dom'



class BuildsController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: props.currentPage,
        }
    }

    decideWhichToRender() {
        switch (this.state.currentPage) {
            case 'gamers':
                return <NichePage currentPage={this.state.currentPage} />
            case 'streamers':
                return <NichePage currentPage={this.state.currentPage} />
            case 'creators':
                return <NichePage currentPage={this.state.currentPage} />
            default:
                return <Redirect push to="/" />
        }
    }

    render() {
        return (
            <div>{this.decideWhichToRender()}</div>
        )
    }
}

export default BuildsController