# [prodia-ai](https://github.com/connectshark/prodia-ai)
[![GitHub](https://img.shields.io/github/license/connectshark/prodia-ai)](https://github.com/connectshark/prodia-ai/blob/main/LICENSE) ![npm](https://img.shields.io/npm/v/prodia-ai) ![npm](https://img.shields.io/npm/dw/prodia-ai) [![GitHub last commit](https://img.shields.io/github/last-commit/connectshark/prodia-ai.svg?style=flat)](https://github.com/connectshark/prodia-ai)

> Prodia-ai is a lightweight unofficial library.


## Table of content
- [Get your key](#get-your-key)
- [Installation](#installation)
- [Usage](#usage)
  - [Installation](#installation)
  - [Initialization](#initialization)
- [Get job detail](#get-job-detail)
- [Create job](#create-job)
  - [configOptions](#configoptions)
- [License](#license)

## Get your key
Visiting [this page](https://app.prodia.com/api) can obtain your API key.

## Installation

```bash
npm install prodia-ai
```

## Usage
### Initialization
```js
import createProdiaAI from 'prodia-ai'

const prodiai = createProdiaAI('prodia-key')

export default prodiai
```


## Get job detail

```js
const res = await prodiai.getJob('job-id')
```

### `job-id`
- Type: `String`
- Required: `false`



## Create job

```js
const res = await prodiai.createJob(configOptions)
```
### configOptions
#### `prompt`
Image prompt
- Type: `String`
- Required: `true`
```js
const res = await prodiai.createJob({
  prompt: 'dog'
})
```

#### `model`
- Type: `String`
- Required: `false`
- Default: `sdv1_4.ckpt [7460a6fa]`
- options: 
```js
const models = [
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
  'mechamix_v10.safetensors [ee685731]',
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
```
```js
const res = await prodiai.createJob({
  model: 'sdv1_4.ckpt [7460a6fa]'
})
```


#### `negative_prompt`
Negative image prompt
- Type: `String`
- Required: `false`
```js
const res = await prodiai.createJob({
  negative_prompt: '2d'
})
```

#### `steps`
Image steps
- Type: `Number`
- Required: `false`
- Range: 1 ~ 30
```js
const res = await prodiai.createJob({
  steps: 25
})
```

#### `cfg_scale`
How strongly the image should conform to the text - lower values produce more creative results.
- Type: `Number`
- Required: `false`
- Range: 1 ~ 20
```js
const res = await prodiai.createJob({
  cfg_scale: 7
})
```

#### `seed`
A seed controls the output of a random number generator. The same seed will generate the same image. The default value of -1 uses a random seed.
- Type: `Number`
- Required: `false`
- Default: `-1`
```js
const res = await prodiai.createJob({
  seed: -1
})
```

#### `sampler`
Which algorithm to use to produce the image
- Type: `String`
- Required: `false`
- Options: `Euler`, `Euler a`, `Heun`, `DPM++ 2M Karras`, `DDIM`
- Default: `Euler`
```js
const res = await prodiai.createJob({
  sampler: 'Euler'
})
```

#### `aspect_ratio - pro`
Resolution and aspect ratio of your image
- Type: `String`
- Options: `square`, `portrait`, `landscape`
- Required: `false`
- Default: `square`
```js
const res = await prodiai.createJob({
  aspect_ratio: 'square'
})
```

#### `upscale - pro`
Enable 2x Upscale
- Type: `Boolean`
- Required: `false`
- Default: `false`
```js
const res = await prodiai.createJob({
  upscale: false
})
```

## License

prodia-ai is [MIT licensed](https://github.com/connectshark/prodia-ai/blob/main/LICENSE)