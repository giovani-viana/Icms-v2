import styles from '../styles/Calculadora.module.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Calculadora() {
    return (
            <Container className={styles.containerCalc}>
                <Row>
                    <select name='Tipo do produto'>
                        <option value=''></option>
                        <option value='NotEspecifiedItens'>Bens não específicos</option> 
                        <option value='NotEspecifiedServices'>Serviços não específicos</option>
                        <option value='Driks'>Bebidas Alcólicas</option>
                        <option value='Artilhary'>Armas/Munições</option>
                        <option value='Antiques'>Antiquário</option>
                        <option value='ToyWeapons'>Armas de Brinquedo</option>
                        <option value='Weed'>Fumos</option>
                    </select>
                </Row>
                <Row>
                    <Col className={styles.colunaEstado}>
                        <select name='Estado Origem'>
                            <option value={''}></option>
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
                    </Col>
                    <Col className={styles.colunaEstado}>
                        <select name='Estado Origem'>
                            <option value={''}></option>
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
                    </Col>
                </Row>
                <Row>
                    <form>
                        <div>Preço do Produto</div>
                    </form>
                </Row>
                <Row>
                    <button>Resultado</button>
                </Row>
            </Container>
    )
}