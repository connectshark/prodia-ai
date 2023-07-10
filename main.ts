/**
 * ProdiaAI is a class for handling ProdiaAI images.
 */
class ProdiaAI {
  private readonly API_DOMAIN: string = 'https://api.prodia.com';
  private readonly API_VERSION: string = 'v1';
  private readonly key: string;

  /**
   * Initializes a ProdiaAI instance.
   * @param {Object} obj - Initialization parameters object.
   * @param {String} obj.key - Your API key.
   */
  constructor({ key }: { key: string }) {
    this.key = key;
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
   * @returns {Promise<String>} - Promise with the API response content.
   */
  async createJob(config: {
    prompt: string;
    negative_prompt: string;
    steps: number;
    cfg_scale: number;
    sampler: string;
    model: string;
  }): Promise<string> {
    if (!config.prompt) {
      throw new Error('Prompt is required!');
    }
    const fetch_response = await fetch(
      `${this.API_DOMAIN}/${this.API_VERSION}/job`,
      {
        method: 'POST',
        headers: {
          'X-Prodia-Key': this.key,
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify(config),
      }
    );
    return await fetch_response.json();
  }

  /**
   * Retrieves information about a specific job ID.
   * @param {String} jobId - Job ID.
   * @returns {Promise<String>} - Promise with the API response content.
   */
  async getJob(jobId: string): Promise<string> {
    if (!jobId) {
      throw new Error('JobID is required!');
    }
    const fetch_response = await fetch(
      `${this.API_DOMAIN}/${this.API_VERSION}/job/${jobId}`,
      {
        headers: {
          'X-Prodia-Key': this.key,
          'content-type': 'application/json',
        },
      }
    );
    return await fetch_response.json();
  }
}

export default ProdiaAI;