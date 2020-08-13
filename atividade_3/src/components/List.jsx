import React,{ Component } from 'react';
import axios from  'axios';
import TableRow from './TableRow';


export default class List extends Component {

    constructor(props){
        super(props)
        this.state = {disciplina:[]}

        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)

    }

    componentDidMount(){
        axios.get('http://localhost:3001/disciplina/')
        .then(
            (res)=>{
                this.setState({disciplina: res.data})
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    montarTabela() {
        if(!this.state.disciplina) return
        return this.state.disciplina.map(
            (disciplina, i) => {
                return <TableRow disciplina={disciplina} key={i} apagarElementoPorId={this.apagarElementoPorId} />
            }
        )
    }

    apagarElementoPorId(id){
        let disciplinaTemp = this.state.disciplina
        for(let i=0; i < disciplinaTemp.length; i++){
            if(disciplinaTemp[i].id === id){
                disciplinaTemp.splice(i,1)
            }
        }
        this.setState({disciplina:disciplinaTemp})
    }

    render(){
        return(
            <div style={{marginTop: 10}}>
                <h2>Lista de disciplinas cadastradas</h2>
                <table className='table table-striped' style={{ marginTop: 20}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Capacidade</th>
                            <th colSpan='2'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>
        )
    }
}