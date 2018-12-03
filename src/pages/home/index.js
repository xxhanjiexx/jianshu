import React ,{PureComponent}from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {connect} from 'react-redux';
import {actionCreater} from './store'
import {
    HomeWrapper,
    HomeRight,
    HomeLeft,
    BackTop
} from './style'
class Home extends PureComponent{

    handleScrollTop(){
        window.scrollTo(0,0);
    }

    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img'  src="//upload.jianshu.io/admin_banners/web_images/4448/d9a0fd8f0622d2323161b68d2123c7f28837d28f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="540"/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
            </HomeWrapper>
        );
    }

    componentDidMount() {
       this.props.changeHomeData();
       this.bindEvents();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow);
    }

    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow);
    }
}

const MapStateToProps = (state)=>({
    showScroll:state.getIn(['home','showScroll'])
})

const MapDispatchToProps = (dispatch)=>({
    changeHomeData(){
        dispatch(actionCreater.getHomeInfo());
    },
    changeScrollTopShow(){
        //console.log(document.documentElement.scrollTop);
        if(document.documentElement.scrollTop > 400){
            dispatch(actionCreater.toggleTopShow(true))
        }else{
            dispatch(actionCreater.toggleTopShow(false))
        }
    }
})

export default connect(MapStateToProps,MapDispatchToProps)(Home);