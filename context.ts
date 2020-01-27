import { ServerRequest } from "https://deno.land/std/http/server.ts"

import {StatusCode} from './status_codes.ts'

import { camelCase } from "https://deno.land/x/case/mod.ts";

export class Context {

    _req: ServerRequest
    _formatJson = false

    constructor(req: ServerRequest) {
        this._req = req
    }

    format() {
        this._formatJson = true
        return this
    }

    handle(body: string | object, statusCode = StatusCode.OK ) {
        if(typeof body === 'object') body = JSON.stringify(body, null, this._formatJson ? 4 : 0)
        this._req.respond({status: statusCode, body: body})
    }




    ok(body: string | object) {
        this.handle(body, StatusCode.OK)
    }

    created(body: string | object) {
        this.handle(body, StatusCode.Created)
    }

    noContent(body: string | object) {
        this.handle(body, StatusCode.NoContent)
    }

    badRequest(body: string | object) {
        this.handle(body, StatusCode.BadRequest)
    }

    unauthorized(body: string | object) {
        this.handle(body, StatusCode.Unauthorized)
    }

    forbidden(body: string | object) {
        this.handle(body, StatusCode.Forbidden)
    }

    notFound(body: string | object) {
        this.handle(body, StatusCode.NotFound)
    }

    internalServerError(body: string | object) {
        this.handle(body, StatusCode.InternalServerError)
    }



}
