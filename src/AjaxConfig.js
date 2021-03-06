(function (nx, global) {

  nx.declare('nx.net.AjaxConfig', {
    statics: {
      defaults: {
        method: 'GET',
        dataType: 'json',
        /*(async)Not support:false,Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience. For more help, check http://xhr.spec.whatwg.org/*/
        async: true,
        timeout: -1,
        data: null,
        headers: {},
        contentType: null,
        context:null,
        error: nx.noop,
        success: nx.noop,
        complete: nx.noop
      },
      READY_STATE: {
        DONE: 4,
        HEADERS_RECEIVED: 2,
        LOADING: 3,
        OPENED: 1,
        UNSENT: 0
      },
      ERROR_CODE: {
        TIMEOUT: 1000,
        REQUEST: 1001
      },
      CONTENT_TYPE: {
        GET: 'text/plain;charset=UTF-8',
        POST: 'application/json;charset=UTF-8'
      }
    }
  });

}(nx, nx.GLOBAL));
