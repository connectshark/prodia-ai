/**
 * ProdiaAI is a class for handling ProdiaAI images.
 */
class ProdiaAI {
  #API_DOMAIN = 'https://api.prodia.com'
  #API_VERSION = 'v1'

  /**
   * Initializes a ProdiaAI instance.
   * @param {String} key - Your API key.
   */
  constructor (key) {
    this.key = key
  }

  /**
   * Creates an AI image job.
   * @param {Object} config - Image job configuration.
   * @param {String} config.prompt - Image prompt.
   * @param {String} config.negative_prompt - Negative image prompt.
   * @param {Number} config.steps - Number of image generation steps.
   * @param {Number} config.cfg_scale - Image generation scale.
   * @param {String} config.sampler - Image generation sampler.
   * @param {String} config.model - Image generation model.
   * @returns {Promise<{ job: String, status: String }>} object - Promise with the API response content.
   */
  async createJob(config) {
    if (!config?.prompt && config.prompt === '') {
      throw new Error('Prompt is required!')
    }
    const fetch_response = await fetch(`${this.#API_DOMAIN}/${this.#API_VERSION}/job`, {
      method: 'POST',
      headers: {
        'X-Prodia-Key': this.key,
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify(config),
    })
    return await fetch_response.json()
  }

  /**
   * Retrieves information about a specific job ID.
   * @param {String} jobId - Job ID.
   * @returns {Promise<{ job: string, status: string, imageUrl: string }>} - Promise with the API response content.
   */
  async getJob (jobId) {
    if (!jobId) {
      throw new Error('JobID is required!')
    }
    const fetch_response = await fetch(`${this.#API_DOMAIN}/${this.#API_VERSION}/job/${jobId}`, {
      headers: {
        'X-Prodia-Key': this.key,
        'content-type': 'application/json',
      }
    })
    return await fetch_response.json()
  }

  /**
   * Get a list of current available models.
   * @returns {Promise<string[]>} - Promise with the API response content.
   */
  async getModels () {
    const fetch_response = await fetch(`${this.#API_DOMAIN}/${this.#API_VERSION}/models/list`, {
      headers: {
        'X-Prodia-Key': this.key,
        'content-type': 'application/json',
      }
    })
    return await fetch_response.json()
  }
}


/**
 * Creates an instance of ProdiaAI.
 * @param {string} key - The API key used for authentication.
 * @returns {ProdiaAI} The ProdiaAI instance.
 * @throws {Error} If the API key is missing.
 */
const createProdiaAI = (key) => {
  if (!key) {
    throw new Error('API Key is required')
  }
  return new ProdiaAI(key)
}

export default createProdiaAI