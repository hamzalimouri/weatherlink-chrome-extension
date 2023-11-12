export interface LocalStorage {
  cities?: string[]
}

export function setStoredCities(cities: string[]): Promise<void> {
  const vals: LocalStorage = {
    cities,
  }
  return new Promise((resolve) => {
    chrome.storage.local.set(vals, () => {
      resolve()
    })
  })
}

export function getStoredCities(): Promise<string[]> {
  return new Promise((resolve) => {
    chrome.storage.local.get(['cities'], (res: LocalStorage) => {
      resolve(res.cities ?? [])
    })
  })
}
