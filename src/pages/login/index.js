import React ,{PureComponent}from 'react';
import {connect} from 'react-redux';
import {actionCreater} from './store';
import {Redirect}from 'react-router-dom';
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style'

class Login extends PureComponent{
    render(){
        const {loginStatus} = this.props;
        if(!loginStatus){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <h2 className={'login'}>登录</h2>
                        <Input placeholder='账号' innerRef={(input)=>{this.account = input}}/>
                        <Input placeholder='密码' type='password' innerRef={(input)=>{this.paaword = input}}/>
                        <Button onClick={()=>this.props.login(this.account,this.paaword)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            );
        }else{
            return <Redirect to='/'/>
        }


    }
}

const MapStateToProps = (state) =>({
    loginStatus: state.getIn(['login','login'])
})

const MapDispatchToProps = (dispatch)=>({
    login(accountElem,passwordElem){
        dispatch(actionCreater.login(accountElem.value,passwordElem.value));
        //console.log(accountElem.value,passwordElem.value)
    }
})

export default connect(MapStateToProps,MapDispatchToProps)(Login);
