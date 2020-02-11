/*
 * @Author: Do not edit
 * @Date: 2020-02-11 11:09:17
 * @LastEditors: zxd
 * @LastEditTime: 2020-02-11 11:18:08
 * @FilePath: \resources-navigator\src\pages\GithubPage\index.js
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GithubContainer, ProjectList, ProjectCard, ProjectName, ProjectDesc, ProjectTag } from './style'
import { Link } from 'react-router-dom'
import { Row, Col, Tag, Icon, } from 'antd';

class GithubPage extends Component {
    render() {
        return (
            <GithubContainer>
                <Row>
                    <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }} lg={{ span: 4 }} xl={{ span: 4 }}></Col>
                    <Col xs={{ span: 20,offset:4 }} sm={{ span: 20,offset:4 }} md={{ span: 20,offset:4 }} lg={{ span: 16,offset:0 }} xl={{ span: 16,offset:0 }}>
                        <ProjectList>
                            <ProjectCard>
                                <ProjectName>
                                    <Icon type="project" style={{ marginRight: 5 }} />resources-navigator
                                </ProjectName>
                                <ProjectDesc>
                                    集合各种技术网站、博客、github项目
                                </ProjectDesc>
                                <ProjectTag>
                                    <Row>
                                        <Col span={10} style={{ color: '#52c41a' }}>
                                            javascript
                                        </Col>
                                        <Col span={7}>
                                            <Icon type="star" />
                                        </Col>
                                        <Col span={7}>
                                            <Icon type="fork" />
                                        </Col>
                                    </Row>
                                </ProjectTag>
                            </ProjectCard>
                            <ProjectCard>
                                <ProjectName>
                                    <Icon type="project" style={{ marginRight: 5 }} />resources-navigator
                                </ProjectName>
                                <ProjectDesc>
                                    集合各种技术网站、博客、github项目
                                </ProjectDesc>
                                <ProjectTag>
                                    <Row>
                                        <Col span={10} style={{ color: '#52c41a' }}>
                                            javascript
                                        </Col>
                                        <Col span={7}>
                                            <Icon type="star" />
                                        </Col>
                                        <Col span={7}>
                                            <Icon type="fork" />
                                        </Col>
                                    </Row>
                                </ProjectTag>
                            </ProjectCard>
                            <ProjectCard>
                                <ProjectName>
                                    <Icon type="project" style={{ marginRight: 5 }} />resources-navigator
                                </ProjectName>
                                <ProjectDesc>
                                    集合各种技术网站、博客、github项目
                                </ProjectDesc>
                                <ProjectTag>
                                    <Row>
                                        <Col span={10} style={{ color: '#52c41a' }}>
                                            javascript
                                        </Col>
                                        <Col span={7}>
                                            <Icon type="star" />
                                        </Col>
                                        <Col span={7}>
                                            <Icon type="fork" />
                                        </Col>
                                    </Row>
                                </ProjectTag>
                            </ProjectCard>
                            <ProjectCard>
                                <ProjectName>
                                    <Icon type="project" style={{ marginRight: 5 }} />resources-navigator
                                </ProjectName>
                                <ProjectDesc>
                                    集合各种技术网站、博客、github项目
                                </ProjectDesc>
                                <ProjectTag>
                                    <Row>
                                        <Col span={10} style={{ color: '#52c41a' }}>
                                            javascript
                                        </Col>
                                        <Col span={7}>
                                            <Icon type="star" />
                                        </Col>
                                        <Col span={7}>
                                            <Icon type="fork" />
                                        </Col>
                                    </Row>
                                </ProjectTag>
                            </ProjectCard>
                            <ProjectCard>
                                <ProjectName>
                                    <Icon type="project" style={{ marginRight: 5 }} />resources-navigator
                                </ProjectName>
                                <ProjectDesc>
                                    集合各种技术网站、博客、github项目
                                </ProjectDesc>
                                <ProjectTag>
                                    <Row>
                                        <Col span={10} style={{ color: '#52c41a' }}>
                                            javascript
                                        </Col>
                                        <Col span={7}>
                                            <Icon type="star" />
                                        </Col>
                                        <Col span={7}>
                                            <Icon type="fork" />
                                        </Col>
                                    </Row>
                                </ProjectTag>
                            </ProjectCard>
                            <ProjectCard>
                                <ProjectName>
                                    <Icon type="project" style={{ marginRight: 5 }} />resources-navigator
                                </ProjectName>
                                <ProjectDesc>
                                    集合各种技术网站、博客、github项目
                                </ProjectDesc>
                                <ProjectTag>
                                    <Row>
                                        <Col span={10} style={{ color: '#52c41a' }}>
                                            javascript
                                        </Col>
                                        <Col span={7}>
                                            <Icon type="star" />
                                        </Col>
                                        <Col span={7}>
                                            <Icon type="fork" />
                                        </Col>
                                    </Row>
                                </ProjectTag>
                            </ProjectCard>
                        </ProjectList>
                    </Col>
                    <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }} lg={{ span: 4 }} xl={{ span: 4 }}></Col>
                </Row>
            </GithubContainer>
        )
    }
}

export default connect(null, null)(GithubPage)