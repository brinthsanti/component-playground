import { Col, Row } from 'antd';
import React from 'react';

const AntGrid = () => (
  <>
    <Row>
      <Col span={24}>col</Col>
    </Row>
    <Row gutter={26}>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row gutter={26}>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
  </>
);

export default AntGrid;
