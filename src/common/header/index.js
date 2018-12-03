import React ,{Component}from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList
} from'./style';
import  {actionCreators} from './store/';
import {actionCreater as loginactionCreators }from '../../pages/login/store';
import {Link} from 'react-router-dom';

class Header extends Component{
    getListArea(){
        const { focused ,list ,page ,mouseIn ,totalPage ,handleMouseEnter ,handleMouseLeave ,handleChangePage} = this.props;
        const newList = list.toJS()  ;//list数组需要先转换成immutable类型数组才能进行赋值
        const pageList = [];

        if(newList.length){
            for (let i = (page - 1) *10; i<page * 10; i++ ) {
             pageList.push(
                    <SearchInfoItem key = {newList[i]}>{newList[i]}</SearchInfoItem>
            )
        }
        }

        if(focused || mouseIn){
            return(
                <SearchInfo onMouseEnter = {handleMouseEnter}
                            onMouseLeave = {handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick = {() => handleChangePage(page,totalPage,this.spinIcon)}>
                            <i ref={(icon) =>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );
        }else return null;
    }
    render(){
        const {focused , handleInputFocus , handleInputonBlur ,list ,login,loginout} = this.props;
        return(
            <HeaderWrapper>
                <Link to='/'>
                    <Logo/>
                </Link>
                <Nav>
                    <NavItem className = 'left active'>
                        <i className="iconfont">&#xe682;</i>
                        首页
                    </NavItem>
                    <NavItem className = 'left'>
                        <i className="iconfont">&#xe609;</i>
                        下载APP
                    </NavItem>
                    {
                        login ? <NavItem onClick={loginout} className = 'right'>退出</NavItem> :
                            <Link to='/login'><NavItem className = 'right'>登录</NavItem></Link>
                    }
                    <NavItem className = 'right'>
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout = {200}
                            in = {focused}
                            classNames = 'slide'
                        >
                            <NavSearch
                                className = {focused ? 'focused' : ''}
                                onFocus={() =>handleInputFocus(list)}
                                onBlur={handleInputonBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className = {focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60b;</i>
                        {this.getListArea()}
                    </SearchWrapper>
                    <Addition>
                        <Link to='/write'>
                            <Button className = 'writting'>
                                <i className="iconfont">&#xe615;</i>
                                写文章</Button>
                        </Link>
                        <Button className = 'reg'>注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        focused : state.getIn(['header' , 'focused']),
            //state.get('header').get('focused')  等价
        list : state.getIn(['header' , 'list']),
        page : state.getIn(['header' , 'page']),
        totalPage : state.getIn(['header' , 'totalPage']),
        mouseIn:state.getIn(['header' , 'mouseIn']),
        login:state.getIn(['login','login'])
    }
}

const mapDispatchToProps = (dispatch)=>{//将store里面的state跟组件的props做映射
    return{
        handleInputFocus(list){
            //避免无意义的ajax请求
            (list.size === 0 ) &&dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputonBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle = parseInt(originAngle , 10);
            }else{
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle + 360)+'deg)';
            //spin.style.transform = 'rotate('+(originAngle + 360)+')deg';
            if(page < totalPage){
                dispatch(actionCreators.changePage(page + 1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
            console.log(page, totalPage);
        },
        loginout(){
            dispatch(loginactionCreators.loginout());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);