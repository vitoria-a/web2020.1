import React, { Component } from 'react';
import TableRow from './TableRow';
import FirebaseContext from '../utils/FirebaseContext';
import FirebaseService from '../services/FirebaseService';

const ListPage = () => (
    <FirebaseContext.Consumer>
        { (contexto) => <List firebase={contexto} />}
    </FirebaseContext.Consumer>
)

class List extends Component {
    constructor(props) {
        super(props)
        this._isMounted = false
        this.state = { disciplina: [], loading: false }
    }

    componentDidMount() {
        this._isMounted = true
        this.setState({loading: true})

        FirebaseService.list(
            this.props.firebase.getFirestore(),
            (disciplina)=>{
                if(disciplina){
                    if(this._isMounted){
                        this.setState({disciplina:disciplina, loading: false})
                    }
                }
            }
        )
    }

    componentWillUnmount(){
        this._isMounted = false
    }

    montarTabela() {
        if (!this.state.disciplina) return
        return this.state.disciplina.map(
            (disciplina, i) => {
                return <TableRow disciplina={disciplina}
                    key={i}
                    firebase={this.props.firebase} />
            }
        )
    }

    gerarConteudo() {
        if (this.state.loading) {
            return (
                <tr>
                    <td colSpan='6' style={{textAlign:"center"}}>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </td>
                </tr>
            )
        } else return this.montarTabela()
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h2>Lista de disciplinas cadastradas</h2>
                <table className='table table-striped' style={{ marginTop: 20 }}>
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
                        {this.gerarConteudo()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListPage;