# Prodia-AI


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
[MIT](/LICENSE)