import * as yup from 'yup'

const taskBodyValidate = yup.object().shape({
  name: yup.string().required('Name is required'),
  collection_id: yup.string().required('Collection id is required'),
})

const taskStatusValidate = yup.object().shape({
  is_completed: yup.boolean().required('is_completed is required'),
})

const taskUpdateValidate = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string().required('Description is required'),
  is_completed: yup.boolean().required('is_completed is required'),
})

export { taskBodyValidate, taskStatusValidate, taskUpdateValidate }
