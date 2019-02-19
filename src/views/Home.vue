<template>
    <my-page title="云设机器人">
        开发中，点击查看 <router-link to="/functions">所有功能</router-link>
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
