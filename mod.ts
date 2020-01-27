import {Velociraptor} from './velociraptor.ts'

const server = new Velociraptor({
    host: '0.0.0.0',
    port: 8000
})

server.listen()