### Intro

Submission for the TINKTEQ backend developer test

### Requirements

- [Docker](https://www.docker.com/) and [Docker compose](https://docs.docker.com/compose/install/) is a tool for defining and running multi-container applications. simplifies the control of your entire application stack, making it easy to manage services, networks, and volumes in a single, comprehensible YAML configuration file. Then, with a single command, you create and start all the services from your configuration file.
- [Node](https://nodejs.org/en/download/package-manager?utm_cta=website-data-cloud-dummies) is a JavaScript runtime built on Chrome's V8 JavaScript engine. Is is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more.

### How to setup

- Clone repository using `git clone https://github.com/alahirajeffrey/shipment-pricing-api.git`
- Open terminal and navigate to the cloned repository
- Run the command `docker compose up -d` to setup the dev mongo db using docker compose. The `-d` flag runs the containers in detached mode.
- Create a `.env` file and populate using the `.env.example` file.

**NB**: the mongodb commection string would be `mongodb://localhost:27017/tinkteq`.

- To run the application in dev mode, run the command `npm run dev` or run `npm run start`.
- Use the shipment.http file to test the endpoints. Update pring IDs appropraitely

**NB**: Install the REST Client extension on VScode to test using the shipment.http file. Otherwise install postman and use
