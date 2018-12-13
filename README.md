# Micro Frontend Example (For learn purpose)

This repo is contain example of implementation of micro frontend (in this example for now only react, but in the future will improve combine with another framework).

## Getting Started

Please follow the instruction below for detail of instruction to use or install this project.

### Prerequites

We need install some library or tools which is used by this project.

- Docker
- NodeJS

### Installations

Under development

Just run `./start.sh` in your root project, it will automatically running each project (services)

### Running Test

Under development

- For unit test : just go inside of each project then type 'npm run test'

`in the future we need integration test`

### Built With

- ReactJS (and some tools for react)
- NodeJS (with EJS template) for master (orchestration)
- Jest and Enzyme for testing

## What need to improve from this repo :

- Strugling with best structure. Currently as orchestration we handle in backend but i realize web component already coming in few modern browser as native feature.
- Routing : still figure out the right way (and the best way) to do it
- Improve SSR for react
- Handle cross event (currently use native DOM)
- Share state if needed (i know micro frontends is isolated for each service but sometimes we need to share state beetwen fragment (services))
- Improve setting development mode
- Improve testing for integration testing
