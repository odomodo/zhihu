const router = require('koa-router')()
const axios = require('axios')
const cookie = ''
const session_token = ''
const headers = {
  'cookie': cookie,
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
router.get('/', async (ctx, next) => {
  const  getZhihu = async () => {
    let page_number = ctx.query.page_number || 1
    let limit = ctx.query.limit || 30
    let config = {
      method: 'get',
      url:`https://www.zhihu.com/api/v3/feed/topstory/recommend?session_token=${session_token}&desktop=true&page_number=${page_number}&limit=${limit}&action=down&after_id=11&ad_interval=-10`,
      headers
    }
    let { code, data } = await axios(config)
    let arr = data.data.filter(v => {
      return v.target && v.target.type !== 'zvideo'
    })
    return new Promise((resolve, reject) => {
      resolve(arr)
    })
  }
  ctx.body = await getZhihu()
})

router.get('/comment', async (ctx, next) => {
  const  getZhihu = async () => {
    let id = ctx.query.id
    let config = {
      method: 'get',
      url:`https://www.zhihu.com/api/v4/answers/${id}/root_comments?order=normal&limit=20&offset=0&status=open`,
      headers
    }
    let { code, data } = await axios(config)
    return new Promise((resolve, reject) => {
      resolve(data)
    })
  }
  ctx.body = await getZhihu()
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
