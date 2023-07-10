# [prodia-ai](https://github.com/connectshark/prodia-ai)
[![GitHub](https://img.shields.io/github/license/connectshark/prodia-ai)](https://github.com/connectshark/prodia-ai/blob/main/LICENSE) ![npm](https://img.shields.io/npm/v/prodia-ai) ![npm](https://img.shields.io/npm/dw/prodia-ai) [![GitHub last commit](https://img.shields.io/github/last-commit/connectshark/prodia-ai.svg?style=flat)](https://github.com/connectshark/prodia-ai)

> Prodia-ai is a lightweight unofficial library.


## Table of content
- [Installation](#installation)
- [Usage](#usage)
  - [Installation](#installation)
  - [Initialization](#initialization)
  - [Get job detail](#get-job-detail)
  - [Create job](#create-job)
- [License](#license)

## Installation

```bash
npm install prodia-ai
```

## Usage
### Initialization
```js
import ProdiaAI from 'prodia-ai'

const prodiai = new ProdiaAI({
  key: 'prodia-key'
})

export default prodiai
```


### Get job detail

```js
const res = await prodiai.getJob('job-id')
```
### Create job

```js
const res = await prodiai.createJob(config)
```

## License

prodia-ai is [MIT licensed](https://github.com/connectshark/prodia-ai/blob/main/LICENSE)