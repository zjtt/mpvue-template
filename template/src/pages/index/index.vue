<template>
<div class="container" @click="clickHandle('test click', $event)">
    
    <div class="userinfo" @click="bindViewTap">

        6666
        <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover">
        <div class="userinfo-nickname">
            <card :text="userInfo.nickName"></card>
        </div>
    </div>

    <!-- <i-button type="primary" @click="handleClick">这是一个按钮</i-button> -->

    <div class="usermotto">
        <div class="user-motto">
            <card :text="motto"></card>
        </div>
    </div>

    <form class="form-container">
        <input type="text" class="form-control" v-model="motto" placeholder="v-model">
            <input type="text" class="form-control" v-model.lazy="motto" placeholder="v-model.lazy">
        </form>
    </div>
</template>

<script>
import card from '@/components/card';

export default {
    data() {
        return {
            motto: 'Hello World',
            userInfo: {}
        };
    },
    created() {
        // 调用应用实例的方法获取全局数据
        // this.getUserInfo();

        // this.$http.get('/test/index')
        // .then(function (response) {
        //     console.log(response);
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    },

    components: {
        card
    },

    methods: {
        bindViewTap() {
            const url = '../logs/main';
            wx.navigateTo({
                url
            });
        },
        handleClick() {
            console.log(11);
        },
        getUserInfo() {
            // 调用登录接口
            wx.login({
                success: code => {
                    // console.log(code);
                    wx.getUserInfo({
                        success: res => {
                            // console.log(res);
                            this.userInfo = res.userInfo;
                        }
                    });
                }
            });
        },
        clickHandle(msg, ev) {
            console.log('clickHandle:', msg, ev);
        }
    }
};
</script>

<style lang="less" scoped>
.userinfo {
    display: flex;
    flex-direction: column;

    align-items: center;
}

.userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
}

.userinfo-nickname {
    color: #aaa;
}

.usermotto {
    margin-top: 150px;
}

.form-control {
    display: block;
    margin-bottom: 5px;
    padding: 0 12px;
    border: 1px solid #ccc;
}
</style>
