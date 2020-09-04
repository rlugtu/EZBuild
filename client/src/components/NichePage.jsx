import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NichePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: props.currentPage,
            allBuilds: props.allBuilds
            // checks which niche
            // Niche Builds state that has builds from specific niche as obj
        }
    }

    getAllBuilds = () => {
        fetch(`/api/builds/${this.state.currentPage}`, { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    allBuilds: res.build
                })
            }).catch(err => console.log(err))
    }
    componentDidMount() {
        this.getAllBuilds()
    }


    render() {
        return (
            <div className="storePage">
                <h1>{this.state.currentPage}</h1>
                <div className="nicheProducts">
                    {/* map through Niche Builds and render a component (to be made still ) with that builds info  */}
                    {this.state.allBuilds.map((build, i) =>
                        <div className="nicheProductSingle" key={i}>
                            <Link to={'/builds/' + this.state.currentPage + '/' + build.price_tier}><img className="nicheImage" src="https://imgur.com/Be30uRU.png" alt={"computer"}></img></Link>
                            <h1>{build.build_name}</h1>
                            <h1>{build.price_tier}</h1>
                            <p>{build.build_description}</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default NichePage