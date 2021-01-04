import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import { Helmet } from "react-helmet";

const NotFound = () => (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Error Page</title>
            <meta name="description" content="Error Page" />
            <meta name="description" content="Solution for a challenge from Devchallenges.io" />
            <meta name="title" property="og:title" content="Error Page" />
            <meta property="og:type" content="Website" />
            <meta
                name="image"
                property="og:image"
                content="https://live.staticflickr.com/65535/50800126707_2a1298082d_z.jpg"
            />
            <meta
                name="description"
                property="og:description"
                content="Solution for a challenge from Devchallenges.io"
            />
            <meta name="author" content="Rahi Khan" />
        </Helmet>

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
    </>
);

export default NotFound;
