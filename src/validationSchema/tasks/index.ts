import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string(),
  status: yup.string().required(),
  company_id: yup.string().nullable(),
  client_id: yup.string().nullable(),
});
