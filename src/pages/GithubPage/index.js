import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GithubPageContaier,TypeSelect } from './style'
import { Link } from 'react-router-dom'
import { Row, Col, Input, Icon, Drawer, Tooltip, Select } from 'antd';

class GithubPage extends Component {
    render() {
        const { Option } = Select;
        return (
            <GithubPageContaier>
                <Row>
                    <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }} lg={{ span: 4 }} xl={{ span: 4 }}></Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 16 }} xl={{ span: 16 }}>
                        <TypeSelect>
                            <Select defaultValue="lucy" style={{ width: 120 }}>
                                <Option value="jack">前端</Option>
                                <Option value="lucy">后端</Option>
                                <Option value="Yiminghe">python</Option>
                            </Select>
                        </TypeSelect>
                    </Col>
                    <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }} lg={{ span: 4 }} xl={{ span: 4 }}></Col>
                </Row>
            </GithubPageContaier>
        )
    }
}

export default connect(null, null)(GithubPage)