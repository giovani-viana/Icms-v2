import React from "react"
import styles from '../styles/Form.module.css'

const Form = ({ state, updateValues }) => {
        const {preçodaCompra,  porcentagemEstado} = state
    const percent = [17, 25, 27];
    return (
        <div>
            <div>
                <label htmlFor="preçodaCompra">
                    Preço da Compra
                </label>
                <input onChange={(e) => {
                    updateValues({
                        preçodaCompra: e.target.value,
                    });
                }}
                    type='number'
                    id="preçodaCompra"
                />
            </div>
            <div className={styles.listaPorcentagem}>
                {percent.map((p) => {
                    return (<div onClick={() => {
                        updateValues({porcentagemEstado: p})
                    }}
                        key={p}>{`${p}%`}</div>);
                })}
                <input onChange={(e) => {
                    updateValues({
                        porcentagemEstado: e.target.value < 0 ? 0
                            : e.target.value > 35 ? 35
                                : e.target.value,

                    })
                }}
                    value={porcentagemEstado}
                    max={35}
                    min={0}
                    type="Number"
                    placeholder="custom"
                />
            </div>
        </div>
    );
};

export default Form