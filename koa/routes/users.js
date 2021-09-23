var router = require('koa-router')();
var axios = require('axios')
router.prefix('/users');

router.get('/', function *(next) {
  (() => {
    let config = {
      method: 'get',
      url:'https://www.zhihu.com/api/v3/feed/topstory/recommend?session_token=b92e76f1d1ef60fd381853858680bfca&desktop=true&page_number=3&limit=6&action=down&after_id=11&ad_interval=-10',
      headers: {
        'cookie': ' _zap=1e7fce5e-2481-4429-9dd3-bdb8f08ca553; d_c0="AACaqW-DwBKPTkrFvb3sRuKyHf5zg4qu7Iw=|1614937002"; _xsrf=4LRYBnkBNfRSVM5JYQbmANr8V1hN91wc; __snaker__id=zAEvzKWIleoGpzG7; _9755xjdesxxd_=32; YD00517437729195%3AWM_TID=eRSVm4zjTjpAVVVFBEM6jP1yPS6Ob1DG; __utmv=51854390.100-1|2=registration_date=20150302=1^3=entry_date=20150302=1; q_c1=387577acb6fd4a79893de21e66fa92f3|1631170336000|1628241878000; __utma=51854390.518029118.1628241879.1631870076.1631929594.15; __utmz=51854390.1631929594.15.15.utmcsr=zhihu.com|utmccn=(referral)|utmcmd=referral|utmcct=/question/487561336; YD00517437729195%3AWM_NIKE=9ca17ae2e6ffcda170e2e6ee8cd859b0efb999f841fc968ba7c54a968b9f84f48092929caebc66f3b4b692db2af0fea7c3b92a8aad8ba4d180a7b496a3f56582afb7a8bc68e989ff82ed49f68ba283f35cf48dfd9ac2628c98aedaf750889bbf88d25da886fcafd652a7af9fb1f865a99ca385e25d9ceafba3d56d8288fba5f63ff2eba7a8db25b6bcbfbab574958ee1d1d83994b389b0fc478b8eababb27af5bc9caee96eb0ab8189b83ce997e596e75e8bec81b8d437e2a3; YD00517437729195%3AWM_NI=JsECRtelZBvoBqyG9l%2BW1anC6UnbpP0S3yCjHHb9tDDEqgSWdZ4NWZeqQPuokDmdcWX65BVgBX5Dw525iGX%2FvdqY6xWR%2F0U3PmGOyMIReJ3r7dTMjfluOh50%2BI%2BudVI4OWQ%3D; l_n_c=1; n_c=1; ref_source="other_https://www.zhihu.com/signin?next=/"; o_act=login; Hm_lvt_98beee57fd2ef70ccdd5ca52b9740c49=1632307534,1632360242,1632378293,1632379198; r_cap_id="NzIxMWUyMDZkZDg5NGQ2ZDlhNTcxYjdiNjE0MzFhNjQ=|1632381591|3b089b7efa5a951acaea9287307dce0e2b14d190"; cap_id="YmY4YTI1YjdkMzllNGRlYWJkYjNlYWI1MGZlODQ4ODA=|1632381591|e010505778e856cf5afc0a527f2ef800f9a64bcb"; l_cap_id="OGExYjdhZDQwMzUwNDYxMzg3YTExNDU4OTllMDg5OWY=|1632381591|b44dd08663f510d9a4c3b05f1712a5e4c7a5c2e5"; SESSIONID=4mFqIbrbFQm8c7wBaJVFPZ9suk7CMe1sQ967gGnokSl; osd=UFocBkhya84QU4S4UHX6Guuo229JRg2EZxvmwT41OqgkNrLPGe8tiHZSj79a4ZjYdRP4g6hETGog_RAZvO8Dgqk=; JOID=VF0UBEh2bMYSU4C_WHf6Huyg2W9NQQWGZx_hyTw1Pq8sNLLLHucviHJVh71a5Z_QdxP8hKBGTG4n9RIZuOgLgKk=; gdxidpyhxdE=1jYUJS4A27zZCUg2vcA%5CooZsTjuWG%2FpnrzAi7UC7j%2BiExsi8DcLWEYDpXVU8JybP%2BMpQqa3NIYnSb2DcOgNVa%2Bgqh88kmfMqbebAxt2%2BVQwP%2BBWSnB2WdAA6I96ldTa8L07A%5CAWUhxhq%5Cx8Z%2B89V74Sj%5CrSm%2BXVxXxZNBKfKC0DgXZvP%3A1632388379431; captcha_session_v2="2|1:0|10:1632387479|18:captcha_session_v2|88:ZzN6Wjd6eVhPOGg3Tk9RNGt6RkxHNUgzZzVhR0J4SVk1ZE9DTCtBSEE1TEtKUWJjVG1jbm5ZZlBkL3NCcmJCWQ==|61f4fb91c9ed37380fc7b889d236a74d5de418b8d28883b20a423bbc559045ef"; captcha_ticket_v2="2|1:0|10:1632387483|17:captcha_ticket_v2|704:eyJ2YWxpZGF0ZSI6IkNOMzFfTlhOUDg2Ymo3TmM1Y2JtN1ouXzVrbXdmRWdCY1JpbDlLSDVWUEFhVkhmYm1nZGQ1R0Z3WS1ub241UFo4OFNlZWM1ME5ibzFfNFMueXgyOEs4OEllOWZOU0d2VUhVakpGb0tBWDRod3BoU01OYTd4MVNGRHNQTy1iYkF2ZWdsUGpsem1qVGRSV3BZLUZWTXl6TERBZ1RwUDZZWHdvUWpsUTdHaGxBUk1HdHFTcGY1VFcyMS1Jb0R5SnRsU0ZBcGtKTmRQU3laaGhwQlRSNkZnVk9VOVdPX0ctQWxuS21ybzR5NHkxTDZXYkNNZFdITVc5Z1AwMFp1VnotLUY0c0lYelhydXJ5WjFkWXVHWmZqaDBmeGtvRk85U2dxZWktRXFjd2t6MnlLQXNiaTY5dUF1THloVV96cWY4NldxLm42aXlDc3loaHZnOV9yNGcuTHB3dnV2SVlNNEpKNEQ3ODBLNVpULkVfbC4yYkhvUGQ0UkF5bHZBNFJSOTVyWkdJWlprUzI0ZGluLU8xWXp1T1pxeVNpd0dvbGVmci5nTVVvRm92Q3N0Z1JsOWpRTFN5c3Qwakp1UVAtXzhMZl9BZmx0NENkT25QOWpncnh0bkFaWFg4Z2NXbzFDbjVhUWNxdzY2UlVoYzBYeWRwYUkyT3dyUnJPUk9FRGJzUlpBMyJ9|bb7950f98b316988f86f82884e92fe72a78858f738685faf379766f7ce1003d2"; z_c0="2|1:0|10:1632387484|4:z_c0|92:Mi4xZmpZQkFRQUFBQUFBQUpxcGI0UEFFaVlBQUFCZ0FsVk5uSTg1WWdBRnNMWV94LXI0Z05wZXZtbGhZY1NUWHZtZlRn|0db746a98a9c396120c4152798099c556b4388f9c5ac9c3c03ca364e6f9ca252"; Hm_lpvt_98beee57fd2ef70ccdd5ca52b9740c49=1632388177; tst=r; KLBRSID=4efa8d1879cb42f8c5b48fe9f8d37c16|1632389116|1632377770; KLBRSID=4efa8d1879cb42f8c5b48fe9f8d37c16|1632389138|1632377770',
        'referer': ' https://www.zhihu.com/',
        'sec-ch-ua': ' "Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
        'sec-ch-ua-mobile': ' ?0',
        'sec-ch-ua-platform': ' "Windows"',
        'sec-fetch-dest': ' empty',
        'sec-fetch-mode': ' cors',
        'sec-fetch-site': ' same-origin',
        'user-agent': ' Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36',
        'x-ab-param': ' tp_zrec=1;qap_question_visitor= 0;pf_noti_entry_num=2;se_ffzx_jushen1=0;tp_topic_style=0;tp_dingyue_video=0;qap_question_author=0;zr_slotpaidexp=1;tp_contents=1;zr_expslotpaid=3;top_test_4_liguangyi=1;pf_adjust=1',
        'x-ab-pb': ' CrQBnwJCBOwKEgUyBdwLCgT2AqAD4AtXAwsEbAQOBfgDKgSbCyoC0QRFBTQMjgN1BDcMbAPgBBEFVgwBCxsAhAK3A1ADUgu0ALkCPwUyA/MDDwvoAxUF1wuMAswCBwy1C2oB1wLMBOkEKQXjBPQLYAtpAcEEiQwzBUcAdAHWBNgC9wM0BNoEzwu0Cj8AOwJ9AuQKogMUBccCVwThBMoCTwNkBEABpgRDABkFoQP0AzMERQRyA+EDEloCAAEAAAABAAAAAAABAAEAAAAFAAABAQEBAAABAQAAAAABABUAAAABAgEAAAABAwAAAAEAAgAAAAEAAAAAAAABAAELAAACAQAAAAABAQAAAQEAFQAAAAAAAQI=',
        'x-api-version': ' 3.0.53',
        'x-requested-with': ' fetch',
        'x-zse-93': ' 101_3_2.0',
        'x-zse-96': ' 2.0_aLFqFUL0e82xUwN0m0F8gq98FGYxe8S8BTS8QAH8NBxf'
      }
    }
    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
    }).catch(function (error) {
      console.log(error);
    });
  })()
  this.body = 'this is a users response!';
});

router.get('/bar', function *(next) {

  this.body = 'this is a users/bar response!';
});

module.exports = router;
