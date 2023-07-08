import * as yup from 'yup'

const collectionBodyValidate = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
})

const collectionUpdateValidate = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
})

export { collectionBodyValidate, collectionUpdateValidate }
