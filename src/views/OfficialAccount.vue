<template>
    <my-page title="微信公众号">
        <div class="common-container container">

            <ui-article>
                <h2>简介</h2>
                <p>这是 NiceTool 的官方微信公众号。你可以在公众号里面阅读精彩的文章，也可以使用公众号来搜索各种工具或直接使用工具。</p>
                <p>公众号内置了一个命令式的机器人，你可以发送命令「命令 + 空格 + 内容（可选）」来使用机器人。</p>
                <p>发送「帮助」可以查看帮助。</p>

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

                <!-- <h2>常用的命令</h2>

                <h3>系统相关命令</h3>
                <ul>
                    <li>帮助</li>
                    <li>反馈。示例「反馈 XXX工具用不了了」</li>
                    <li>帮助</li>
                </ul>
    -->

                <h3>更多功能</h3>
                <p>点击查看 <router-link to="/functions">更多功能</router-link></p>
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

<style lang="scss" scoped>
</style>
