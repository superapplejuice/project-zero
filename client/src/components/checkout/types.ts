import { FetchItem_fetchItem } from 'resolvers/queries/types'

export type Props = {
  closeCheckout: () => void
  displayCheckout: boolean
  item: FetchItem_fetchItem
}
