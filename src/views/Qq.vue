<template>
    <my-page title="QQ 群机器人">
        <div class="common-container container">

            <ui-article>
                <h2>简介</h2>
                <p>这是 QQ 群机器人的帮助文档。</p>
                <p>云设机器人是一个基于酷 Q 的命令式的机器人，具有群管理、命令式工具、聊天等功能。</p>
                <p>你有几种方式来使用该机器人：</p>
                <ul>
                    <li>QQ 群里在文字前面加上感叹号（！）表示 @智能客服，并发送命令来调用机器人。</li>
                    <li>QQ 群里 @机器人。</li>
                    <li>私聊机器人。</li>
                </ul>
                <p>你可以发送命令「命令 + 空格 + 内容（可选）」来调用机器人。</p>
                <p>示例：发送「！帮助」来查看帮助，或者发送「！工具 图片」来搜索图片工具。</p>

                <div class="chat-box">
                    <ul class="chat-list">
                        <li class="item item-me">
                            <div class="content">工具 图片</div>
                            <img class="avatar" src="https://img1.yunser.com/avatar/avatar_1.jpg">
                        </li>
                        <li class="item item">
                            <img class="avatar" src="https://img1.yunser.com/avatar/avatar_2.jpg">
                            <div class="content">
                                <pre>① 图片格式转化 http://www.nicetool.net/app/image_format_convert.html
    ② 修改图片大小 http://www.nicetool.net/app/image_modify_size.html
    ③ png图片专用压缩 http://www.nicetool.net/app/png_compress.html</pre>
                            </div>
                        </li>
                        <li class="item item-me">
                            <div class="content">bmi 身高173体重55</div>
                            <img class="avatar" src="https://img1.yunser.com/avatar/avatar_1.jpg">
                        </li>
                        <li class="item item">
                            <img class="avatar" src="https://img1.yunser.com/avatar/avatar_2.jpg">
                            <div class="content">
                                <pre>你的 BMI 值: 18.4
    身体状态：偏瘦
    你的理想体重为：63.4kg</pre>
                            </div>
                        </li>
                        <li class="item item-me">
                            <div class="content">uuid</div>
                            <img class="avatar" src="https://img1.yunser.com/avatar/avatar_1.jpg">
                        </li>
                        <li class="item item">
                            <img class="avatar" src="https://img1.yunser.com/avatar/avatar_2.jpg">
                            <div class="content">
                                <pre>31e15a10-329c-11e9-afa5-93c693ba6823</pre>
                            </div>
                        </li>
                        <li class="item item-me">
                            <div class="content">时间</div>
                            <img class="avatar" src="https://img1.yunser.com/avatar/avatar_1.jpg">
                        </li>
                        <li class="item item">
                            <img class="avatar" src="https://img1.yunser.com/avatar/avatar_2.jpg">
                            <div class="content">
                                <pre>2019-02-17 18:13:19</pre>
                            </div>
                        </li>
                        <li class="item item-me">
                            <div class="content">繁体 忧郁的乌龟</div>
                            <img class="avatar" src="https://img1.yunser.com/avatar/avatar_1.jpg">
                        </li>
                        <li class="item item">
                            <img class="avatar" src="https://img1.yunser.com/avatar/avatar_2.jpg">
                            <div class="content">
                                <pre>憂鬱的烏龜</pre>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <h2>常用的命令</h2>

                <h3>系统相关命令</h3>
                <ul>
                    <li>帮助</li>
                    <li>反馈。示例「反馈 XXX工具用不了了」</li>
                    <li>帮助</li>
                </ul>

                <h3>工具相关命令</h3>
                <ul>
                    <li>工具。示例想要搜索图片时发送「工具 图片」。</li>
                    <!-- <li>语音</li> -->
                    <!-- <li>群语音</li> -->
                    <!-- <li>大写</li> -->
                    <!-- <li>小写</li> -->
                    <!-- <li>翻转</li> -->
                    <!-- <li>翻转</li> -->
                    <li>百度。教你百度生成器。示例「百度 怎么上网」</li>
                    <li>计算。示例「计算 1+1」。</li>
                    <li>举牌。示例「举牌 欢迎新人」。</li>
                    <li>二维码。示例「二维码 xxx.com」。</li>
                </ul>
                <p>点击查看 <router-link to="/functions">更多功能</router-link></p>

                <h3>NiceTool 相关命令</h3>
                <ul>
                    <li>贴吧</li>
                    <li>官网</li>
                    <li>群</li>
                    <li>水群</li>
                    <li>公众号</li>
                    <li>微信群</li>
                    <li>app</li>
                </ul>

                <h3>娱乐相关命令（仅在部分群开放）</h3>
                <ul>
                    <li>签到。每日签到。</li>
                    <li>猜拳。示例「猜拳 剪刀」。</li>

                    <li>积分：查看我的积分。</li>
                    <li>积分榜/积分排行。积分前 8 名。</li>
                    <li>乞讨。积分少时，可以获得积分。</li>
                    <li>送积分。把自己的积分赠送给别人。示例「送积分 30 @某人」</li>

                    <li>抢劫。抢劫成功时可以获得积分，失败时进监狱（禁言）。</li>
                    <li>抽奖。示例「抽奖 20」。</li>
                    <li>聊天。和机器人聊天。示例「聊天 你好啊」。</li>
                </ul>
            </ui-article>
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
                page: {
                    menu: [
                        {
                            type: 'icon',
                            icon: 'help',
                            to: '/help'
                        }
                    ]
                }
            }
        }
    }
</script>

<style scoped>
</style>
