"use strict";

module.exports = {
Contents: function(Token,Id) {
  return {
  method: 'get', 
  url: "/val/content/v1/contents",
  request:{
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36 Edg/94.0.992.31",
    "Accept-Language": "ko,en;q=0.9,en-US;q=0.8",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://developer.riotgames.com",
    "X-Riot-Token": Token
  },
    header:{
    "Date": "Mon, 27 Sep 2021 03:00:09 GMT",
    "Content-Type": "application/json;charset=utf-8",
    "Transfer-Encoding": "chunked",
    "Connection": "keep-alive",
    "X-Riot-Edge-Trace-Id": Id
    }
  }
}
}
