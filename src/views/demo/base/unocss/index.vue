<template>
  <CommonPage show-footer>
    <p>
      文档：<a hover-decoration-underline c-blue href="https://uno.antfu.me/" target="_blank">https://uno.antfu.me/</a>
    </p>
    <p>
      playground：
      <a c-blue hover-decoration-underline href="https://unocss.antfu.me/play/" target="_blank">
        https://unocss.antfu.me/play/
      </a>
    </p>

    <div f-c-c flex-col mt-20 w-350>
      <div flex flex-wrap justify-around p-10 rounded-10 b-1 bc-ccc>
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
        <div w-50 h-50 b-1 rounded-5 flex-col justify-between items-center p-10 m-20>
          <div flex w-full justify-between>
            <span w-6 h-6 rounded-3 bg-black></span>
            <span w-6 h-6 rounded-3 bg-black></span>
          </div>
          <div w-6 h-6 rounded-3 bg-black></div>
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
      <h2 font-normal text-14 mt-10 color-gray>Flex 骰子</h2>
    </div>
  </CommonPage>
</template>
