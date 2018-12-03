import React ,{PureComponent}from 'react';
import {connect} from 'react-redux';
import {withRouter}from 'react-router-dom';
import {actionCreater} from './store';
import {
    DetailWrapper,
    Header,
    Auther,
    Content
} from './style'

class Detail extends PureComponent{
    render(){
        //console.log(this.props.match.params);
        return(
            <DetailWrapper>
                <Header>
                    {this.props.title}
                </Header>
                <Auther>
                    作者
                </Auther>
                <Content dangerouslySetInnerHTML={{__html:this.props.content}}/>
            </DetailWrapper>
        );
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}

const MapDispatchToProps = (dispatch)=>({
    getDetail(id){
        dispatch(actionCreater.getDetail(id));
    }
})

const MapStateToProps = (state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})

export default connect(MapStateToProps,MapDispatchToProps)(withRouter(Detail));