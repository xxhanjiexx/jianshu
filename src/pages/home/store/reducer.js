import {fromJS} from 'immutable';
import * as constants from './constants'

const defaultState = fromJS({
    mouseIn:false,
    topicList:[],
    articleList:[],
    recommendList:[],
    writterList:[],
    articlePage:1,
    showScroll:false
});

export default (state =defaultState , action )=>{
    switch(action.type){
        case constants.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case constants.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                'topicList':fromJS(action.topicList),
                'articleList':fromJS(action.articleList),
                'recommendList':fromJS(action.recommendList),
                'writterList':fromJS(action.writterList)
            });
        case constants.ADD_ARTICLE_LIST:
            return state.merge({//对象的拼接，用法与js数组中的concat()相同，返回一个新的对象。
                'articleList':state.get('articleList').concat(action.list),
                'articlePage':action.nextPage
            });
        case constants.TOGGLE_SCROLL_TOP:
            return state.set('showScroll',action.show)
        default:
            return state;
    }


}