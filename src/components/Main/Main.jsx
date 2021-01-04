import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { main } from "./main.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Main = () => {
    const data = useStaticQuery(graphql`
        query {
            file {
                childImageSharp {
                    fixed(width: 350, quality: 90) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    return (
        <Row>
            {/*//! Image */}
            <Col md={6}>
                <Img fixed={data.file.childImageSharp.fixed} />
            </Col>

            {/*//! Texts */}
            <Col md={6}>
                <div
                    className={`${main} pl-4 d-flex flex-column justify-content-between align-items-stretch align-items-md-start`}
                >
                    <h1 className="mb-3 text-dark font-weight-bold">
                        I have bad news <br /> for you
                    </h1>
                    <p className="mb-4 lead text-secondary">
                        The page you are looking for might be removed <br />
                        or is temporarily unavailable
                    </p>
                    <Button variant="dark">Back to home</Button>
                </div>
            </Col>
        </Row>
    );
};
export default Main;
