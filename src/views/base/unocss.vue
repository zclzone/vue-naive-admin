<!--------------------------------
 - @Author: Ronnie Zhang
 - @LastEditor: Ronnie Zhang
 - @LastEditTime: 2023/12/05 21:27:55
 - @Email: zclzone@outlook.com
 - Copyright © 2023 Ronnie Zhang(大脸怪) | https://isme.top
 --------------------------------->

<template>
  <CommonPage show-footer>
    <p>
      文档：
      <a c-blue hover-decoration-underline href="https://uno.antfu.me/" target="_blank">
        https://uno.antfu.me/
      </a>
    </p>
    <p>
      playground：
      <a c-blue hover-decoration-underline href="https://unocss.antfu.me/play/" target="_blank">
        https://unocss.antfu.me/play/
      </a>
    </p>

    <div mt-20 w-350 f-c-c flex-col>
      <div flex flex-wrap justify-around rounded-10 p-10 card-border>
        <div m-20 h-50 w-50 f-c-c rounded-5 p-10 border="1 solid">
          <span h-6 w-6 rounded-3 bg-black dark:bg-white />
        </div>
        <div m-20 h-50 w-50 flex justify-between rounded-5 p-10 border="1 solid">
          <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          <span h-6 w-6 self-end rounded-3 bg-black dark:bg-white />
        </div>
        <div m-20 h-50 w-50 flex justify-between rounded-5 p-10 border="1 solid">
          <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          <span h-6 w-6 self-center rounded-3 bg-black dark:bg-white />
          <span h-6 w-6 self-end rounded-3 bg-black dark:bg-white />
        </div>
        <div m-20 h-50 w-50 flex justify-between rounded-5 p-10 border="1 solid">
          <div flex-col justify-between>
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          </div>
          <div flex-col justify-between>
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          </div>
        </div>
        <div m-20 h-50 w-50 flex-col items-center justify-between rounded-5 p-10 border="1 solid">
          <div w-full flex justify-between>
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          </div>
          <div h-6 w-6 rounded-3 bg-black dark:bg-white />
          <div w-full flex justify-between>
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          </div>
        </div>
        <div m-20 h-50 w-50 flex-col justify-between rounded-5 p-10 border="1 solid">
          <div w-full flex justify-between>
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          </div>
          <div w-full flex justify-between>
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          </div>
          <div w-full flex justify-between>
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
            <span h-6 w-6 rounded-3 bg-black dark:bg-white />
          </div>
        </div>
      </div>
    </div>
  </CommonPage>
</template>
