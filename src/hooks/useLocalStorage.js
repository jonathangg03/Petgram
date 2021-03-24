import { useState } from 'react'

export const useLocalStorage = (key, initialState) => {
  const [storage, setStorage] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item !== null ? JSON.parse(item) : initialState
    } catch (error) {
      console.log(error)
    }
  })

  const StorageValue = (value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value))
      setStorage(value)
    } catch (error) {
      console.log(error)
    }
  }

  return [storage, StorageValue]
}
