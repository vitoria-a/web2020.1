import React, { Component } from 'react';
import Numero from './Numero';
import './Numero';

import { connect } from 'react-redux';

class Navigate extends Component {
    render() {
        return (
            <div className='line'>
                <Numero title='Número 01' red >
                    {this.props.num1}

                </Numero>

                <Numero title='Número 02' red >
                    {this.props.num2}
                </Numero>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        num1: state.number.num1,
        num2: state.number.num2
    }
}

export default connect(mapStateToProps)(Navigate);