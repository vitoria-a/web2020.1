import React, { Component } from 'react';
import Numero from './Numero';

import { connect } from 'react-redux';

class Maior extends Component {

    numMaior() {

        if (this.props.num1 > this.props.num2) {
            return <h2> {this.props.num1} </h2>;
        }
        else if (this.props.num1 < this.props.num2) {
            return <h2> {this.props.num2} </h2>;
        }
        else
            return (
                <div>
                    <h2> Números iguais </h2>
                    <h3> Número 01: {this.props.num1}</h3>
                    <h3> Número 02: {this.props.num2}</h3>
                </div>


            )

    }


    render() {
        return (
            <Numero title='Maior' yellow>
                {this.numMaior()}
            </Numero>
        )
    }
}

function mapStateToProps(state) {
    return {
        num1: state.number.num1,
        num2: state.number.num2
    }
}

export default connect(mapStateToProps)(Maior)