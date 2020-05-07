# You source files and your main file

Put your JavaScript source files into the directory `src`. Name your main file `App.ts`. If you want to name your main file differently, take a look into the `package.json` and replace accordingly.

# Start the app

## Without Docker

To start without Docker you have to follow these steps:

1. Install Node and npm (Node package manager)
2. Run `npm install` inside the project's root directory which will install all dependencies
3. Run `npm run build` inside the project's root directory which will transpile the TypeScript files into the directory `app`
4. Run `npm start` to start the Node application

## With Docker

You can start the app by starting a Docker container in which the app will run. Run a `docker-compose up` inside the root of the project directory. It will install all dependencies, build and run the application on the port `3000`.

# Stop the app

## Without Docker

You need to press Ctrl+C on your command line which is running your Node app. This will terminate the Node app.

## With Docker

Run `docker-compose stop`. If you want to delete the Docker container and start with a newly created fresh one, run `docker-compose down`. After both commands you can restart your container with `docker-compose up`.

# View your the output of your app in a browser

As long as your Node app is one that can communicate with a browser and for example sends HTML to it, you can open your browser and visit `localhost:3000` to see the results.

# Bash in a Node Docker container

If you are working with docker and you want to be able to directly work with npm for example, you want to have a bash inside a Node docker container to be able to access all the infrastructure like npm. You can do this with Docker easily by running the script `bash-in-a-node-docker-container.sh`. It will start a Node Docker container and a bash inside it. After exiting it the container will also be deleted.

# Typescript

The TypeScript compiler configuration can be found in the file `tsconfig.json`. It will transpile to JavaScript standard ES2015 into the directory `apps`. If you do not like the target folder, change it there.