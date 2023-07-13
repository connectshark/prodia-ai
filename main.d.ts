/**
 * ProdiaAI is a class for handling ProdiaAI images.
 */
declare class ProdiaAI {
  private readonly key: string

  /**
   * Initializes a ProdiaAI instance.
   * @param {Object} obj - Initialization parameters object.
   * @param {String} obj.key - Your API key.
   */
  constructor(key: string)

  models: string[]

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
  createJob(config: {
    prompt: string
    negative_prompt: string
    steps: number
    cfg_scale: number
    sampler: string
    model: string
  }): Promise<string>

  /**
   * Retrieves information about a specific job ID.
   * @param {String} jobId - Job ID.
   * @returns {Promise<String>} - Promise with the API response content.
   */
  getJob(jobId: string): Promise<string>
}

/**
 * Creates an instance of ProdiaAI.
 * @param {string} key - The API key used for authentication.
 * @returns {ProdiaAI} The ProdiaAI instance.
 * @throws {Error} If the API key is missing.
 */
declare function createProdiaAI(key: string) : ProdiaAI

export default createProdiaAI