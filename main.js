class ProdiaAI {
  #API_DOMAIN = 'https://api.prodia.com'
  #API_VERSION = 'v1'

  constructor ({ key }) {
    this.key = key
  }

  async createJob (config) {
    const fetch_response = await fetch(this.#API_DOMAIN + '/' + this.#API_VERSION + '/job' , {
      method: 'POST',
      headers: {
        'X-Prodia-Key': this.key,
        accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(config)
    })
    return await fetch_response.json()
  }

  async getJob (jobId) {
    const fetch_response = await fetch(this.#API_DOMAIN + '/' + this.#API_VERSION + `/job/${jobId}` , {
      headers: {
        'X-Prodia-Key': this.key,
        'content-type': 'application/json'
      }
    })
    return await fetch_response.json()
  }
}

export default ProdiaAI