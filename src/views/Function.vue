<template>
    <my-page title="功能大全">
        <div class="common-container container">

            <ui-article>
                <h2>常用</h2>
                <chat :data="[
                    {
                        q: '工具 图片',
                        a: `① 图片格式转化 http://www.nicetool.net/app/image_format_convert.html
    ② 修改图片大小 http://www.nicetool.net/app/image_modify_size.html
    ③ png图片专用压缩 http://www.nicetool.net/app/png_compress.html`
                    },
                ]" />

                <h2>便民</h2>
                <chat :data="[
                    {
                        q: 'bmi 身高173体重55',
                        a: `你的 BMI 值: 18.4
    身体状态：偏瘦
    你的理想体重为：63.4kg`
                    },
                    {
                        q: '繁体 忧郁的乌龟',
                        a: '憂鬱的烏龜'
                    },
                    {
                        q: '简体 憂鬱的烏龜',
                        a: '忧郁的乌龟'
                    },
                    {
                        q: '计算 2*3',
                        a: '6'
                    },
                ]" />

                <h2>时间</h2>
                <chat :data="[
                    {
                        q: '时间',
                        a: '2019-02-17 18:13:19'
                    },
                    {
                        q: '日期',
                        a: '2019-02-17'
                    },
                ]" />

                <h2>开发</h2>
                <chat :data="[
                    {
                        q: 'uuid',
                        a: '31e15a10-329c-11e9-afa5-93c693ba6823'
                    },
                ]" />

                <h2>其他</h2>

                <!-- <h2>常用的命令</h2>

                <h3>系统相关命令</h3>
                <ul>
                    <li>帮助</li>
                    <li>反馈。示例「反馈 XXX工具用不了了」</li>
                    <li>帮助</li>
                </ul>

                </ul> -->

                <!-- <h3>工具相关命令</h3>
                <ul>
                    <li>工具。示例想要搜索图片时发送「工具 图片」。</li>
                    <li>百度。教你百度生成器。示例「百度 怎么上网」</li>
                    <li>举牌。示例「举牌 欢迎新人」。</li>
                    <li>二维码。示例「二维码 xxx.com」。</li>
                </ul> -->

                <!-- <h3>更多功能</h3> -->
                <p>开发中。</p>
            </ui-article>
            <!-- <ul class="cmd-list">
                <li class="item">
                    百度 在线工具

                    工具 gif

                    大写 asd
                    ASD

                    小写 ASD
                    asd

                    

                    图片
                    回复
                </li>
            </ul> -->
        </div>
    </my-page>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
.cmd-list {
    .item {
        border: 1px solid #eee;
    }
}
</style>
