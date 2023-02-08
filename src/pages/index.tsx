import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import Container from 'react-bootstrap/Container';

import Calculadora from '../Components/Calculadora'

export default function Home() {
  return (
    <>
      <Head>
        <title>Página Principal</title>
      </Head>
      <h1 className={styles.title}>Calculadora de Imposto sobre circulação de bens e serviços</h1>
      <Container>
        <Calculadora />
      </Container>
    </>
  )
}
