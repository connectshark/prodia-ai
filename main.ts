const models: { id: string; name: string }[] = [
  {
    id: 'analog-diffusion-1.0.ckpt [9ca13f02]',
    name: 'Analog V1'
  },
  {
    id: 'anythingv3_0-pruned.ckpt [2700c435]',
    name: 'Anything V3'
  },
  {
    id: 'anything-v4.5-pruned.ckpt [65745d25]',
    name: 'Anything V4.5'
  },
  {
    id: 'anythingV5_PrtRE.safetensors [893e49b9]',
    name: 'Anything V5'
  },
  {
    id: 'AOM3A3_orangemixs.safetensors [9600da17]',
    name: 'AbyssOrangeMix V3'
  },
  {
    id: 'deliberate_v2.safetensors [10ec4b29]',
    name: 'Deliberate V2'
  },
  {
    id: 'dreamlike-diffusion-1.0.safetensors [5c9fd6e0]',
    name: 'Dreamlike V1'
  },
  {
    id: 'dreamlike-diffusion-2.0.safetensors [fdcf65e7]',
    name: 'Dreamlike V2'
  },
  {
    id: 'dreamshaper_5BakedVae.safetensors [a3fbf318]',
    name: 'Dreamshaper 5 Baked Vae'
  },
  {
    id: 'dreamshaper_6BakedVae.safetensors [114c8abb]',
    name: 'Dreamshaper 5 Baked Vae'
  },
  {
    id: 'elldreths-vivid-mix.safetensors [342d9d26]',
    name: `Elldreth's Vivid`
  },
  {
    id: 'lyriel_v15.safetensors [65d547c5]',
    name: 'Lyriel V1.5'
  },
  {
    id: 'lyriel_v16.safetensors [68fceea2]',
    name: 'Lyriel V1.6'
  },
  {
    id: 'meinamix_meinaV9.safetensors [2ec66ab0]',
    name: 'MeinaMix Meina V9'
  },
  {
    id: 'openjourney_V4.ckpt [ca2f377f]',
    name: 'Openjourney V4'
  },
  {
    id: 'portrait+1.0.safetensors [1400e684]',
    name: 'Portrait V1'
  },
  {
    id: 'Realistic_Vision_V1.4-pruned-fp16.safetensors [8d21810b]',
    name: 'Realistic Vision V1.4'
  },
  {
    id: 'Realistic_Vision_V2.0.safetensors [79587710]',
    name: 'Realistic Vision v2'
  },
  {
    id: 'revAnimated_v122.safetensors [3f4fefd9]',
    name: 'Rev Animated V1.22'
  },
  {
    id: 'riffusion-model-v1.ckpt [3aafa6fe]',
    name: 'Riffusion V1'
  },
  {
    id: 'sdv1_4.ckpt [7460a6fa]',
    name: 'SD v1.4'
  },
  {
    id: 'v1-5-pruned-emaonly.ckpt [81761151]',
    name: 'SD V1.5'
  },
  {
    id: 'shoninsBeautiful_v10.safetensors [25d8c546]',
    name: `Shonin's Beautiful People V10`
  },
  {
    id: 'theallys-mix-ii-churned.safetensors [5d9225a4]',
    name: `TheAlly's Mix II`
  },
  {
    id: 'timeless-1.0.ckpt [7c4971d4]',
    name: 'Timeless V1'
  }
]

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
    const model = models.find((model) => config.model === model.id)
    if (!model) {
      throw new Error('Model not accepted');
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