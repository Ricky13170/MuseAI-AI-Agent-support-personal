import { useEffect, useState } from 'react'
export function useStored<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(()=>{try {const data=localStorage.getItem(key);return data?JSON.parse(data) as T:fallback}catch{return fallback}})
  useEffect(()=>{try{localStorage.setItem(key, JSON.stringify(value))}catch{/* private browsing */}},[key,value])
  return [value,setValue] as const
}
