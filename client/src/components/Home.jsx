import React from 'react'
import { Link } from 'react-router-dom'


const Home = (props) => {
    return (
        <div className="home">
            <h1 className="brandStatement">Get the PC for your needs at the right price</h1>
            <div className="categories">
                <div className="gamersHomeButton">
                    <div className="nicheImage">
                        <Link to="/builds/gaming"><img src="https://www.nzxt.com/assets/homepage/h510-elite-white-black-dc7369e78f982928f808609aa9879b8d8e84ea9138ddbaeec97a066ab415de98.png" alt={"computer"}></img></Link>

                    </div>
                    <p>Description Goes Here</p>
                </div>
                <div className="streamersHomeButton">
                    <div className="nicheImage">
                        <Link to="/builds/streaming"><img src="https://www.nzxt.com/assets/homepage/h510-elite-white-black-dc7369e78f982928f808609aa9879b8d8e84ea9138ddbaeec97a066ab415de98.png" alt={"computer"}></img></Link>
                    </div>
                    <p>Description Goes Here</p>
                </div>
                <div className="creatorsHomeButton">
                    <div className="nicheImage">
                        <Link to="/builds/creators"><img src="https://www.nzxt.com/assets/homepage/h510-elite-white-black-dc7369e78f982928f808609aa9879b8d8e84ea9138ddbaeec97a066ab415de98.png" alt={"computer"}></img></Link>
                    </div>
                    <p>Description Goes Here</p>
                </div>
            </div>
        </div>
    )
}

export default Home