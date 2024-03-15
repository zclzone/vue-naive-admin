/**********************************
 * @Author: Ronnie Zhang
 * @LastEditor: Ronnie Zhang
 * @LastEditTime: 2023/12/13 20:54:36
 * @Email: zclzone@outlook.com
 * Copyright © 2023 Ronnie Zhang(大脸怪) | https://isme.top
 **********************************/

export const defaultLayout = 'normal'

export const naiveThemeOverrides = {
  common: {
    primaryColor: '#316C72FF',
    primaryColorHover: '#316C72E3',
    primaryColorPressed: '#2B4C59FF',
    primaryColorSuppl: '#316C72E3',

    infoColor: '#2080F0FF',
    infoColorHover: '#4098FCFF',
    infoColorPressed: '#1060C9FF',
    infoColorSuppl: '#4098FCFF',

    successColor: '#18A058FF',
    successColorHover: '#36AD6AFF',
    successColorPressed: '#0C7A43FF',
    successColorSuppl: '#36AD6AFF',

    warningColor: '#F0A020FF',
    warningColorHover: '#FCB040FF',
    warningColorPressed: '#C97C10FF',
    warningColorSuppl: '#FCB040FF',

    errorColor: '#D03050FF',
    errorColorHover: '#DE576DFF',
    errorColorPressed: '#AB1F3FFF',
    errorColorSuppl: '#DE576DFF',
  },
}

export const basePermissions = [
  {
    code: 'ExternalLink',
    name: '外链(可内嵌打开)',
    type: 'MENU',
    icon: 'i-fe:external-link',
    order: 98,
    enable: true,
    show: true,
    children: [
      {
        code: 'ShowDocs',
        name: '项目文档',
        type: 'MENU',
        path: 'https://docs.isme.top/web/#/624306705/188522224',
        icon: 'i-me:docs',
        order: 1,
        enable: true,
        show: true,
      },
      {
        code: 'ApiFoxDocs',
        name: '接口文档',
        type: 'MENU',
        path: 'https://apifox.com/apidoc/shared-ff4a4d32-c0d1-4caf-b0ee-6abc130f734a',
        icon: 'i-me:apifox',
        order: 2,
        enable: true,
        show: true,
      },
      {
        code: 'MyBlog',
        name: '博客-掘金',
        type: 'MENU',
        path: 'https://juejin.cn/user/1961184475483255/posts',
        icon: 'i-simple-icons:juejin',
        order: 3,
        enable: true,
        show: true,
      },
    ],
  },
]
