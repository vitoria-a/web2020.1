import React, { Component } from 'react';
import Numero from './Numero';

import { connect } from 'react-redux';

class Soma extends Component {
    render() {
        return (
            <Numero title='Soma'>
                <h2>{this.props.num1 + this.props.num2}</h2>
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

export default connect(mapStateToProps)(Soma);