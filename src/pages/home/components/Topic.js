import React ,{PureComponent}from 'react';
import {connect} from 'react-redux';
import {TopicWrapper,TopicItem,MoreHotTopic} from '../style'

class Topic extends PureComponent{
    render(){
        const {list} = this.props
        return(
            <TopicWrapper>
                {
                    list.map((item)=>(
                            <TopicItem key = {item.get('id')}>
                                <img
                                    className='topic-pic'
                                    src={item.get('imgUrl')}
                                    alt = ''
                                />
                                {item.get('title')}
                            </TopicItem>
                        )
                    )
                }

                <MoreHotTopic>
                    更多热门专题  >
                </MoreHotTopic>
            </TopicWrapper>
        );
    }
}

const MapStateToProps = (state)=>({
    list:state.getIn(['home','topicList'])
});


export default connect(MapStateToProps,null)(Topic);