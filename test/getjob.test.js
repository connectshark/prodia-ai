import { describe, expect, it } from 'vitest'
import createProdiaAI from '../main.js'

const key = import.meta.env.VITE_API_KEY

const prodiai = createProdiaAI(key)

describe('get a job', () => {
  it('get a error with empty params', async () => {
    await expect(prodiai.getJob()).rejects.toThrowError()
  })
  it('get a error from error job id', async () => {
    await expect(prodiai.getJob('1129346')).rejects.toThrowError()
  })
  it('get a json from true job id', async () => {
    const jobID = '058c9d06-ac2a-4fb0-9fa3-26199014bd58'
    await expect(prodiai.getJob(jobID)).resolves.toBeTypeOf('object')
  })
})