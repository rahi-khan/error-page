import React from "react";
import { Row, Col } from "react-bootstrap";
import { footer } from "./footer.module.scss";

const Footer = () => (
    <Row>
        <Col>
            <footer className={footer}>
                <h3 className="text-center text-dark">
                    Rahi Khan &copy;
                    <a href="https://devchallenges.io/"> DevChallenges.io</a>
                </h3>
            </footer>
        </Col>
    </Row>
);

export default Footer;
