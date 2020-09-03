import React, { Component } from 'react';

class UserBuilds extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userID: props.user.id,
            allBuilds: props.allBuilds
            // checks which niche
            // Niche Builds state that has builds from specific niche as obj
        }
    }
    getAllUserBuilds = (id) => {
        fetch(`/api/user/${this.state.userID}`, { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    allBuilds: res
                })
            }).catch(err => console.log(err))
        return
    }
    componentDidMount() {
        this.getAllUserBuilds()
    }
    // componentDidUpdate() {
    //     this.getAllUserBuilds()
    // }

    deleteBuild = (id) => {
        fetch(`/api/user/${id}`, {
            method: 'DELETE',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            }).catch(err => console.log(err));
        this.getAllUserBuilds()
    }

    render() {
        return (
            <div className="userContainer">
                <h1>Welcome {this.props.user.username}</h1>
                <div className="userBuildsContainer">
                    {this.state.allBuilds ?
                        this.state.allBuilds.user_build.map((build, i) =>
                            <div className="userBuilds">
                                <p>{build.cpu}</p>
                                <p>{build.gpu}</p>
                                <p>{build.motherboard}</p>
                                <p>{build.ram}</p>
                                <p>{build.storage}</p>
                                <p>{build.cooling}</p>
                                <p>{build.total}</p>
                                <button onClick={() => this.deleteBuild(build.id)}>Delete Build</button>
                            </div>
                        ) : null}
                </div>
            </div>

        )
    }
}




export default UserBuilds;