/**********************************
 * @Author: Ronnie Zhang
 * @LastEditor: Ronnie Zhang
 * @LastEditTime: 2023/12/05 21:22:43
 * @Email: zclzone@outlook.com
 * Copyright © 2023 Ronnie Zhang(大脸怪) | https://isme.top
 **********************************/

export const useForm = (initFormData = {}) => {
  const formRef = ref(null)
  const formModel = ref({ ...initFormData })
  async function validation() {
    try {
      await formRef.value?.validate()
      return true
    } catch (error) {
      return false
    }
  }
  const rules = {
    required: {
      required: true,
      message: '此为必填项',
      trigger: ['blur', 'change'],
    },
  }
  return [formRef, formModel, validation, rules]
}
