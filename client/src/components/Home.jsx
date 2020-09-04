import React from 'react'
import { Link } from 'react-router-dom'


const Home = (props) => {
    return (
        <div className="home">
            <div className="header">
                <div className="brandName">
                    <h1>EZBuild</h1>
                </div>
                <div className="brandStatement">
                    <p>Having the right computer for your needs shouldn't require you to have a degree in engineering. That's why EZBuild is here. We do the heavy lifting so you don't have to - researching all of the important components and bundling them together to provide you with the right balance of specs for your vocation.</p>
                </div>
            </div>
            <div className="categories">
                <div className="gamersHomeButton">
                    <div className="nicheImage">
                        <Link to="/builds/gaming"><img className='animalToken' src="https://imgur.com/bvBFqIk.png " alt={"predator"}></img></Link>
                    </div>
                    <div>
                        <h1>BESTIA</h1>
                        <h2>Gaming PCs</h2>
                        <h3>Tight, lean and tailored for performance</h3>
                        <p>specs seamlessly balanced for power and acuity.<br></br>balanced gpu and cpu.<br></br>all lean muscle. no fat.</p>
                    </div>
                </div>
                <div className="streamersHomeButton">
                    <div className="nicheImage">
                        <Link to="/builds/streaming"><img className='animalToken' src="https://imgur.com/bvBFqIk.png " alt={"aquatic"}></img></Link>
                    </div>
                        <h1>AQUATICA</h1>
                        <h2>Streaming PCs</h2>
                        <h3>Smooth, fluid performance for live video</h3>
                        <p>specs built to follow the stream with no gameplay stutter
                        <br></br>creative streaming options for any budget<br></br>high core counts for pragmatic multitasking</p>
                </div>
                <div className="creatorsHomeButton">
                    <div className="nicheImage">
                        <Link to="/builds/creators"><img className='animalToken' src="https://imgur.com/bvBFqIk.png " alt={"birds"}></img></Link>
                    </div>
                        <h1>ETEREO</h1>
                        <h2>Creator PCs</h2>
                        <h3>Nimble builds suited to anhy creative task</h3>
                        <p>specs with a focus on raw processing power.<br></br>adequate gpus with impressive central processors<br></br>suited for video, photo, and sound editing</p>
                    </div>
            </div>
        
        </div>
                )
}

export default Home