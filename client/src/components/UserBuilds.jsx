import React, { Component } from 'react';
import UserEdit from './UserEdit'

class UserBuilds extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userID: props.user.id,
            allBuilds: null,
            edit: false,
            selectedBuild: null
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
    turnEditOff = () => {
        this.setState({
            edit: false
        })
    }

    chooseSelectedBuild = (id) => {
        fetch(`/api/user/build/${id}`, { credentials: 'include' })
            .then(res => res.json())
            .then(res => {
                this.setState({
                    selectedBuild: res,
                    edit: !this.state.edit

                })
            }).catch(err => console.log(err))
    }

    render() {
        return (
            <div className="userContainer">
                <h1>Welcome {this.props.user.username}</h1>
                <div className="userBuildsContainer">
                    {this.state.allBuilds ?
                        this.state.allBuilds.user_build.map((build, i) =>
                            <div className="userBuilds" key={i}>
                                {build.title ? <p>{build.title}</p> : null}
                                <p>{build.cpu}</p>
                                <p>{build.gpu}</p>
                                <p>{build.motherboard}</p>
                                <p>{build.ram}</p>
                                <p>{build.storage}</p>
                                <p>{build.cooling}</p>
                                <p>${build.total}</p>
                                {build.notes ? <p>{build.notes}</p> : null}
                                <button onClick={() => this.deleteBuild(build.id)}>Delete Build</button>
                                <button onClick={() => this.chooseSelectedBuild(build.id)}>Add Description</button>
                            </div>
                        ) : null}
                </div>
                {this.state.edit ? <UserEdit selectedBuild={this.state.selectedBuild} getAllUserBuilds={this.getAllUserBuilds()} turnOff={this.turnEditOff} /> : null}
            </div>

        )
    }
}




export default UserBuilds;