import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
export const HeaderWrapper = styled.div`
    width:100%;
    height:112px;
    position:fixed;
    background-color:#fff;
    .WarpperRow{
        border-bottom:  1px solid #f4f4f5;
        height: 64px;
    }
    
`

export const TopWrapper = styled.div`
    .navItem{
        display: flex;
        justify-content: flex-end;
    }
`


export const BottomWrapper = styled.div`
    height:48px;
    box-shadow: 0px 2px 5px 0px #B8BDC0;
    box-size:border-box;
`

export const Logo = styled.div`
    width:100px;
    height:30px;
    margin-right:50px;
    background:url(${logoPic});
    background-size:contain;
    background-repeat:no-repeat;
`

export const ListItem = styled.li`
    font-size:15px;
    padding:0 10px;
    line-height:48px;
    display: inline;
    color:#71777c;
    &:hover{
        color:#1890ff
    }
`
export const Menu = styled.div`
    height: 64px; 
    display: flex; 
    align-items: center; 
    justify-content: center;
`

export const MenuLi = styled.div`
    height:50px;
    line-height:50px;
    Link{
        color:#71777c;
        &:hover{
            color:#1890ff
        }
    }

`

export const ListNavItem = styled.li`
    display: inline;
    padding:0 30px;
    line-height:64px;
    text-align:right;
    .navlink{
        color:#71777c;
        &:hover{
            color:#1890ff
        }
    }

`