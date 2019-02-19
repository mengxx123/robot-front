<template>
    <div class="chat-box">
        <div class="chat-list">
            <div v-for="item in data">
                <div class="item item-me">
                    <div class="content">{{ item.q }}</div>
                    <img class="avatar" src="https://img1.yunser.com/avatar/avatar_1.jpg">
                </div>
                <div class="item item">
                    <img class="avatar" src="https://img1.yunser.com/avatar/avatar_2.jpg">
                    <div class="content">
                        <pre>{{ item.a }}</pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: {
            data: {
                type: Array,
                default: function () {
                    return []
                }
            }
        },
        methods: {
        }
    }
</script>

<style lang="scss" scoped>
</style>