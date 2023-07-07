# Prodia-AI
![npm](https://img.shields.io/npm/v/prodia-ai)


## How to use

### Installing

```
npm install prodia-ai
```


### Initializing
```
import ProdiaAI from 'prodia-ai'

const prodiai = new ProdiaAI({
  key: 'prodia-key'
})

export default prodiai
```


### Get job detail

```
const res = await prodiai.getJob('job-id')
```
### Create job

```
const res = await prodiai.createJob(config)
```

## LICENSE

[![GitHub](https://img.shields.io/github/license/connectshark/prodia-ai)](https://github.com/connectshark/prodia-ai/blob/main/LICENSE)