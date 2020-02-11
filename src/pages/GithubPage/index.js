/*
 * @Author: Do not edit
 * @Date: 2020-02-11 11:09:17
 * @LastEditors: zxd
 * @LastEditTime: 2020-02-11 11:18:08
 * @FilePath: \resources-navigator\src\pages\GithubPage\index.js
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ResourcesContaier, SideMenu, MenuList, Resource, ResourceTitle, ResourceList, ResourceItem, ItemLogo, ItemName, ItemDesc } from './style'
import { Link } from 'react-router-dom'
import { Row, Col, Input, Icon, Drawer, Affix, Tooltip, Select } from 'antd';

class GithubPage extends Component {
    render() {
        const { Option } = Select;
        return (
            <ResourcesContaier>
                <Row>
                    <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }} lg={{ span: 4 }} xl={{ span: 4 }}></Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 16 }} xl={{ span: 16 }}>
                        <Row>
                            <Col xs={{ span: 0, offset: 0 }} sm={{ span: 0, offset: 0 }} md={{ span: 4, offset: 1 }} lg={{ span: 4, offset: 0 }} xl={{ span: 3, offset: 0 }} style={{ height: 64 }}>
                            </Col>
                            <Col xs={{ span: 22, offset: 2 }} sm={{ span: 22, offset: 2 }} md={{ span: 18, offset: 1 }} lg={{ span: 18, offset: 1 }} xl={{ span: 19, offset: 1 }}>

                            </Col>
                        </Row>

                    </Col>
                    <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }} lg={{ span: 4 }} xl={{ span: 4 }}></Col>
                </Row>
            </ResourcesContaier>
        )
    }
}

export default connect(null, null)(GithubPage)