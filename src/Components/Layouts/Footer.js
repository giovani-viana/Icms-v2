import Link from "next/link"

import styles from '../../styles/Footer.module.css'

import { SlSocialLinkedin, SlSocialGithub, SlSpeech } from "react-icons/sl";

import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';

export default function () {
    return (
        <Container fluid className={styles.footer}>
            <Row className={styles.rowT}>
                <ul className={styles.list}>
                    <li className={styles.fitem}>
                        <Link href={"https://www.linkedin.com/in/giovaniviana/"} target="_blank">
                            <SlSocialLinkedin className={styles.ImgF} />
                        </Link>
                    </li>
                    <li className={styles.fitem}>
                        <Link href={"https://www.linkedin.com/in/giovaniviana/"} target="_blank">
                            <SlSocialGithub className={styles.ImgF} />
                        </Link>
                    </li>
                    <li className={styles.fitem}>
                        <Link href={"https://www.linkedin.com/in/giovaniviana/"} target="_blank">
                            <SlSpeech className={styles.ImgF} />
                        </Link>
                    </li>
                </ul>
            </Row>
            <Row>
                <span className={styles.info}>Giovani Viana &copy; 2023</span>
            </Row>
        </Container>
    )
}
