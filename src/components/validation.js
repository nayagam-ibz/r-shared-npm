import * as yup from 'yup'

const Validation = yup.object().shape({
  email: yup.string().required('Email is required').email('Email is invalid'),
  password: yup.string().required('Is a required field'),
})
export { Validation }

const ForgotPasswordSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Email is invalid'),
})
export { ForgotPasswordSchema }

const ChangePasswordSchema = yup.object().shape({
  new_password: yup.string().required('password is required'),
  confirm_new_password: yup.string().required('confirm new password is required'),
})
export { ChangePasswordSchema }

const RequestUnlockSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Email is invalid'),
}); export { RequestUnlockSchema }

const RequestOtpSchema = yup.object().shape({
  otp_code: yup.string().required('is required'),
}); export { RequestOtpSchema }

const TeamSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Email is invalid'),
  name: yup.string().required('is required'),
}); export { TeamSchema }

const InviteSchema = yup.object().shape({
  email: yup.string().required('Email is required').email('Email is invalid'),
  phone_number: yup.string().required('is required'),
}); export { InviteSchema }
