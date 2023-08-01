import { describe, expect, it } from 'vitest'
import createProdiaAI from '../main.js'

const key = import.meta.env.VITE_API_KEY

const prodiai = createProdiaAI(key)

describe('initialization', () => {
  it('it should create the client', async () => {
    expect(prodiai).toBeDefined()
  })

  it('need an API key', () => {
    expect(() => createProdiaAI()).toThrowError('API Key is required')
  })
})