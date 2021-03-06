import styled from 'styled-components';

export const LoginWrapper = styled.div`
    z-index:0;
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
`

export const LoginBox = styled.div`
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
    .login{
        font-size:30px;
        font-weight: 700;
        color: #ea6f5a;
    }
`;

export const Input = styled.input`
    display:block;
    width: 200px;
    height:30px;
    margin:10px 0 10px 90px;
    line-height:30px;
    padding:0 10px;
    color:#777;
`

export const Button = styled.button`
    margin: 10px auto;
    width: 200px;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
`

