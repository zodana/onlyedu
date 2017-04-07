/**
 * Created by Administrator on 2017/2/16.
 */
/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id:12345,a:b}
 */
export function urlParse () {
  let url = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = url.match(reg);

  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    });
  }

  return obj;
};

/**
 *  网络错误处理/ 弱网环境处理
 *  @param vue  vue句柄
 *  @param callBack  回调函数  （重新请求）
 */
export function netWorkError (vue, callBack) {
  vue.$store.dispatch('showNetWork', callBack.bind(vue));
}

export function deepCopy (source) {
    var result = {};
    for (var key in source) {
        result[key] = typeof source[key] === 'object' ? deepCopy(source[key]) : source[key];
    }
    return result;
}

// 网络请求根路径
export const BASE_URL = '/';

// 是否RC版本
export const IS_RC = true;
