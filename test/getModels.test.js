import { describe, expect, it } from 'vitest'
import createProdiaAI from '../main.js'

const key = import.meta.env.VITE_API_KEY

const prodiai = createProdiaAI(key)

describe('get available models', () => {
  it('get a list about available models', async () => {
    const res = await prodiai.getModels()
    expect(Array.isArray(res)).toBeTruthy()
  })

  it('get a list length greater than 0', async () => {
    const res = await prodiai.getModels()
    expect(res.length).toBeGreaterThan(0)
  })
})