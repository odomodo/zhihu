<template>
  <div class="wrap" v-if="list.length > 0">
    <div class="list" v-for="(v, i) in list" :key="i">
      <div>
        <div class="title">
          <a
          :href="`https://www.zhihu.com/question/${v.target.question?.id}/answer/${v.target.id}`"
          target="_blank"
          >
            <h2>{{ v.target.title || v.target.question.title}}</h2>
          </a>
        </div>
        <div class="content">
          <span>{{v.target.author.name}} :</span>
          <span v-if="!v.isShowMore">
            <span v-html="v.target.excerpt"></span>
            <button type="button" @click="showMore(i)">阅读全文</button>
          </span>
          <span v-html="v.target.content" v-else></span>
        </div>
        <div class="ContentItem-actions">
          <span>
            <button aria-label="赞同 3193 " type="button" class="Button VoteButton VoteButton--up">
              <span style="display: inline-flex; align-items: center;">
                ​
                <svg
                  class="Zi Zi--TriangleUp VoteButton-TriangleUp"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="10"
                  height="10"
                >
                  <path
                    d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
                    fill-rule="evenodd"
                  />
                </svg>
              </span>
              赞同 {{v.target.voteup_count}}
            </button>
            <button aria-label="反对" type="button" class="Button VoteButton VoteButton--down">
              <span style="display: inline-flex; align-items: center;">
                ​
                <svg
                  class="Zi Zi--TriangleDown"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  width="10"
                  height="10"
                >
                  <path
                    d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z"
                    fill-rule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </span>
          <button
            type="button"
            class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel"
            @click="showComment(v.target.id)"
          >
            <span style="display: inline-flex; align-items: center;">
              ​
              <svg
                class="Zi Zi--Comment Button-zi"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
              >
                <path
                  d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"
                  fill-rule="evenodd"
                />
              </svg>
            </span>
            {{v.target.comment_count}} 条评论
          </button>
          <button
            type="button"
            class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel"
          >
            <span style="display: inline-flex; align-items: center;">
              ​
              <svg
                class="Zi Zi--Star Button-zi"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
              >
                <path
                  d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
                  fill-rule="evenodd"
                />
              </svg>
            </span>收藏
          </button>
          <button
            type="button"
            class="Button ContentItem-action Button--plain Button--withIcon Button--withLabel"
          >
            <span style="display: inline-flex; align-items: center;">
              ​
              <svg
                class="Zi Zi--Heart Button-zi"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="1.2em"
                height="1.2em"
              >
                <path
                  d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z"
                  fill-rule="evenodd"
                />
              </svg>
            </span>喜欢
          </button>
          <button
            @click="showMore(i)"
            data-zop-retract-question="true"
            type="button"
            class="Button ContentItem-action ContentItem-rightButton Button--plain"
          >
            <span class="RichContent-collapsedText">收起/展开</span>
            <span style="display: inline-flex; align-items: center;">
              ​
              <svg
                class="Zi Zi--ArrowDown ContentItem-arrowIcon is-active"
                fill="currentColor"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path
                  d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
                  fill-rule="evenodd"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div class="Comments-container" v-if="v.commentList.length > 0">
        <div class="CommentsV2 CommentsV2--withEditor CommentsV2-withPagination">
          <div class="Topbar CommentTopbar">
            <div class="Topbar-title">
              <h2 class="CommentTopbar-title">11 条评论</h2>
            </div>
            <div class="Topbar-options">
              <button type="button" class="Button Button--plain Button--withIcon Button--withLabel">
                <span style="display: inline-flex; align-items: center;">​
                  <svg
                    class="Zi Zi--Switch Button-zi"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    width="1.2em"
                    height="1.2em"
                  >
                    <path
                      d="M13.004 7V4.232c0-.405.35-.733.781-.733.183 0 .36.06.501.17l6.437 5.033c.331.26.376.722.1 1.033a.803.803 0 0 1-.601.264H2.75a.75.75 0 0 1-.75-.75V7.75A.75.75 0 0 1 2.75 7h10.254zm-1.997 9.999v2.768c0 .405-.35.733-.782.733a.814.814 0 0 1-.5-.17l-6.437-5.034a.702.702 0 0 1-.1-1.032.803.803 0 0 1 .6-.264H21.25a.75.75 0 0 1 .75.75v1.499a.75.75 0 0 1-.75.75H11.007z"
                      fill-rule="evenodd"
                    />
                  </svg>
                </span>切换为时间排序
              </button>
            </div>
          </div>
          <div>
            <div class="CommentListV2">
              <ul class="NestComment" v-for="j in v.commentList">
                <li class="NestComment--rootComment">
                  <div class="CommentItemV2">
                    <div>
                      <div class="CommentItemV2-meta">
                        <span class="UserLink CommentItemV2-avatar">
                          <div class="Popover">
                            <div
                              id="Popover172-toggle"
                              aria-haspopup="true"
                              aria-expanded="false"
                              aria-owns="Popover172-content"
                            >
                              <a
                                target="_blank"
                                class="UserLink-link"
                                data-za-detail-view-element_name="User"
                              >
                                <img
                                  class="Avatar UserLink-avatar"
                                  width="24"
                                  height="24"
                                  :src="j.author.member.avatar_url"
                                  :alt="j.author.member.name"
                                />
                              </a>
                            </div>
                          </div>
                        </span>
                        <span class="UserLink">
                          <a
                            target="_blank"
                            class="UserLink-link"
                            data-za-detail-view-element_name="User"
                            :href="`www.zhihu.com/people/${j.author.url_token}`"
                          >{{j.author.member.name}}</a>
                        </span>
                        <span class="CommentItemV2-time">
                          {{createdTime(v.created_time)}}
                        </span>
                      </div>
                      <div class="CommentItemV2-metaSibling">
                        <div class="CommentRichText CommentItemV2-content">
                          <div
                            class="RichText ztext css-hnrfcf"
                            options="[object Object]"
                          >{{j.content}}</div>
                        </div>
                        <div class="CommentItemV2-footer">
                          <button type="button" class="Button CommentItemV2-likeBtn Button--plain">
                            <span style="display: inline-flex; align-items: center;">
                              ​
                              <svg
                                class="Zi Zi--Like"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                style="margin-right: 5px;"
                              >
                                <path
                                  d="M14.445 9h5.387s2.997.154 1.95 3.669c-.168.51-2.346 6.911-2.346 6.911s-.763 1.416-2.86 1.416H8.989c-1.498 0-2.005-.896-1.989-2v-7.998c0-.987.336-2.032 1.114-2.639 4.45-3.773 3.436-4.597 4.45-5.83.985-1.13 3.2-.5 3.037 2.362C15.201 7.397 14.445 9 14.445 9zM3 9h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z"
                                  fill-rule="evenodd"
                                />
                              </svg>
                            </span>{{j.vote_count || 0}}
                          </button>
                          <button type="button" class="Button CommentItemV2-hoverBtn Button--plain">
                            <span style="display: inline-flex; align-items: center;">
                              ​
                              <svg
                                class="Zi Zi--Reply"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                style="margin-right: 5px;"
                              >
                                <path
                                  d="M22.959 17.22c-1.686-3.552-5.128-8.062-11.636-8.65-.539-.053-1.376-.436-1.376-1.561V4.678c0-.521-.635-.915-1.116-.521L1.469 10.67a1.506 1.506 0 0 0-.1 2.08s6.99 6.818 7.443 7.114c.453.295 1.136.124 1.135-.501V17a1.525 1.525 0 0 1 1.532-1.466c1.186-.139 7.597-.077 10.33 2.396 0 0 .396.257.536.257.892 0 .614-.967.614-.967z"
                                  fill-rule="evenodd"
                                />
                              </svg>
                            </span>回复
                          </button>
                          <button type="button" class="Button CommentItemV2-hoverBtn Button--plain">
                            <span style="display: inline-flex; align-items: center;">
                              ​
                              <svg
                                class="Zi Zi--Like"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                style="transform: rotate(180deg); margin-right: 5px;"
                              >
                                <path
                                  d="M14.445 9h5.387s2.997.154 1.95 3.669c-.168.51-2.346 6.911-2.346 6.911s-.763 1.416-2.86 1.416H8.989c-1.498 0-2.005-.896-1.989-2v-7.998c0-.987.336-2.032 1.114-2.639 4.45-3.773 3.436-4.597 4.45-5.83.985-1.13 3.2-.5 3.037 2.362C15.201 7.397 14.445 9 14.445 9zM3 9h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z"
                                  fill-rule="evenodd"
                                />
                              </svg>
                            </span>踩
                          </button>
                          <button type="button" class="Button CommentItemV2-hoverBtn Button--plain">
                            <span style="display: inline-flex; align-items: center;">
                              ​
                              <svg
                                class="Zi Zi--Report"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="14"
                                height="14"
                              >
                                <path
                                  d="M19.947 3.129c-.633.136-3.927.639-5.697.385-3.133-.45-4.776-2.54-9.949-.888-.997.413-1.277 1.038-1.277 2.019L3 20.808c0 .3.101.54.304.718a.97.97 0 0 0 .73.304c.275 0 .519-.102.73-.304.202-.179.304-.418.304-.718v-6.58c4.533-1.235 8.047.668 8.562.864 2.343.893 5.542.008 6.774-.657.397-.178.596-.474.596-.887V3.964c0-.599-.42-.972-1.053-.835z"
                                  fill-rule="evenodd"
                                />
                              </svg>
                            </span> 举报
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="NestComment--child" v-for="k in j.child_comments">
                  <div class="CommentItemV2">
                    <div>
                      <div class="CommentItemV2-meta">
                        <span class="UserLink CommentItemV2-avatar">
                          <div class="Popover">
                            <div
                              id="Popover173-toggle"
                              aria-haspopup="true"
                              aria-expanded="false"
                              aria-owns="Popover173-content"
                            >
                              <a
                                target="_blank"
                                class="UserLink-link"
                                data-za-detail-view-element_name="User"
                                href="//www.zhihu.com/people/michael-sky-96"
                              >
                                <img
                                  class="Avatar UserLink-avatar"
                                  width="24"
                                  height="24"
                                  :src="k.author.member.avatar_url"
                                  :alt="k.author.member.name"
                                />
                              </a>
                            </div>
                          </div>
                        </span>
                        <span class="UserLink">
                          <a
                            target="_blank"
                            class="UserLink-link"
                            data-za-detail-view-element_name="User"
                            href="//www.zhihu.com/people/michael-sky-96"
                          >{{k.author.member.name}}</a>
                        </span>
                        <span class="CommentItemV2-reply">回复</span>
                        <span class="UserLink">
                          <a
                            target="_blank"
                            class="UserLink-link"
                            data-za-detail-view-element_name="User"
                            href="//www.zhihu.com/people/ba-ling-liu-se-77"
                          >{{k.reply_to_author.member.name}}</a>
                        </span>
                        <span class="CommentItemV2-time">{{k.created_time}}</span>
                      </div>
                      <div class="CommentItemV2-metaSibling">
                        <div class="CommentRichText CommentItemV2-content">
                          <div class="RichText ztext css-hnrfcf" options="[object Object]">
                            {{k.content}}
                          </div>
                        </div>
                        <div class="CommentItemV2-footer">
                          <button type="button" class="Button CommentItemV2-likeBtn Button--plain">
                            <span style="display: inline-flex; align-items: center;">
                              ​
                              <svg
                                class="Zi Zi--Like"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                style="margin-right: 5px;"
                              >
                                <path
                                  d="M14.445 9h5.387s2.997.154 1.95 3.669c-.168.51-2.346 6.911-2.346 6.911s-.763 1.416-2.86 1.416H8.989c-1.498 0-2.005-.896-1.989-2v-7.998c0-.987.336-2.032 1.114-2.639 4.45-3.773 3.436-4.597 4.45-5.83.985-1.13 3.2-.5 3.037 2.362C15.201 7.397 14.445 9 14.445 9zM3 9h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z"
                                  fill-rule="evenodd"
                                />
                              </svg>
                            </span>赞
                          </button>
                          <button type="button" class="Button CommentItemV2-hoverBtn Button--plain">
                            <span style="display: inline-flex; align-items: center;">
                              ​
                              <svg
                                class="Zi Zi--Reply"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                style="margin-right: 5px;"
                              >
                                <path
                                  d="M22.959 17.22c-1.686-3.552-5.128-8.062-11.636-8.65-.539-.053-1.376-.436-1.376-1.561V4.678c0-.521-.635-.915-1.116-.521L1.469 10.67a1.506 1.506 0 0 0-.1 2.08s6.99 6.818 7.443 7.114c.453.295 1.136.124 1.135-.501V17a1.525 1.525 0 0 1 1.532-1.466c1.186-.139 7.597-.077 10.33 2.396 0 0 .396.257.536.257.892 0 .614-.967.614-.967z"
                                  fill-rule="evenodd"
                                />
                              </svg>
                            </span>回复
                          </button>
                          <button type="button" class="Button CommentItemV2-hoverBtn Button--plain">
                            <span style="display: inline-flex; align-items: center;">
                              ​
                              <svg
                                class="Zi Zi--Like"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                                style="transform: rotate(180deg); margin-right: 5px;"
                              >
                                <path
                                  d="M14.445 9h5.387s2.997.154 1.95 3.669c-.168.51-2.346 6.911-2.346 6.911s-.763 1.416-2.86 1.416H8.989c-1.498 0-2.005-.896-1.989-2v-7.998c0-.987.336-2.032 1.114-2.639 4.45-3.773 3.436-4.597 4.45-5.83.985-1.13 3.2-.5 3.037 2.362C15.201 7.397 14.445 9 14.445 9zM3 9h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z"
                                  fill-rule="evenodd"
                                />
                              </svg>
                            </span>踩
                          </button>
                          <button type="button" class="Button CommentItemV2-hoverBtn Button--plain">
                            <span style="display: inline-flex; align-items: center;">
                              ​
                              <svg
                                class="Zi Zi--Report"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                width="14"
                                height="14"
                              >
                                <path
                                  d="M19.947 3.129c-.633.136-3.927.639-5.697.385-3.133-.45-4.776-2.54-9.949-.888-.997.413-1.277 1.038-1.277 2.019L3 20.808c0 .3.101.54.304.718a.97.97 0 0 0 .73.304c.275 0 .519-.102.73-.304.202-.179.304-.418.304-.718v-6.58c4.533-1.235 8.047.668 8.562.864 2.343.893 5.542.008 6.774-.657.397-.178.596-.474.596-.887V3.964c0-.599-.42-.972-1.053-.835z"
                                  fill-rule="evenodd"
                                />
                              </svg>
                            </span> 举报
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import {
  nextTick,
  computed,
  onMounted,
  ref,
  reactive,
  getCurrentInstance,
} from 'vue'
export default {
  setup(props) {
    const page_number = ref(1)
    const limit = ref(40)
    const list = ref([])
    const createdTime = (val) => {
      return new Date(parseInt(val) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');
    }
    const getZhiHu = async () => {
      let data = await axios({
        method: 'get',
        url: 'http://localhost:3000/',
        params: {
          page_number: page_number.value,
          limit: limit.value,
        },
      })
      let arr =  data.data.map((v) => {
        v.isShowMore = false
        v.commentList = []
        return v
      })
      list.value = [...list.value, ...arr]
    }
    const showMore = (i) => {
      list.value[i].isShowMore = !list.value[i].isShowMore
    }
    const showComment = async (id) => {
      let data = await axios({
        method: 'get',
        url: 'http://localhost:3000/comment',
        params: {
          id
        },
      })
      list.value.map(v => {
        if (v.target.id === id && v.commentList.length <= 0) {
          v.commentList = data.data.data
        } else {
          v.commentList = []
        }
      })
    }
    onMounted(() => {
      getZhiHu()
      nextTick(() => {
        window.addEventListener('scroll',() => {
          let H = document.querySelector('#app').offsetHeight
          let Y = window.scrollY
          let h = window.innerHeight
          if (H - Y - h < 200) {
            page_number.value++
            getZhiHu()
          }
        })
      })
    })
    return {
      list,
      createdTime,
      showMore,
      showComment
    }
  },
}
</script>
<style scoped lang="scss">
body {
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
    Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
    sans-serif;
  font-size: 15px;
  background: #f6f6f6;
  color: #121212;
}
.wrap {
  position: relative;
  padding: 0 16px;
  margin: 10px auto;
  width: 694px;
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  background: #fff;
  .list {
    margin-bottom: 10px;
    overflow: hidden;
    border-radius: 2px;
    border-bottom: 1px solid #f0f2f7;
    box-sizing: border-box;
    padding: 20px;
  }
  .title {
    line-height: 1.6;
    color: #121212;
    font-size: 18px;
    font-weight: 600;
  }
  .content {
    cursor: pointer;
    -webkit-transition: color 0.14s ease-out;
    transition: color 0.14s ease-out;
    word-break: break-word;
    line-height: 1.6;
    margin-top: 9px;
    margin-bottom: -4px;
    button {
      padding: 0;
      margin-left: 4px;
      color: #175199;
    }
  }
  .ContentItem-actions {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    margin: 0 -20px -10px;
    color: #646464;
    .VoteButton {
      padding: 0 10px;
      color: #06f;
    }
    .VoteButton--down {
      margin-left: 4px;
    }
    .Button--plain {
      height: auto;
      padding: 0;
      line-height: inherit;
      background-color: transparent;
      border: none;
      border-radius: 0;
    }
    .ContentItem-action {
      margin-left: 24px;
      font-size: 14px;
    }
    .ContentItem-rightButton {
      margin-left: auto;
    }
    .ContentItem-action {
      font-size: 14px;
    }
  }
}
</style>
