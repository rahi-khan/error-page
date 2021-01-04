import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

const NotFound = () => (
    <Container
        className="p-4 d-flex flex-column justify-content-between"
        style={{ minHeight: "100vh" }}
    >
        {/*//! Header */}
        <Header />

        {/*//! Main Section */}
        <Main />

        {/*//! Footer */}
        <Footer />
    </Container>
);

export default NotFound;
