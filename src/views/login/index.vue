<template>
  <div class="login-bg" f-c-c h-full>
    <div class="login-wrapper" flex w-full max-w-1020>
      <div p-40 border-r border-gray-200>
        <img src="@/assets/images/login_banner.png" height="380" alt="login_banner" />
      </div>

      <div w-full f-c-c flex-col>
        <h5 f-c-c w-full p-15 text-24 font-normal color="#6a6a6a">
          <icon-custom-logo mr30 text-50 />
          {{ title }}
        </h5>
        <div mt-35 w-full max-w-360>
          <n-input
            v-model:value="loginInfo.name"
            autofocus
            class="text-16 items-center h-50 pl-10"
            placeholder="请输入用户名"
            :maxlength="20"
          >
          </n-input>
        </div>
        <div mt-35 w-full max-w-360>
          <n-input
            v-model:value="loginInfo.password"
            class="text-16 items-center h-50 pl-10"
            type="password"
            show-password-on="mousedown"
            placeholder="密码"
            :maxlength="20"
            @keydown.enter="handleLogin"
          />
        </div>
        <div mt-35 w-full max-w-360>
          <n-button w-full h-50 rounded-5 text-16 type="primary" @click="handleLogin">登录</n-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { login } from '@/api/auth'
import { createLocalStorage } from '@/utils/cache'
import { setToken } from '@/utils/token'

const title = import.meta.env.VITE_APP_TITLE

const router = useRouter()
const query = unref(router.currentRoute).query

const loginInfo = ref({
  name: 'admin',
  password: '123456',
})

const ls = createLocalStorage({ prefixKey: 'login_' })
const lsLoginInfo = ls.get('loginInfo')
if (lsLoginInfo) {
  loginInfo.value.name = lsLoginInfo.name || ''
  loginInfo.value.password = lsLoginInfo.password || ''
}

async function handleLogin() {
  const { name, password } = loginInfo.value
  if (!name || !password) {
    $message.warning('请输入用户名和密码')
    return
  }
  try {
    $message.loading('正在验证...')
    const res = await login({ name, password: password.toString() })
    if (res.code === 0) {
      $message.success('登录成功')
      ls.set('loginInfo', { name, password })
      setToken(res.data.token)

      if (query.redirect) {
        const path = query.redirect
        Reflect.deleteProperty(query, 'redirect')
        router.push({ path, query })
      } else {
        router.push('/')
      }
    } else {
      $message.warning(res.message)
    }
  } catch (error) {
    $message.error(error.message)
  }
}
</script>

<style lang="scss" scoped>
.login-bg {
  background-image: url(@/assets/images/login_bg.jpg);
  background-size: cover;
}

.login-wrapper {
  box-shadow: 1.5px 3.99px 27px 0px rgb(0 0 0 / 10%);
  background-color: rgba(255, 255, 255, 0.6);
}
</style>
