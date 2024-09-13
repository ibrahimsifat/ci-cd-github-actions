# CI/CD with GitHub Actions

This project demonstrates a basic CI/CD pipeline using GitHub Actions for testing and Docker image deployment. It includes a simple test route for testing purposes.

## Project Structure

- **Dockerfile**: Defines the Node.js environment and dependencies for the application.
- **test.yaml**: A GitHub Actions workflow to run automated tests using Mocha.
- **delivery.yaml**: A GitHub Actions workflow to build and push a Docker image to Docker Hub.

## Getting Started

To get started, you will need to have [Node.js](https://nodejs.org/en/) and [Docker](https://www.docker.com/) installed.

### Dockerfile

The `Dockerfile` sets up a basic Node.js environment using the official Node 18 Alpine image. The application dependencies are installed with Yarn, and the app is started using the `yarn start` command.

### CI Testing with Mocha

The `test.yaml` workflow runs whenever changes are pushed to the `master` branch. It installs the project dependencies and runs tests using Mocha.

### Docker Image Deployment

The `delivery.yaml` workflow builds a Docker image from the `Dockerfile` and pushes it to Docker Hub. It requires two GitHub secrets for Docker Hub login:

- `DOCKER_USERNAME`
- `DOCKER_PASSWORD`


## Prerequisites

- Node.js v18
- Yarn package manager
- Docker account and GitHub secrets (`DOCKER_USERNAME`, `DOCKER_PASSWORD`)

## How to Run Locally

1. Pull the Docker image:
    ```bash
    docker pull ibrahimsifat0/github-actions-test
    ```

2. Run the Docker container:
    ```bash
    docker run -p 3000:3000 ibrahimsifat0/github-actions-test
    ```

3.The application will be accessible at http://localhost:3000.

## Running Tests

To run tests locally:
```bash
yarn test
```

## Running the Project with Docker

1. Build the Docker image:
    ```bash
    docker build -t your-username/ci-cd-github-actions .
    ```

2. Run the Docker container:
    ```bash
    docker run -p 3000:3000 your-username/ci-cd-github-actions
    ```

3. The application will be accessible at `http://localhost:3000`.

## Deployment

Ensure you have the required GitHub secrets (`DOCKER_USERNAME`, `DOCKER_PASSWORD`) set up in your repository for Docker Hub authentication. The workflow will automatically build and push the Docker image upon changes to the `master` branch.

