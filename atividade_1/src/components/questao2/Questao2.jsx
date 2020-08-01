import React, {Component} from 'react';

export default class Questao2 extends Component{
    render(){
        return (
        <div>
            <h2>Nome: {this.props.nome}</h2>
            <h2>Curso: {this.props.curso}</h2>
            <h2>Cidade de origem: {this.props.cidade}</h2>
            </div>
        )
    }
}