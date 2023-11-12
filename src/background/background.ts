import { setStoredCities } from "../utils";

chrome.runtime.onInstalled.addListener(() => {
  setStoredCities([])
})
