import React from 'react';
import { Row, Col } from 'antd';
const GridDemo=()=> {
    return (
        <div style={{
            backgroundColor: "black"
        }
        }>
            <Row>
                <Col span={24}>
                    <div style={{backgroundColor:'yellow', height:'110px', color:'white'}}>24</div>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <div style={{backgroundColor:'green', height:'60px', color:'white'}}>12</div>
                </Col>
                <Col span={12}>
                    <div style={{backgroundColor:'black', height:'60px', color:'white'}}>12</div>
                </Col>
            </Row>
            <Row>
                <Col span={8}>
                    <div style={{backgroundColor:'yellow'}}>8</div>
                </Col>
                <Col span={8}>
                    <div style={{backgroundColor:'red'}}>8</div>
                </Col>
                <Col span={8}>
                    <div style={{backgroundColor:'gray'}}>8</div>
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <div style={{backgroundColor:'yellow'}}>6</div>
                </Col>
                <Col span={6}>
                    <div style={{backgroundColor:'red'}}>6</div>
                </Col>
                <Col span={6}>
                    <div style={{backgroundColor:'green'}}>6</div>
                </Col>
                <Col span={6}>
                    <div style={{backgroundColor:'black'}}>6</div>
                </Col>
            </Row>
        </div>
    );
}

export default GridDemo;
