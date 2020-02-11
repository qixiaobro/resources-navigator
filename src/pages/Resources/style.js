import styled from 'styled-components'

export const ResourcesContaier=styled.div`
    padding-top:132px;
    width:100%;
`


export const SideMenu = styled.div`
    padding:10px 0;
    box-sizing:border-box;
    background:#fff;
    border-radius:5px;
    border:1px solid #D8E0E8;
    text-align:center;
    
`

export const MenuList = styled.li`
    height:35px;
    width:100px;
    box-sizing:border-box;
    border-radius:5px;
    line-height:35px;
    margin:0 auto;
    color:#909090;
    // border-top:1px solid #f4f4f5;
    &.active{
        color:#fff;
        background:#1890FF;
        :hover{
            color:#fff;
        }
    }

    :hover{
        color:#1890FF;
    }
    cursor:pointer;
`

export const Resource = styled.div`
    position:relative;
`

export const ResourceTitle = styled.div`
    font-size:14px;
`

export const ResourceList = styled.div`
    margin-top:15px;
`

export const ResourceItem = styled.div`
    background:#fff;
    width:152px;
    display:inline-block;
    border-radius:10px;
    padding:10px 15px;
    box-sizing:border-box;
    margin-right:10px;
    margin-bottom:20px;
    border:1px solid #D8E0E8;
    cursor:pointer;
    :hover{
        box-shadow:1px 5px 10px -2px #B8BDC0;
    }

`

export const ItemLogo = styled.div`
    width:35px;
    height:35px;
    display:inline-block;
    img{
        width:35px;
        height:35px; 
    }
    float:left;
`

export const ItemName = styled.div`
    width:75px;
    height:35px;
    line-height:35px;
    display:inline-block;
    float:left;
    margin-left:10px;
    font-weight:bold;
    text-align:center;
`

export  const ItemDesc = styled.div`
    width:120px;
    padding:10px 0 0 0;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    font-size:12px;
    color:#71777c;
`
