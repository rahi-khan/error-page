import React from "react";
import { Row, Col } from "react-bootstrap";
import { header } from "./header.module.scss";

const Header = () => (
    <Row className="mb-4">
        <Col>
            <header className={header}>
                <h3 className="text-center text-md-left text-dark font-weight-bold">
                    404 NOT FOUND
                </h3>
            </header>
        </Col>
    </Row>
);

export default Header;
