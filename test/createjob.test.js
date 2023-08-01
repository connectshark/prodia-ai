import { describe, expect, it } from 'vitest'
import createProdiaAI from '../main.js'

const key = import.meta.env.VITE_API_KEY

const prodiai = createProdiaAI(key)

describe('create a job', () => {
  it('it should get an error with empty params', async () => {
    await expect(prodiai.createJob()).rejects.toThrowError()
  })

  it('it should get an error because no prompt provided', async () => {
    await expect(prodiai.createJob({ prompt: '' })).rejects.toThrowError('Prompt is required!')
  })

  it('it should resolve job by give prompt', async () => {
    await expect(prodiai.createJob({ prompt: 'a dog' })).resolves.toBeTypeOf('object')
  })
})