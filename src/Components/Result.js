import React from "react";

const Result = ({ state }) => {
    const { preçodaCompra, porcentagemEstado, tipodeProduto } = state;

    const preçoFinal = Number((state.preçodaCompra * porcentagemEstado) / 100).toFixed(2);

    return (
        <div>
            <p>{`Preço Final : ${preçoFinal}`}</p>
            <p>{`P/F Estado : ${porcentagemEstado}`}</p>
        </div>
    )
}

export default Result