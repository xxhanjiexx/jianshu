import styled from 'styled-components';

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin: 0 auto;
`;
export const HomeLeft = styled.div`
    float:left;
    width:625px;
    margin-left: 15px;
    padding-top:30px;
    .banner-img{
        width:625px;
        height:270px;
    }
`;

export const HomeRight = styled.div`
    width:280px;
    float:right;
`;

export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    border-bottom:1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float:left;
    line-height:32px;
    background:#f7f7f7;
    padding-right:11px;
    margin: 0 18px 18px 0;
    border:1px solid #dcdcdc;
    border-radius:4px;
    font-size: 14px;
    .topic-pic{
        display:block;
        float:left;
        margin-right:10px;
        height:32px;
        width:32px;
    }
`;

export const MoreHotTopic = styled.div`
    display: inline-block;
    margin-top:9px;
    font-size:14px;
    color:#787878;
`;

export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:block;
        width:125px;
        height:100px;
        float:right;
        border-radius:5px;
    }
`;

export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        font-size: 18px;
        font-weight: 700;
        margin: -7px 0 4px;
    }
    .desc{
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const ListMeta = styled.div`
    padding-right: 0!important;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    .meta{
        margin-right: 10px;
        color: #b4b4b4;
    }
`;

export const RecommendWrapper = styled.div`
    margin:30px 0 30px 0;
    width:280px;
`;

export const RecommendItem = styled.div`
    width:280px;
    height:50px;
    margin-bottom:6px;
    border-radius:4px;
    background:url(${(props)=> props.imgUrl});
    background-size:contain;
`;

export const DownloadApp = styled.div`
    overflow:hidden;
    margin-bottom:30px;
    padding:10px 22px;
    width:100%;
    border: 1px solid #f0f0f0;
    border-radius:6px;
    background-color:#fff;
    .pic{
        display:block;
        width: 60px;
        height: 60px;
        opacity: .85;
        float:left;
        border-radius:5px;
    }
`;

export const DownloadInfo = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    margin-top:14px;
    .title{
        font-size: 15px;
        color: #333;
    }
    .desc{
        margin-top: 8px;
        font-size: 13px;
        color: #999;
    }
`;

export const DownloadQRcode = styled.div`
    position:absolute;
    height:180px;
    width:180px;
    margin-top:90px;
    margin-left:50px;
    border:1px solid #000000;
    border-radius:7px;
    background:white;
    .pic{
        height:160px;
        width:160px;
        margin:10px 10px;   
    }
`;

export const WritterTitle = styled.div`
    font-size: 14px;
    color: #969696;
    .right{
        float:right;
    }
    .left{
        float:left;
    }
`;

export const WritterItem = styled.div`
    float:left;
    margin-top:15px;
    width:280px;
    height:47px;
    .pic{
        float:left;
        width:48px;
        height:48px;
        border: 1px solid #ddd;
        border-radius: 50%;
    }
    .written-follow{
        float: right;
        margin-top: -30px;
        padding: 0px;
        font-size: 13px;
        color: #42c02e;
    }
`;

export const WrittenInfo = styled.div`
    padding-top:8px;
    margin-left:60px;
    .name{
        font-size: 14px;
    }
    .like{
        margin-top: 5px;
        font-size: 12px;
        color: #969696;
    }
`

export const LoadMore = styled.div`
    width: 100%;
    height:40px;
    margin: 30px auto 60px;
    border-radius: 20px;
    line-height:40px;
    text-align:center;
    color: #fff;
    background-color: #a5a5a5;
    display: block;
    cursor:pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    height:50px;
    width:50px;
    bottom: 40px;
    right: 40px;
    line-height:60px;
    text-align:center;
    cursor: pointer;
    font-size:12px;
    color: #999;
    background-color:#fff;
    border-radius:5px;
    border:1px solid #dcdcdc;
`
