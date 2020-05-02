// item mutations
import useCreateItem from './create-item'
import useUpdateItem from './update-item'
import useDeleteItem from './delete-item'

// user mutations
import useRegisterUser from './register-user'
import useLogin from './login-user'
import useLogout from './logout-user'

// payment mutations
import useMakePayment from './make-payment'

// cart mutations
import useAddToCart from './add-to-cart'
import useRemoveFromCart from './remove-from-cart'
import useClearCart from './clear-cart'

export {
  useCreateItem,
  useUpdateItem,
  useDeleteItem,
  useRegisterUser,
  useLogin,
  useLogout,
  useMakePayment,
  useAddToCart,
  useRemoveFromCart,
  useClearCart,
}
