import { useCallback } from 'react'
import debounce from 'lodash/debounce'

import { CountriesQueryVariables, useCountriesLazyQuery } from "@/lib/generated/graphql"
import { stringToCaseInsensitiveRegExp, UPPERCASE_REGEXP } from './utils/utils';

export const useCountry = () => {
  const [fetch, { data, loading }] = useCountriesLazyQuery()

  const handleSearch = (searchVal: string) => {
    console.log(searchVal)
    if (searchVal.substring(0, 2) === searchVal.substring(0, 2).toUpperCase() && searchVal.length === 2) {
      const filter: CountriesQueryVariables['filter'] = {
        code: { eq: searchVal },
      }
      console.log(searchVal, 1)

      fetch({ variables: { filter } })
    } else if (UPPERCASE_REGEXP.test(searchVal)) {
      const regex = `.*${searchVal}.*`
      const filter: CountriesQueryVariables['filter'] = {
        name: { regex },
      }

      console.log(searchVal, 2)
      fetch({ variables: { filter } })
    } else {
      const regex = `.*${stringToCaseInsensitiveRegExp(searchVal)}.*`
      const filter: CountriesQueryVariables['filter'] = {
        name: { regex },
      }

      console.log(searchVal, 3)
      fetch({ variables: { filter } })
    }
  }

  const search = useCallback(debounce(handleSearch, 1000), []);

  return {
    data: data?.countries || [],
    search,
    loading
  }
}