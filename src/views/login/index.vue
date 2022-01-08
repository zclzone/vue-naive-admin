<script setup>
import { ref, unref } from 'vue'
import { useRouter } from 'vue-router'

import { login } from '@/api/auth'
import { createLocalStorage } from '@/utils/cache'
import { setToken } from '@/utils/token'

const title = import.meta.env.VITE_APP_TITLE

const router = useRouter()
const query = unref(router.currentRoute).query

const loginInfo = ref({
  name: 'admin',
  password: 123456,
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
        router.push({ path: '/redirect', query })
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

<template>
  <div class="login-page">
    <div class="form-wrapper">
      <h2 class="title">{{ title }}</h2>
      <div class="form-item" mt-20>
        <input
          v-model="loginInfo.name"
          autofocus
          type="text"
          class="input"
          placeholder="username"
          @keydown.enter="handleLogin"
        />
      </div>
      <div class="form-item" mt-20>
        <input
          v-model="loginInfo.password"
          type="password"
          class="input"
          placeholder="password"
          @keydown.enter="handleLogin"
        />
      </div>
      <div class="form-item" mt-20>
        <button class="submit-btn" @click="handleLogin">登录</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@property --perA {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 75%;
}

@property --perB {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 99%;
}

@property --perC {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 15%;
}

@property --perD {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 16%;
}

@property --perE {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 86%;
}

@property --angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}
.login-page {
  height: 100%;
  background-color: #e1e8ee;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(
      circle at var(--perE) 7%,
      rgba(40, 40, 40, 0.04) 0%,
      rgba(40, 40, 40, 0.04) 50%,
      rgba(200, 200, 200, 0.04) 50%,
      rgba(200, 200, 200, 0.04) 100%
    ),
    radial-gradient(
      circle at var(--perC) var(--perD),
      rgba(99, 99, 99, 0.04) 0%,
      rgba(99, 99, 99, 0.04) 50%,
      rgba(45, 45, 45, 0.04) 50%,
      rgba(45, 45, 45, 0.04) 100%
    ),
    radial-gradient(
      circle at var(--perA) var(--perB),
      rgba(243, 243, 243, 0.04) 0%,
      rgba(243, 243, 243, 0.04) 50%,
      rgba(37, 37, 37, 0.04) 50%,
      rgba(37, 37, 37, 0.04) 100%
    ),
    linear-gradient(var(--angle), #22deed, #8759d7);
  animation: move 30s infinite alternate linear;

  @keyframes move {
    100% {
      --perA: 85%;
      --perB: 49%;
      --perC: 45%;
      --perD: 39%;
      --perE: 70%;
      --angle: 360deg;
    }
  }
}

.form-wrapper {
  text-align: center;
  padding: 40px 50px;
  border-radius: 15px;
  background-color: rgba(#fff, 0.2);

  .title {
    font-size: 22px;
    color: #f3f3f3;
  }

  .form-item {
    width: 240px;
    input {
      width: 100%;
      height: 40px;
      padding: 0 15px;
      border-radius: 5px;

      font-size: 14px;
      color: #333;
      transition: 0.3s;
      &:focus {
        box-shadow: 0 0 5px #8759d7;
      }
    }
    button {
      width: 100%;
      height: 40px;

      color: #fff;
      font-size: 14px;
      font-weight: bold;
      border: none;
      border-radius: 5px;
      background-color: #6683d2;

      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        opacity: 0.8;
      }
    }
  }
}
</style>
