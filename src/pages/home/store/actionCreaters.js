import * as constants from './constants';
import axios from "axios/index";
import {fromJS}from 'immutable'

export const mouseEnter = () =>({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = ()=>({
    type : constants.MOUSE_LEAVE
});

const changeHomeData = (result) =>({
    type : constants.CHANGE_HOME_DATA,
    topicList :result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList,
    writterList:result.writterList
})

export const getHomeInfo = ()=>{
    return (dispatch) =>{
        axios.get('/api/home.json').then((res)=>{
            const result = res.data.data;
            dispatch(changeHomeData(result));
        });
    }
}

const addHomeList =(list,nextPage)=>({
    type:constants.ADD_ARTICLE_LIST,
    list:fromJS(list),
    nextPage
})

export const getMoreList = (page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+page).then((res)=>{
            const result = res.data.data;
            dispatch(addHomeList(result ,page+1))
        });
    }
}

export const toggleTopShow = (show)=>({
    type:constants.TOGGLE_SCROLL_TOP,
    show
})