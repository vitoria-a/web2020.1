import React, {Component} from 'react';
import './Numero.css';

export default class Numero extends Component {
    getColor(){
        if(this.props.blue===true) return 'bg-primary'
        if(this.props.red===true) return 'bg-danger'
        if(this.props.yellow===true) return 'bg-warning'
        if(this.props.green===true) return 'bg-success'
            return 'bg-secondary'
    }

    render(){
        return(
            <div className={`card text-white ${this.getColor()}`}>
                <div className="card-header">
                    {this.props.title}
                </div>
                <div className="card-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}