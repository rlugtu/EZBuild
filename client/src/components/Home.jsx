import React from 'react'
import { Link } from 'react-router-dom'


const Home = (props) => {
    return (
        <div className="home">
            <div className="brandStatement">
                <h1>EZBuild</h1>
            </div>
            <div className="categories">
                <div className="gamersHomeButton">
                    <div className="nicheImage">
                        <Link to="/builds/gaming"><img src="https://www.nzxt.com/assets/homepage/h510-elite-white-black-dc7369e78f982928f808609aa9879b8d8e84ea9138ddbaeec97a066ab415de98.png" alt={"computer"}></img></Link>
                        <h1>TERRESTRE</h1>
                        <h2>Gaming</h2>
                        <h3>Tight, lean and built for performance</h3>
                        <p>specs seamlessly balanced for power and acuity. <br></br>balanced gpu and cpu. <br></br>all lean muscle. no fat.</p>
                    </div>
                </div>
                <div className="streamersHomeButton">
                    <div className="nicheImage">
                        <Link to="/builds/streaming"><img src="https://www.nzxt.com/assets/homepage/h510-elite-white-black-dc7369e78f982928f808609aa9879b8d8e84ea9138ddbaeec97a066ab415de98.png" alt={"computer"}></img></Link>
                        <h1>Streaming</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, molestias explicabo mollitia illum ducimus delectus officia voluptates quo incidunt dicta minus</p>
                </div>
                <div className="creatorsHomeButton">
                    <div className="nicheImage">
                        <Link to="/builds/creators"><img src="https://www.nzxt.com/assets/homepage/h510-elite-white-black-dc7369e78f982928f808609aa9879b8d8e84ea9138ddbaeec97a066ab415de98.png" alt={"computer"}></img></Link>
                        <h1>Creating</h1>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, molestias explicabo mollitia illum ducimus delectus officia voluptates quo incidunt dicta minus</p>
                </div>
            </div>
        </div>
    )
}

export default Home