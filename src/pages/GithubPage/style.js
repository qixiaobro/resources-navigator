import styled from 'styled-components'

export const GithubContainer = styled.div`
    padding-top:132px;
    width:100%;
`

export const ProjectList = styled.div`

`
export const ProjectCard = styled.div`
    padding:15px;
    width:250px;
    box-sizing:border-box;
    background:#fff;
    border-radius:10px;
    margin-right:10px;
    margin-bottom:20px;
    float:left;
    border:1px solid #D8E0E8;
    cursor:pointer;
    :hover{
        box-shadow:1px 5px 10px -2px #B8BDC0;
    }
`

export const ProjectName = styled.div`
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    font-weight:bold;
`

export const ProjectDesc = styled.div`
    margin-top:10px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size:12px;
    color:#71777c;
`

export const ProjectTag = styled.div`
    margin-top:10px;
`