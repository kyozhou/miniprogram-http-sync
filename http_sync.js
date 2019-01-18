import regeneratorRuntime from './regenerator-runtime'

module.exports = {
  httpRequestSync: async function (params) {
    let _this = this;
    let requestResult = await _this.httpRequestPromised(params)
      .then((response) => {
        return response;
      });
    return requestResult;
  },
  httpRequestPromised: function (params) {
    if (params && params.url) {
      let promise = new Promise((resolved, rejected) => {
        wx.request({
          url: params.url,
          method: params.method | 'GET',
          data: params.data | {},
          header: params.header | {},
          dataType: params.dataType | 'json',
          responseType: params.responseType | 'text',
          success: function (result) {
            resolved(result);
          },
          fail: function (result) {
            rejected(result)
          }
        });
      });
      return promise;
    } else {
      return false;
    }
  }
};
