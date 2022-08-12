import { Log } from 'knight-log'
import { getConfigByArgvOrEnvOrDefault } from './config'

let log = new Log('App.ts')

class App {
    async run() {
        let config = getConfigByArgvOrEnvOrDefault();
        log.admin('Starting app...')
    }
}

let app = new App
app.run()
