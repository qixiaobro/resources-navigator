import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GithubPageContaier, SideMenu, MenuList, Resource, ResourceTitle, ResourceList, ResourceItem, ItemLogo, ItemName, ItemDesc } from './style'
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
                        <Row>
                            <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 3 }} lg={{ span: 3 }} xl={{ span: 3 }} style={{ height: 64 }}>
                                <SideMenu>
                                    <Select defaultValue="lucy" style={{ width: 100, marginBottom: 10 }}>
                                        <Option value="jack">前端</Option>
                                        <Option value="lucy">后端</Option>
                                        <Option value="Yiminghe">python</Option>
                                    </Select>
                                    <ul>
                                        <MenuList className={'active'}>
                                            前端框架
                                        </MenuList>
                                        <MenuList>
                                            开发团队
                                        </MenuList>
                                        <MenuList>
                                            设计资源
                                        </MenuList>
                                    </ul>
                                </SideMenu>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 19, offset: 2 }} lg={{ span: 19, offset: 1 }} xl={{ span: 19, offset: 1 }}>
                                <Resource>
                                    <ResourceTitle>
                                        前端框架
                                    </ResourceTitle>
                                    <ResourceList>
                                        <ResourceItem>
                                            <ItemLogo>
                                                <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></img>
                                            </ItemLogo>
                                            <ItemName>
                                                Antd
                                            </ItemName>
                                            <ItemDesc>
                                                <Tooltip placement="topLeft" title="基于 Ant Design 设计体系的 React UI 组件库">
                                                    基于 Ant Design 设计体系的 React UI 组件库
                                                </Tooltip>
                                            </ItemDesc>
                                        </ResourceItem>
                                        <ResourceItem>
                                            <ItemLogo>
                                                <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></img>
                                            </ItemLogo>
                                            <ItemName>
                                                Antd
                                            </ItemName>
                                            <ItemDesc>
                                                <Tooltip title="基于 Ant Design 设计体系的 React UI 组件库">
                                                    基于 Ant Design 设计体系的 React UI 组件库
                                                </Tooltip>
                                            </ItemDesc>
                                        </ResourceItem>
                                        <ResourceItem>
                                            <ItemLogo>
                                                <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></img>
                                            </ItemLogo>
                                            <ItemName>
                                                Antd
                                            </ItemName>
                                            <ItemDesc>
                                                <Tooltip title="基于 Ant Design 设计体系的 React UI 组件库">
                                                    基于 Ant Design 设计体系的 React UI 组件库
                                                </Tooltip>
                                            </ItemDesc>
                                        </ResourceItem>
                                        <ResourceItem>
                                            <ItemLogo>
                                                <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></img>
                                            </ItemLogo>
                                            <ItemName>
                                                Antd
                                            </ItemName>
                                            <ItemDesc>
                                                <Tooltip title="基于 Ant Design 设计体系的 React UI 组件库">
                                                    基于 Ant Design 设计体系的 React UI 组件库
                                                </Tooltip>
                                            </ItemDesc>
                                        </ResourceItem>
                                        <ResourceItem>
                                            <ItemLogo>
                                                <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></img>
                                            </ItemLogo>
                                            <ItemName>
                                                Antd
                                            </ItemName>
                                            <ItemDesc>
                                                <Tooltip title="基于 Ant Design 设计体系的 React UI 组件库">
                                                    基于 Ant Design 设计体系的 React UI 组件库
                                                </Tooltip>
                                            </ItemDesc>
                                        </ResourceItem>
                                        <ResourceItem>
                                            <ItemLogo>
                                                <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></img>
                                            </ItemLogo>
                                            <ItemName>
                                                Antd
                                            </ItemName>
                                            <ItemDesc>
                                                <Tooltip title="基于 Ant Design 设计体系的 React UI 组件库">
                                                    基于 Ant Design 设计体系的 React UI 组件库
                                                </Tooltip>
                                            </ItemDesc>
                                        </ResourceItem>
                                        <ResourceItem>
                                            <ItemLogo>
                                                <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></img>
                                            </ItemLogo>
                                            <ItemName>
                                                Antd
                                            </ItemName>
                                            <ItemDesc>
                                                <Tooltip title="基于 Ant Design 设计体系的 React UI 组件库">
                                                    基于 Ant Design 设计体系的 React UI 组件库
                                                </Tooltip>
                                            </ItemDesc>
                                        </ResourceItem>
                                        <ResourceItem>
                                            <ItemLogo>
                                                <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></img>
                                            </ItemLogo>
                                            <ItemName>
                                                Antd
                                            </ItemName>
                                            <ItemDesc>
                                                <Tooltip title="基于 Ant Design 设计体系的 React UI 组件库">
                                                    基于 Ant Design 设计体系的 React UI 组件库
                                                </Tooltip>
                                            </ItemDesc>
                                        </ResourceItem>
                                        <ResourceItem>
                                            <ItemLogo>
                                                <img alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"></img>
                                            </ItemLogo>
                                            <ItemName>
                                                Antd
                                            </ItemName>
                                            <ItemDesc>
                                                <Tooltip title="基于 Ant Design 设计体系的 React UI 组件库">
                                                    基于 Ant Design 设计体系的 React UI 组件库
                                                </Tooltip>
                                            </ItemDesc>
                                        </ResourceItem>
                                    </ResourceList>
                                </Resource>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }} lg={{ span: 4 }} xl={{ span: 4 }}></Col>
                </Row>
            </GithubPageContaier>
        )
    }
}

export default connect(null, null)(GithubPage)