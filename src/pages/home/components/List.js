import React ,{PureComponent}from 'react';
import {connect} from 'react-redux';
import {
    ListItem,
    ListInfo,
    ListMeta,
    LoadMore
} from '../style';
import {actionCreater} from '../store';
import {Link} from 'react-router-dom'

class List extends PureComponent{
    render(){
        const{list,getMoreList,page} = this.props;
        return(
            <div>
                {(list).map((item,index)=>{
                    return(//item.get('id')
                        <Link key = {index} to={'/detail/'+item.get('id')}>
                            <ListItem >
                                <img className={'pic'} src={item.get('imgUrl')} alt = ''/>
                                <ListInfo>
                                    <h3 className={'title'}>{item.get('title')}</h3>
                                    <p className={'desc'}>{item.get('desc')}</p>
                                </ListInfo>
                                <ListMeta>
                                    <span className={'meta'}>江上听雨</span>
                                    <span className={'meta'}>25</span>
                                    <span className={'meta'}>7</span>
                                </ListMeta>
                            </ListItem>
                        </Link>
                );})}
                <LoadMore onClick={()=>getMoreList(page)}>
                    阅读更多
                </LoadMore>
            </div>
        );
    }
}

const MapDispatchToProps = (dispatch)=>({
    getMoreList(page){
        dispatch(actionCreater.getMoreList(page))
    }
})

const MapStateToProps = (state)=>({
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
})

export default connect(MapStateToProps,MapDispatchToProps)(List);