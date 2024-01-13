/**********************************
 * @Author: Ronnie Zhang
 * @LastEditor: Ronnie Zhang
 * @LastEditTime: 2024/01/13 17:41:26
 * @Email: zclzone@outlook.com
 * Copyright © 2023 Ronnie Zhang(大脸怪) | https://isme.top
 **********************************/

// 获取元素的CSS样式
function getCss(element, key) {
  return element.currentStyle
    ? element.currentStyle[key]
    : window.getComputedStyle(element, null)[key]
}

const params = {
  left: 0,
  top: 0,
  currentX: 0,
  currentY: 0,
  flag: false,
}

// 初始化拖拽
export function initDrag(bar, box) {
  if (!bar || !box) return
  const screenWidth = document.body.clientWidth // 页面宽度
  const screenHeight = document.documentElement.clientHeight // 页面可见区域高度

  const dragDomWidth = box.offsetWidth // 盒子宽度
  const dragDomHeight = box.offsetHeight // 盒子高度

  const minDomLeft = box.offsetLeft // 盒子相对于父元素的左偏移量
  const minDomTop = box.offsetTop // 盒子相对于父元素的上偏移量

  const maxDragDomLeft = screenWidth - minDomLeft - dragDomWidth // 盒子在水平方向上可拖拽的最大距离
  const maxDragDomTop = screenHeight - minDomTop - dragDomHeight // 盒子在垂直方向上可拖拽的最大距离

  if (getCss(box, 'left') !== 'auto') {
    params.left = getCss(box, 'left')
  }
  if (getCss(box, 'top') !== 'auto') {
    params.top = getCss(box, 'top')
  }

  // 设置触发拖动元素的鼠标样式为移动图标
  bar.style.cursor = 'move'

  // 鼠标按下事件处理函数
  bar.onmousedown = function (e) {
    params.flag = true // 设置拖拽标志为true
    e.preventDefault() // 阻止默认事件
    params.currentX = e.clientX // 鼠标当前位置的X坐标
    params.currentY = e.clientY // 鼠标当前位置的Y坐标
  }
  document.onmouseup = function () {
    params.flag = false // 设置拖拽标志为false
    if (getCss(box, 'left') !== 'auto') {
      params.left = getCss(box, 'left')
    }
    if (getCss(box, 'top') !== 'auto') {
      params.top = getCss(box, 'top')
    }
  }
  document.onmousemove = function (e) {
    e.preventDefault() // 阻止默认事件
    // 如果拖拽标志为true
    if (params.flag) {
      const nowX = e.clientX // 鼠标当前位置的X坐标
      const nowY = e.clientY // 鼠标当前位置的Y坐标
      const disX = nowX - params.currentX // 鼠标移动的X距离
      const disY = nowY - params.currentY // 鼠标移动的Y距离

      let left = parseInt(params.left) + disX // 盒子元素的新left值
      let top = parseInt(params.top) + disY // 盒子元素的新top值

      // 拖出屏幕边缘
      if (-left > minDomLeft) {
        left = -minDomLeft
      } else if (left > maxDragDomLeft) {
        left = maxDragDomLeft
      }

      if (-top > minDomTop) {
        top = -minDomTop
      } else if (top > maxDragDomTop) {
        top = maxDragDomTop
      }

      box.style.left = left + 'px'
      box.style.top = top + 'px'
    }
  }
}
