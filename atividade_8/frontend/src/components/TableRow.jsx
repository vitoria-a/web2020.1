import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class TableRow extends Component {
    
    constructor(props){
        super(props)
        this.deletar = this.deletar.bind(this)
    }

    deletar(){
        axios.delete('http://localhost:3002/disciplinas/delete/'+this.props.disciplina._id) //express
        //axios.delete('http://localhost:3001/disciplina/'+this.props.disciplina.id) //json-server
        .then(res=>this.props.apagarElementoPorId(this.props.disciplina._id))
        .catch(error=>console.log(error))
    }

    render() {
        return (
            <tr>
                <td>
                    {this.props.disciplina._id}
                </td>

                <td>
                    {this.props.disciplina.nome}
                </td>

                <td>
                    {this.props.disciplina.curso}
                </td>

                <td>
                    {this.props.disciplina.capacidade}
                </td>

                <td style={{ textAlign: 'center'}}>
                    <Link to={'/edit/'+this.props.disciplina._id} className='btn btn-primary'>Editar</Link>
                </td>
                
                <td style={{ textAlign: 'center'}}>
                    <button onClick={this.deletar} className='btn btn-danger'>Apagar</button>
                </td>
            </tr>
        )
    }
}