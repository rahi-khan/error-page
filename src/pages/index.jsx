import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const NotFound = () => {
    return (
        <Container>
            {/*//! Header */}
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>

            {/*//! Main Section */}
            <Row></Row>

            {/*//! Footer */}
            <Row>
                <Col>
                    <Footer />
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;
