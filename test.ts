// import { serve } from "https://deno.land/std/http/server.ts";
// const s = serve({ port: 8000 });
// console.log("http://localhost:8000/");
// for await (const req of s) {
//   req.respond({ body: "Hello World\n" });
// }

import { camelCase } from "https://deno.land/x/case/mod.ts";


import {StatusCode} from './status_codes.ts'

// console.log(camelCase('OK'))

for(const sc in StatusCode) {
    console.log(sc, ' - ', camelCase(sc))
}