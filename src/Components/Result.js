import React from "react";

const Result = ({ state }) => {
    const { preçodaCompra, porcentagemEstadoO, porcentagemEstadoD } = state;

    const preçoFinal = Number((state.preçodaCompra * porcentagemEstadoO) / 100).toFixed(2);
    const valorTaxa = Number(porcentagemEstadoO).toFixed(2);

    return (
        <div>
            <p>{`Preço Final : R$ ${preçoFinal}`}</p>
            <p>{`Taxa : ${valorTaxa}%`}</p>
        </div>
    )
}

export default Result