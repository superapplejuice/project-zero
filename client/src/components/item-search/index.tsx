import React, { useState, useEffect } from 'react'

import { FetchItems_fetchItems } from 'resolvers/queries/types'

import { useLazyFetchItems } from 'resolvers/queries'

import { Inputs } from 'components/core'
import * as Styles from './styles'

const ItemSearch = () => {
  const [lazyFetchItems, { data, loading }] = useLazyFetchItems({
    fetchPolicy: 'network-only',
  })

  const [value, setValue] = useState('')
  const [results, setResults] = useState<FetchItems_fetchItems[]>([])

  useEffect(() => {
    setResults(data?.fetchItems)
  }, [data])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)

    if (event.currentTarget.value.length > 0) {
      lazyFetchItems({
        variables: { name: event.currentTarget.value },
      })
    }
  }

  return (
    <Styles.Container>
      <Inputs.TextInput
        onChange={handleChange}
        variant="navigation"
        value={value}
        type="text"
        placeholder="Search"
        loading={loading}
      />
      {value.length > 0 && results?.length > 0 && (
        <Styles.ResultsContainer>
          {results?.map(item => (
            <Styles.Result key={item?.id}>
              <Styles.ResultImage src={item?.images[0]} alt={item?.id} />
              <Styles.ResultName>{item?.name}</Styles.ResultName>
            </Styles.Result>
          ))}
        </Styles.ResultsContainer>
      )}
    </Styles.Container>
  )
}

export default ItemSearch
