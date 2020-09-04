import React, { Component } from 'react';

class EditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ' ',
            notes: ' ',
            cpu: this.props.selectedBuild && this.props.selectedBuild.cpu,
            gpu: this.props.selectedBuild && this.props.selectedBuild.gpu,
            motherboard: this.props.selectedBuild && this.props.selectedBuild.motherboard,
            psu: this.props.selectedBuild && this.props.selectedBuild.psu,
            ram: this.props.selectedBuild && this.props.selectedBuild.ram,
            storage: this.props.selectedBuild && this.props.selectedBuild.storage,
            total: this.props.selectedBuild && this.props.selectedBuild.total
        }
    }
    // componentDidMount() {
    //     this.setState({
    //         buildId: this.props.selectedBuild,
    //         cpu: this.props.selectedBuild && this.props.selectedBuild.user_build.cpu,
    //         gpu: this.props.selectedBuild && this.props.selectedBuild.user_build.gpu,
    //         motherboard: this.props.selectedBuild && this.props.selectedBuild.user_build.motherboard,
    //         psu: this.props.selectedBuild && this.props.selectedBuild.user_build.psu,
    //         ram: this.props.selectedBuild && this.props.selectedBuild.user_build.ram,
    //         storage: this.props.selectedBuild && this.props.selectedBuild.user_build.storage,
    //         total: this.props.selectedBuild && this.props.selectedBuild.user_build.total
    //     })
    // }


    handleEditSubmit = (e, data) => {
        e.preventDefault();
        fetch(`/api/user/${this.props.selectedBuild.id}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(res => {
                console.log('done')
            }).catch(err => console.log(err));
        this.props.updateBuilds()
        this.props.turnOff()
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value,
        });
    }



    render() {
        return (
            <div className="editForm">
                <h1>Notes</h1>

                {this.props.selectedBuild ? <div><form onSubmit={(e) => this.handleEditSubmit(e, this.state)}>
                    <input type="text" name='title' value={this.state.title} placeholder='Title' onChange={this.handleInputChange} />
                    <input type="textbox" name='notes' value={this.state.notes} placeholder='Notes' onChange={this.handleInputChange} />
                    <input onClick={() => this.props.getAllUserBuilds} type="submit" value="Submit" />
                </form>
                    <h1>{this.props.selectedBuild.id}</h1>

                </div> : null}


            </div>

        )
    }
}




export default EditForm;