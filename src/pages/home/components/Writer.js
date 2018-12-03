import React ,{PureComponent}from 'react';
import {connect} from 'react-redux';
import {
    WritterTitle,
    WritterItem,
    WrittenInfo
}from '../style';
class Writer extends PureComponent{
    render(){
        const {list} = this.props;
        return(
            <div>
                <WritterTitle>
                    <p className={'left'}>推荐作者</p>
                    <p className={'right'}>换一批</p>
                </WritterTitle>
                {
                    list.map((item)=>{
                        return(
                            <WritterItem>
                                <img className={'pic'} alt='' src={item.get('src')}/>
                                <WrittenInfo>
                                    <p className={'name'}>{item.get('name')}</p>
                                    <p className={'like'}>{item.get('like')}</p>
                                </WrittenInfo>
                                <p className={'written-follow'}>关注</p>
                            </WritterItem>
                        );
                    })
                }
            </div>
        );
    }
}

const MapStateToProps = (state)=>({
    list:state.getIn(['home','writterList'])
})



export default connect(MapStateToProps,null)(Writer);