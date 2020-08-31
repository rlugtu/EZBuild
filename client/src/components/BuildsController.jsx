import React, { Component } from 'react'
import NichePage from './NichePage'
import { Redirect } from 'react-router-dom'
import ProductPage from './ProductPage'


class BuildsController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: props.currentPage,
            allBuilds: [
                {
                    name: 'build 1',
                    tier: 'bronze',
                    cpu: 'test cpu 1',
                    gpu: 'test gpu 1',
                    ram: 'test ram 1'
                },
                {
                    name: 'build 2',
                    tier: 'silver',
                    cpu: 'test cpu 2',
                    gpu: 'test gpu 2',
                    ram: 'test ram 2'
                },
                {
                    name: 'build 3',
                    tier: 'gold',
                    cpu: 'test cpu 3',
                    gpu: 'test gpu 3',
                    ram: 'test ram 3'
                }],
            selectedBuild: props.selectedBuild,
            currentId: props.currentId,
            selectedNiche: props.selectedNiche
        }
    }

    // create a function that fetches from api and set the res to allbuilds then pass into the desired niche then refer to this in component did mount 

    // create a select build function to pass down into niche page, when build is selected have return value be a SINGLE BUILD's ID to be fetched then passed down into product page 


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