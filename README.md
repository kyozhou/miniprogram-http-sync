# miniprogram-http-sync
微信小程序http请求同步封装

### How to use?
##### Step 1, put http-sync.js and regenerator-runtime.js to directory 'utils' 
##### Step 2, import http-sync to your page
```
import httpSync from '../../utils/http-sync'
```
##### Step 3, try to call...
```
console.log(httpSync.httpRequestSync({
    url: 'https://your.domain.com'
}));
```
