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
                    <p>Whether you're looking to boost your kill/death ratio, share your personality with the rest of the world via streaming, or create killer content to share with your fans, we'll help you find a custom build that suits both your needs and your budget.</p>
                    <p>And while we keep things simple for the sake of our customers, you'll find some smart options for customizing your easy build.</p>
                </div>
            </div>
            <div className="categories">
                <div className="gamersHomeButton">
                    <div className="nicheImage">
                        <Link to="/builds/gaming"><img className='animalToken' src="https://imgur.com/VpZ61Tx.png " alt={"predator"}></img></Link>
                        <h1>GAMING</h1>
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