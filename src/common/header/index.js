import React, { Component } from 'react'
import { HeaderWrapper, TopWrapper, ListNavItem, BottomWrapper, Logo, ListItem, Menu,MenuLi } from './style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Input, Icon, Drawer, Tooltip } from 'antd';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuShow: false,
        }
        this.handleShowMenu = this.handleShowMenu.bind(this);
        this.handleCloseMenu = this.handleCloseMenu.bind(this);

    }
    render() {
        const { Search } = Input;
        return (
            <HeaderWrapper>
                <Row className={'WarpperRow'}>
                    <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }} lg={{ span: 4 }} xl={{ span: 4 }}></Col>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 16 }} xl={{ span: 16 }}>
                        <TopWrapper>
                            <Row type="flex" align="middle">
                                <Col xs={{ span: 6, offset: 1 }} sm={{ span: 4, offset: 2 }} md={{ span: 4, offset: 2 }} lg={{ span: 4, offset: 0 }} xl={{ span: 4, offset: 0 }}>
                                    <Link to='/'><Logo /></Link>
                                </Col>
                                <Col xs={{ span: 13, offset: 1 }} sm={{ span: 15, offset: 0 }} md={{ span: 6, offset: 0 }} lg={{ span: 7, offset: 0 }} xl={{ span: 7, offset: 0 }}>
                                    <Search style={{ width: 200, }} onSearch={value => console.log(value)} />
                                </Col>
                                <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 12 }} lg={{ span: 13 }} xl={{ span: 13 }}>
                                    <ul className={'navItem'}>
                                        <ListNavItem>
                                            <Link to='/' className={'navlink'}>投稿报错</Link>
                                        </ListNavItem>
                                        <ListNavItem>
                                            <Link to='/' className={'navlink'}>关于我们</Link>
                                        </ListNavItem>
                                        <ListNavItem>
                                            <Link to='/' className={'navlink'}>登录</Link>
                                        </ListNavItem>
                                    </ul>
                                </Col>
                                <Col xs={{ span: 3 }} sm={{ span: 3 }} md={{ span: 0 }} lg={{ span: 0 }} xl={{ span: 0 }}>
                                    <Menu onClick={this.handleShowMenu}>
                                        <Icon type="menu" />
                                    </Menu>
                                    <Drawer
                                        title="菜单"
                                        placement="right"
                                        closable={false}
                                        onClose={this.handleCloseMenu}
                                        visible={this.state.menuShow}
                                    >
                                         <ul>
                                            <MenuLi><Link to='/' className={'navlink'}>投稿报错</Link></MenuLi>
                                            <MenuLi><Link to='/' className={'navlink'}>关于我们</Link></MenuLi>
                                            <MenuLi><Link to='/' className={'navlink'}>登录</Link></MenuLi>
                                         </ul>
                                    </Drawer>
                                </Col>
                            </Row>
                        </TopWrapper>
                    </Col>
                    <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }} lg={{ span: 4 }} xl={{ span: 4 }} style={{ height: 64 }}></Col>
                </Row>
                <Row>
                    <BottomWrapper>
                        <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }} lg={{ span: 4 }} xl={{ span: 4 }}></Col>
                        <Col xs={{ span: 24, }} sm={{ span: 22, offset: 2 }} md={{ span: 22, offset: 2 }} lg={{ span: 16, offset: 0 }} xl={{ span: 16, offset: 0 }} style={{ height: 48, overflowX: 'auto' }}>
                            <ul style={{ minWidth: 375 }}>
                                <ListItem>资源网站</ListItem>
                                <ListItem>Github</ListItem>
                                <ListItem>微博</ListItem>
                                <ListItem>掘金</ListItem>
                                <ListItem style={{ float: 'right', marginRight: 28 }}>
                                    <Row>
                                        <Col xs={{ span: 0, }} sm={{ span: 0 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 24 }}>
                                            <Tooltip title="标签设置">
                                                <Icon type="setting" />
                                            </Tooltip>
                                        </Col>
                                    </Row>
                                </ListItem>
                            </ul>
                        </Col>
                        <Col xs={{ span: 0 }} sm={{ span: 0 }} md={{ span: 0 }} lg={{ span: 4 }} xl={{ span: 4 }}></Col>
                    </BottomWrapper>
                </Row>
            </HeaderWrapper>
        )
    }
    handleShowMenu() {
        this.setState({
            menuShow: true,
        });
    }

    handleCloseMenu(){
        this.setState({
            menuShow: false,
        });
    }
}

export default connect(null, null)(Header)