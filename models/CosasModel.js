import { setLocalStorage } from "../helpers/local-storage"

export let kosas = []

export function guardarKosa(key, value) {
    setLocalStorage(key, value)
    
}

export function buscarKosa() {
    
}