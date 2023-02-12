import { useState } from 'react'
import Container from 'react-bootstrap/Container';

import styles from '../styles/Calculadora.module.css'

import Form from '../Components/Forms'
import Result from '../Components/Result'

export default function Calculadora() {

    const [state, setState] = useState({
        preçodaCompra: 0,
        porcentagemEstadoO: 0,
        porcentagemEstadoD: 0,
    });
    
    const updateValues = (newState) => {
        setState({
          ...state,
          ...newState,
        })
    };

    return (
        <Container className={styles.containerCalc}>    
          <div>
            <Form state={state} updateValues={updateValues} />
            <Result state={state} />
          </div>
        </Container>
    )
}