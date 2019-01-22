# miniprogram-http-sync
微信小程序http请求同步封装

### How to use?
##### Step 1, put http-sync.js and regenerator-runtime.js to directory 'utils' 
##### Step 2, import http-sync and regenerator-runtime to your Page
```
import httpSync from '../../utils/http-sync'
import httpSync from '../../utils/regenerator-runtime'
```
##### Step 3, add 'async' to the head of function's definition, and add 'await' to your calling place
```
onClick: async function(e) {
    ...
    console.log(await httpSync.httpRequestSync({
        url: 'https://your.domain.com'
    }));
    ...
}
```
