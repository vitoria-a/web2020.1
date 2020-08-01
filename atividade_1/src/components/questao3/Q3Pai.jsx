import React from 'react';

function Pai (props) {
    return (
    <div>
        <h2>Nome: {props.nome}</h2>
        <h2>Curso: {props.curso}</h2>
        <h2>Cidade de origem: {props.cidade}</h2>
    </div>
    );
}
export default Pai;