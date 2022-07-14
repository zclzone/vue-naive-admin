<template>
  <div p-24>
    <p>
      文档：<a hover-decoration-underline c-blue href="https://uno.antfu.me/" target="_blank">https://uno.antfu.me/</a>
    </p>
    <p>
      playground：
      <a c-blue hover-decoration-underline href="https://unocss.antfu.me/play/" target="_blank">
        https://unocss.antfu.me/play/
      </a>
    </p>

    <div flex mt-20>
      <div flex p-20 rounded-5 bg="#fff">
        <div text-20 font-600>Flex布局</div>
        <div flex w-360 flex-wrap justify-around ml-15 p-10>
          <div w-50 h-50 b-1 rounded-5 f-c-c p-10 m-20>
            <span w-6 h-6 rounded-3 bg-black></span>
          </div>
          <div w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20>
            <span w-6 h-6 rounded-3 bg-black></span>
            <span w-6 h-6 rounded-3 bg-black self-end></span>
          </div>
          <div w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20>
            <span w-6 h-6 rounded-3 bg-black></span>
            <span w-6 h-6 rounded-3 bg-black self-center></span>
            <span w-6 h-6 rounded-3 bg-black self-end></span>
          </div>
          <div w-50 h-50 b-1 rounded-5 flex justify-between p-10 m-20>
            <div flex-col justify-between>
              <span w-6 h-6 rounded-3 bg-black></span>
              <span w-6 h-6 rounded-3 bg-black></span>
            </div>
            <div flex-col justify-between>
              <span w-6 h-6 rounded-3 bg-black></span>
              <span w-6 h-6 rounded-3 bg-black></span>
            </div>
          </div>
          <div w-50 h-50 b-1 rounded-5 f-c-c flex-col p-10 m-20>
            <div flex w-full justify-between>
              <span w-6 h-6 rounded-3 bg-black></span>
              <span w-6 h-6 rounded-3 bg-black></span>
            </div>
            <span w-6 h-6 rounded-3 bg-black></span>
            <div flex w-full justify-between>
              <span w-6 h-6 rounded-3 bg-black></span>
              <span w-6 h-6 rounded-3 bg-black></span>
            </div>
          </div>
          <div w-50 h-50 b-1 rounded-5 flex-col justify-between p-10 m-20>
            <div flex w-full justify-between>
              <span w-6 h-6 rounded-3 bg-black></span>
              <span w-6 h-6 rounded-3 bg-black></span>
            </div>
            <div flex w-full justify-between>
              <span w-6 h-6 rounded-3 bg-black></span>
              <span w-6 h-6 rounded-3 bg-black></span>
            </div>
            <div flex w-full justify-between>
              <span w-6 h-6 rounded-3 bg-black></span>
              <span w-6 h-6 rounded-3 bg-black></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
