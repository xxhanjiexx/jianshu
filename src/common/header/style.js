import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    z-index:1;
    position:relative; 
    height:56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`;

export const Nav = styled.div`
    width:960px;
    height:100%;
    padding-right:70px;
    box-sizing:border-box;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height:56px;
    padding:0 15px;
    font-size:17px;
    color:#333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color: #ea6f5a;
    }
`;

export  const NavSearch = styled.input.attrs({
    placeholder : '搜索'
})`
    width:160px;
    height:38px;
    outline:none;
    border:none;
    margin-top:9px;
    box-sizing:border-box;
    border-radius: 19px;
    background: #eee;
    padding: 0 20px;
    color:#555;
    font-size: 14px;
    &::placeholder{
        color:#999
    }
    &.focused{
        width:220px;
    }
    &.slide-enter{
        transition : all .2s ease-out;
    }
    &.slide-enter-active{
        width:220px;
    }
    &.slide-exit{
        transition : all .2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
`;

export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;

export const Button = styled.div`
    float:right;
    font-size:14px;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    &.reg{
        color:#ec6149;
    };
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`;

export const SearchWrapper = styled.div`
    float:left;
    position:relative;
    .zoom{
        position:absolute;
        right:5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        bottom:5px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff;
        }
    }
`;

export const SearchInfo = styled.div`
    position:absolute;
    left:0;
    top:56px;
    width:250px;
    padding:0 20px;
    border-radius:5px;
    box-shadow:0 0 8px rgba(0,0,0, .2);
    background-color:#fff;
    &:after{
        position:absolute;
        content:'';
        top:-9px;
        border-bottom:9px solid #fff;
        border-left:10px solid rgba(0, 0, 0, 0);
        border-right:10px solid rgba(0, 0, 0, 0);
    }
`;

export const SearchInfoTitle = styled.div`
    width:210px;
    height:20px;
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;

export const SearchInfoSwitch = styled.span`
    cursor : pointer;
    float: right;
    font-size: 13px;
    color: #969696;
    background-color: transparent;
    border-width: 0;
    padding: 0;
    .spin{
        display : block;
        float : left;
        font-size : 12px;
        margin-right : 2px;
        transition : all .2s ease-in;
        transform-origin : center center;
    }
`;

export const SearchInfoItem = styled.a`
    display:block;
    float: left;
    padding: 2px 6px;
    font-size: 12px;
    color: #787878;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-right:10px;
    margin-bottom:10px;
`;

export const SearchInfoList = styled.div`
    
`