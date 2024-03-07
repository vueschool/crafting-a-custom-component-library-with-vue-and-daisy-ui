import { provide, inject } from 'vue'
import { defu } from 'defu'
import type { App } from 'vue'
import { types as LoadingTypes } from './components/DaisyLoading/config'

export type Config = {
  shamefullyRegisterAllComponents?: boolean
  button: {
    loading: (typeof LoadingTypes)[number]
  }
}

const defaults: Config = {
  button: {
    loading: 'spinner'
  }
}

export const configKey = Symbol()
export function setConfig(config: Config, app?: App) {
  if (app) {
    app.provide(configKey, defu(config, defaults))
  } else {
    provide(configKey, defu(config, defaults))
  }
}

export function useConfig() {
  return inject(configKey, defaults)
}
