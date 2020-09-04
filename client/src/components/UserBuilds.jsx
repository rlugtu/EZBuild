import React, { Component } from 'react';
import UserEdit from './UserEdit'
import Buy from './Buy'

class UserBuilds extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userID: props.user.id,
            allBuilds: null,
            edit: false,
            buy: false,
            selectedBuild: null
            // checks which niche
            // Niche Builds state that has builds from specific niche as obj
            //added comment 
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
    // componentDidUpdate(prevProps) {
    //     if (this.props.userID !== prevProps.userID) {
    //         this.getAllUserBuilds()
    //     }
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
            edit: true
        })
    }

    chooseSelectedBuild = (id) => {
        this.setState({
            selectedBuild: this.state.allBuilds.user_build[id]
        })
    }

    chooseBuy = () => {
        this.setState({
            buy: !this.state.buy
        })
    }

    render() {
        return (
            <div className="userContainer">
                <div className="userBuildsContainer">
                    {this.state.allBuilds && this.state.buy === false ?
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
                                <button onClick={() => { this.chooseSelectedBuild(i); this.turnEditOff() }}>Add Description</button>
                                <button onClick={() => { this.chooseBuy(); this.chooseSelectedBuild(i) }}>Purchase</button>
                            </div>
                        ) : null}
                </div>
                {this.state.edit ? <UserEdit selectedBuild={this.state.selectedBuild} turnOff={this.turnEditOff} updateBuilds={this.getAllUserBuilds()} /> : null}

                {this.state.buy ? <Buy setBuy={this.chooseBuy} selectedBuild={this.state.selectedBuild} /> : null}
            </div>

        )
    }
}




export default UserBuilds;