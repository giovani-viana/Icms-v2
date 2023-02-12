import React from "react"
import styles from '../styles/Form.module.css'

const Form = ({ state, updateValues }) => {
    const { preçodaCompra, porcentagemEstadoO, porcentagemEstadoD } = state
    const { estadoOrigem, estadoDestino } = state
    const percent = [17, 25, 27];
    const locationList = ['DF', 'AC', 'AP', 'BA', 'AL', 'AM', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'TO']

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

            <div className={styles.listaEstados}>
                {percent.map((p) => {
                    return (<div onClick={() => {
                        updateValues({ porcentagemEstadoO: p })
                    }}
                        key={p}>{`${p}%`}</div>);
                })}

                <div>
                    <label htmlFor="estadoOrigem"> Estado de Origem </label>
                    <select onChange={(e) => {
                        updateValues({
                            estadoOrigem: e.target.value,
                        });
                    }}
                        defaultValue=''
                        type='string'
                        id="estadoOrigem">
                        <option value={'AC'}>AC</option> <option value={'AP'}>AP</option> <option value={'BA'}>BA</option>
                        <option value={'AL'}>AL</option> <option value={'AM'}>AM</option> <option value={'CE'}>CE</option>
                        <option value={'DF'}>DF</option> <option value={'ES'}>ES</option> <option value={'GO'}>GO</option>
                        <option value={'MA'}>MA</option> <option value={'MT'}>MT</option> <option value={'MS'}>MS</option>
                        <option value={'MG'}>MG</option> <option value={'PA'}>PA</option> <option value={'PB'}>PB</option>
                        <option value={'PR'}>PR</option> <option value={'PE'}>PE</option> <option value={'PI'}>PI</option>
                        <option value={'RJ'}>RJ</option> <option value={'RN'}>RN</option> <option value={'RS'}>RS</option>
                        <option value={'RO'}>RO</option> <option value={'RR'}>RR</option> <option value={'SC'}>SC</option>
                        <option value={'SP'}>SP</option> <option value={'SE'}>SE</option> <option value={'TO'}>TO</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="estadoDestino"> Estado de Destino </label>
                    <select onChange={(e) => {
                        updateValues({
                            estadoDestino: e.target.value,
                        });
                    }}
                        defaultValue=''
                        type='string'
                        id="estadoDestino">
                        <option value={'AC'}>AC</option> <option value={'AP'}>AP</option> <option value={'BA'}>BA</option>
                        <option value={'AL'}>AL</option> <option value={'AM'}>AM</option> <option value={'CE'}>CE</option>
                        <option value={'DF'}>DF</option> <option value={'ES'}>ES</option> <option value={'GO'}>GO</option>
                        <option value={'MA'}>MA</option> <option value={'MT'}>MT</option> <option value={'MS'}>MS</option>
                        <option value={'MG'}>MG</option> <option value={'PA'}>PA</option> <option value={'PB'}>PB</option>
                        <option value={'PR'}>PR</option> <option value={'PE'}>PE</option> <option value={'PI'}>PI</option>
                        <option value={'RJ'}>RJ</option> <option value={'RN'}>RN</option> <option value={'RS'}>RS</option>
                        <option value={'RO'}>RO</option> <option value={'RR'}>RR</option> <option value={'SC'}>SC</option>
                        <option value={'SP'}>SP</option> <option value={'SE'}>SE</option> <option value={'TO'}>TO</option>
                    </select>
                </div>

                <input onChange={(e) => {
                    updateValues({
                        porcentagemEstadoO: e.target.value < 0 ? 0
                            : e.target.value > 35 ? 35
                                : e.target.value,

                    })
                }}
                    value={porcentagemEstadoO}
                    max={35}
                    min={0}
                    type="Number"
                    placeholder="custom"
                />

                <input onChange={(e) => {
                    updateValues({
                        porcentagemEstadoD: e.target.value < 0 ? 0
                            : e.target.value > 35 ? 35
                                : e.target.value,

                    })
                }}
                    value={porcentagemEstadoD}
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