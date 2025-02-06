### Requirements

- [Docker](https://www.docker.com/) and [Docker compose](https://docs.docker.com/compose/install/)
- [Node](https://nodejs.org/en/download/package-manager?utm_cta=website-data-cloud-dummies)

### How to setup

- Clone repository using `git clone https://github.com/alahirajeffrey/shipment-pricing-api.git`
- Open terminal and navigate to the cloned repository
- Run the command `docker compose up -d` to setup the dev mongo db using docker compose. The `-d` flag runs the containers in detached mode.
- Create a `.env` file and populate using the `.env.example` file.

**NB**: the mongodb commection sting would be `mongodb://localhost:27017/tinkteq`.

- To run the application in dev mode, run the command `npm run dev` other run `npm run start`.
- Use the shipment.http file to test the endpoints. Update pring IDs appropraitely
