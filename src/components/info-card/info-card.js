import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { Card, Col, Container, FormLabel, Row } from 'react-bootstrap';
import colors from '../../utils/colors/colors';
import styles from './styles';

const InfoCard = ({ data }) => {

    return (
        <Container style={styles.mainContainer}>
            <Card style={styles.infoCard}>
                <Container>
                    <Col>
                        <Row style={{margin:10}}>
                            <Col xs={4} md={4} lg={4}>
                                <FormLabel >First Name</FormLabel>
                            </Col>
                            <Col xs={8} md={8} lg={8}>
                                <FormLabel>{data.first_name}</FormLabel>
                            </Col>
                        </Row>
                        <Row style={{margin:10}}>
                            <Col xs={4} md={4} lg={4}>
                                <FormLabel>Last Name</FormLabel>
                            </Col>
                            <Col xs={8} md={8} lg={8}>
                                <FormLabel>{data.last_name}</FormLabel>
                            </Col>
                        </Row>
                        <Row style={{margin:10}}>
                            <Col xs={4} md={4} lg={4}>
                                <FormLabel>Email</FormLabel>
                            </Col>
                            <Col xs={8} md={8} lg={8}>
                                <FormLabel style={{wordWrap:'wrap'}}>{data.email}</FormLabel>
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </Card>
        </Container>
    );
}

InfoCard.propTypes = {
    data: PropTypes.object
}

export default InfoCard;