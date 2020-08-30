import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

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


    render() {
        return (
            <div className="storePage">
                <h1>{this.state.currentPage}</h1>
                <div className="nicheProducts">
                    {/* map through Niche Builds and render a component (to be made still ) with that builds info  */}
                    {this.state.allBuilds.map((product, i) =>
                        <div className="nicheProductSingle" key={i}>
                            <Link to={'/builds/' + this.state.currentPage + '/' + i}><img className="nicheImage" src="https://www.nzxt.com/assets/homepage/h510-elite-white-black-dc7369e78f982928f808609aa9879b8d8e84ea9138ddbaeec97a066ab415de98.png" alt={"computer"}></img></Link>
                            <p>{product.name}</p>
                            <p>{product.tier}</p>
                            <p>{product.cpu}</p>
                            <p>{product.gpu}</p>
                            <p>{product.ram}</p>
                        </div>
                    )}
                </div>
            </div>

        )
    }
}

export default NichePage