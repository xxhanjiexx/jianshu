import React ,{PureComponent}from 'react';
import {connect} from 'react-redux';
import {
    RecommendWrapper,
    RecommendItem,
    DownloadApp,
    DownloadInfo,
    DownloadQRcode
}from '../style';
import { actionCreater } from '../store/'
class Recommend extends PureComponent{
    getQrcode(show){
        if(show){
            return(
                <DownloadQRcode>
                    <img className={'pic'} src={'//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'}
                         alt={"Download index side qrcode"}/>
                </DownloadQRcode>
            )
        }else
            return null
    }
    render(){
        const {list,mouseIn} = this.props;
        return(
            <RecommendWrapper>
                {this.getQrcode(mouseIn)}
                {list.map((item)=>(
                    <RecommendItem imgUrl = {item.get('imgUrl')} key = {item.get('id')}/>
                ))}
                <DownloadApp
                    onMouseEnter= {()=>{this.props.handleMouseEnter()}}
                    onMouseLeave={() =>{this.props.handleMouseLeave()}}>
                    <img className={'pic'} src={'//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png '}
                         alt="Download index side qrcode"/>
                    <DownloadInfo>
                        <p className={'title'}>下载简书手机APP  ></p>
                        <p className={'desc'}>随时随地发现和创作内容</p>
                    </DownloadInfo>

                </DownloadApp>
            </RecommendWrapper>
        );
    }
}

const MapStateToProps = (state)=>({
    list:state.getIn(['home','recommendList']),
    mouseIn:state.getIn(['home','mouseIn'])
})

const MapDispatchToProps = (dispatch) =>{
    return{
        handleMouseEnter(){
            dispatch(actionCreater.mouseEnter());//console.log('enter')
        },
        handleMouseLeave(){
            dispatch(actionCreater.mouseLeave());//console.log('leave')
        }
    }
}
export default connect(MapStateToProps,MapDispatchToProps)(Recommend);