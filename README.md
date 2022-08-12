# Node TypeScript project template

This is a basic Node project template with the following features.

- NPM
- TypeScript
- Mocha
- Docker

## Usage

## Clone from GitHub

Clone this template with into a directory which has your project name, for example `my-project`.

```
git clone `https://github.com/c0deritter/template-typescript-node.git` my-project
```

### Take Git ownership

Now that you cloned this repository from GitHub, its origin still belongs there. You need to delete the `.git` directory to get rid of that inheritance.

```
rm -rf .git
```

The next step is to initialise a new Git repository inside that project directory. 

```
git init
```

Now add your own Git repository server URL as the new `origin`.

```
git remote add origin <url-here>`
```

### Take ownership of the content

#### README.md

Since this `README.md` provides information on how to work with this Node project template, it will not be completely appropriate for your project. Adjust the title and its description. Delete the complete `Usage`. The rest of the information will be relevant.

#### NPM

Open the `package.json` and adjust `name` and `description`.

```json
{
    "name": "your-project-name",
    "version": "1.0.0",
    "description": "A short description of your project"
}
```

#### Docker

Open the `docker-compose.yml` file and adjust the name of the external docker network.

```yml
version: '3.8'
services:
  app:
    image: 'node:16'
    command: bash -c 'npm run startTs'
    working_dir: '/hostdir'
    volumes:
      - './:/hostdir'
    networks:
      - myproject # here
networks:
  myproject: # here
    external: true
```

If your project is named smart-sensor, call the Docker network smartsensor.

Do the same with the file `docker-compose.test.yml` while leaving the `_test` suffix as it is.

### Initial commit

Now that everything is set up, you can create your first commit. Before doing so, install all dependencies so that the file `package-lock.json` is created and can be part of that first commit.

```
npm install
```

Create the commit and push it to your Git repository server.

```
git add -A
git commit -m "Initial commit"
git push origin main
```

Congratulations. You are now ready to start developing.

## Install

### Install Docker

Depending on the operating system you are using there are different steps to be done. Please refer to the [official Docker documentation](https://docs.docker.com/engine/install/) on how to install Docker.

### Install dependencies

The last step is to install the used dependencies.

```
npm install
```

## Run the app

You can start the app by using Docker Compose.

```
docker compose up
```

It will block the terminal and prints out the logs. The app is started using [ts-node](https://www.npmjs.com/package/ts-node) which is a TypeScript execution engine. It has the advantage that on error it will display the line numbers of the actual TypeScript source code file instead of the transpiled JavaScript one.

If you want to stop the Docker container, press `Ctrl+C`.

If you want your app to run in the background and still want to see the logs, run the following.

```
docker compose up -d
docker compose logs -f
```

To stop the container execute the following command.

```
docker compose stop
```

## Run tests

Run the following command.

```
npm run test
```
