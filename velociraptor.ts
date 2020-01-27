import { serve, Server, ServerRequest } from "https://deno.land/std/http/server.ts"

import {Context} from './context.ts'

export interface VelociraptorOptions {
    port?: number,
    host?: string
}

export class Velociraptor {
    _port: number
    _host: string
    _middlewares: Function[]

    _server: Server

    constructor(opts: VelociraptorOptions) {
        this._port = opts.port || 8000
        this._host = opts.host || '0.0.0.0'
    }

    use(fn: Function) {
        this._middlewares.push(fn)
    }

    async listen() {
        this._server = serve({
            port: this._port,
            hostname: this._host
        })

        for await (const req of this._server) {
            const ctx = new Context(req)
        }
    }
}

export default Velociraptor