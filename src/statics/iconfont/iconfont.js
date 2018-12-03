import {injectGlobal} from 'styled-components';

injectGlobal`
@font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1539939093756'); /* IE9*/
    src: url('./iconfont.eot?t=1539939093756#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
        url('./iconfont.ttf?t=1539939093756') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
        url('./iconfont.svg?t=1539939093756#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`

