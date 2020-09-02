import React, { Component } from 'react'
import NichePage from './NichePage'
import { Redirect } from 'react-router-dom'
import ProductPage from './ProductPage'


class BuildsController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: props.currentPage,
            allBuilds: [],
            selectedBuild: props.selectedBuild,
            currentId: props.currentId,
            selectedNiche: props.selectedNiche,
        }
    }


    // getAllBuilds = () => {
    //     fetch(`/builds/${this.state.currentPage}`, { credentials: 'include' })
    //         .then(res => res.json())
    //         .then(res => {
    //             this.setState({
    //                 allBuilds: res
    //             })
    //         }).catch(err => console.log(err))
    // }
    // componentDidMount() {
    //     this.getAllBuilds()
    // }


    // create a function that fetches from api and set the res to allbuilds then pass into the desired niche then refer to this in component did mount 

    // create a select build function to pass down into niche page, when build is selected have return value be a SINGLE BUILD's ID to be fetched then passed down into product page 
    // setTier = () => {
    //     this.setState({
    //         tier: 'hi'
    //     })
    // }

    decideWhichToRender() {

        switch (this.state.currentPage) {
            case 'gaming':
                return <NichePage currentPage={this.state.currentPage} allBuilds={this.state.allBuilds} />
            case 'streaming':
                return <NichePage currentPage={this.state.currentPage} allBuilds={this.state.allBuilds} />
            case 'creators':
                return <NichePage currentPage={this.state.currentPage} allBuilds={this.state.allBuilds} />
            case 'single':
                return <ProductPage currentPage={this.state.currentPage} selectedBuild={this.state.selectedBuild} selectedNiche={this.state.selectedNiche} currentId={this.state.currentId} />
            default:
                return <Redirect push to="/" />
        }
    }

    render() {
        return (
            <div className="controller">{this.decideWhichToRender()}</div>
        )
    }
}

export default BuildsController