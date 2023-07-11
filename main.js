/**
 * ProdiaAI is a class for handling ProdiaAI images.
 */
class ProdiaAI {
  #API_DOMAIN = 'https://api.prodia.com'
  #API_VERSION = 'v1'

  /**
   * Initializes a ProdiaAI instance.
   * @param {Object} obj - Initialization parameters object.
   * @param {String} obj.key - Your API key.
   */
  constructor({ key }) {
    this.key = key
  }

  models = [
    'analog-diffusion-1.0.ckpt [9ca13f02]',
    'anythingv3_0-pruned.ckpt [2700c435]',
    'anything-v4.5-pruned.ckpt [65745d25]',
    'anythingV5_PrtRE.safetensors [893e49b9]',
    'AOM3A3_orangemixs.safetensors [9600da17]',
    'deliberate_v2.safetensors [10ec4b29]',
    'dreamlike-diffusion-1.0.safetensors [5c9fd6e0]',
    'dreamlike-diffusion-2.0.safetensors [fdcf65e7]',
    'dreamshaper_5BakedVae.safetensors [a3fbf318]',
    'dreamshaper_6BakedVae.safetensors [114c8abb]',
    'elldreths-vivid-mix.safetensors [342d9d26]',
    'lyriel_v15.safetensors [65d547c5]',
    'lyriel_v16.safetensors [68fceea2]',
    'meinamix_meinaV9.safetensors [2ec66ab0]',
    'openjourney_V4.ckpt [ca2f377f]',
    'portrait+1.0.safetensors [1400e684]',
    'Realistic_Vision_V1.4-pruned-fp16.safetensors [8d21810b]',
    'Realistic_Vision_V2.0.safetensors [79587710]',
    'revAnimated_v122.safetensors [3f4fefd9]',
    'riffusion-model-v1.ckpt [3aafa6fe]',
    'sdv1_4.ckpt [7460a6fa]',
    'v1-5-pruned-emaonly.ckpt [81761151]',
    'shoninsBeautiful_v10.safetensors [25d8c546]',
    'theallys-mix-ii-churned.safetensors [5d9225a4]',
    'timeless-1.0.ckpt [7c4971d4]'
  ]

  /**
   * Creates an AI image job.
   * @param {Object} config - Image job configuration.
   * @param {String} config.prompt - Image prompt.
   * @param {String} config.negative_prompt - Negative image prompt.
   * @param {Number} config.steps - Number of image generation steps.
   * @param {Number} config.cfg_scale - Image generation scale.
   * @param {String} config.sampler - Image generation sampler.
   * @param {String} config.model - Image generation model.
   * @returns {Promise<String>} - Promise with the API response content.
   */
  async createJob(config){
    if (!config.prompt) {
      throw new Error('Prompt is required!')
    }
    const model = this.models.includes(config.model)
    if (!model) {
      throw new Error('Model not accepted')
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
   * @returns {Promise<String>} - Promise with the API response content.
   */
  async getJob(jobId){
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
}

export default ProdiaAI