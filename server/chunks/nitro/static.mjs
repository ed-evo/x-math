import { createError } from 'h3';
import { withLeadingSlash, withoutTrailingSlash, parseURL } from 'ufo';
import { promises } from 'fs';
import { resolve, dirname } from 'pathe';
import { fileURLToPath } from 'url';

const assets = {
  "/200.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"7f3f-MIbq9xr8tbG6zmxCCtWqtD4YQy0\"",
    "mtime": "2021-12-18T22:47:51.043Z",
    "path": "../public/200.html"
  },
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"21bc-XwkmumvsWAWQvKTShmzlcL3xoys\"",
    "mtime": "2021-12-18T22:47:44.211Z",
    "path": "../public/favicon.ico"
  },
  "/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"7f3f-MIbq9xr8tbG6zmxCCtWqtD4YQy0\"",
    "mtime": "2021-12-18T22:47:50.955Z",
    "path": "../public/index.html"
  },
  "/v.png": {
    "type": "image/png",
    "etag": "\"162a-avH7VxOy9r9Rcb4oFC9whvhU6AM\"",
    "mtime": "2021-12-18T22:47:44.211Z",
    "path": "../public/v.png"
  },
  "/vuetify-logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"21b-Dy7u1jGjwL7jqFWwh9TfQ270OtU\"",
    "mtime": "2021-12-18T22:47:44.211Z",
    "path": "../public/vuetify-logo.svg"
  },
  "/_nuxt/208e2cd.js": {
    "type": "application/javascript",
    "etag": "\"37035-wGn956SvKf23BdwqHTIyay6DEC4\"",
    "mtime": "2021-12-18T22:47:44.215Z",
    "path": "../public/_nuxt/208e2cd.js"
  },
  "/_nuxt/35c091d.js": {
    "type": "application/javascript",
    "etag": "\"78c-2b4qR0RPKAVGaOzu2Kty7+dIOwI\"",
    "mtime": "2021-12-18T22:47:44.215Z",
    "path": "../public/_nuxt/35c091d.js"
  },
  "/_nuxt/8fd6527.js": {
    "type": "application/javascript",
    "etag": "\"59da-RVovp7ss2rezXBClh3dX/O8K1Bg\"",
    "mtime": "2021-12-18T22:47:44.215Z",
    "path": "../public/_nuxt/8fd6527.js"
  },
  "/_nuxt/94a3728.js": {
    "type": "application/javascript",
    "etag": "\"291-wl+mJFFD+B+Ppiz8XaHokWEqjlY\"",
    "mtime": "2021-12-18T22:47:44.215Z",
    "path": "../public/_nuxt/94a3728.js"
  },
  "/_nuxt/a367219.js": {
    "type": "application/javascript",
    "etag": "\"3d8-V0rSwdRj+7/ReK5YhfbgUuKKEwU\"",
    "mtime": "2021-12-18T22:47:44.211Z",
    "path": "../public/_nuxt/a367219.js"
  },
  "/_nuxt/a6e08b6.js": {
    "type": "application/javascript",
    "etag": "\"1a86-5bbWHsiW/p718JGD4+XPSJ91ceY\"",
    "mtime": "2021-12-18T22:47:44.211Z",
    "path": "../public/_nuxt/a6e08b6.js"
  },
  "/_nuxt/e4adb0c.js": {
    "type": "application/javascript",
    "etag": "\"fce-eIbJHAFtmVk2l/h9iB3y6GxWTAw\"",
    "mtime": "2021-12-18T22:47:44.211Z",
    "path": "../public/_nuxt/e4adb0c.js"
  },
  "/_nuxt/e90b10a.js": {
    "type": "application/javascript",
    "etag": "\"93118-90na17a5+tOfWrOUWpOkqMjbaJo\"",
    "mtime": "2021-12-18T22:47:44.211Z",
    "path": "../public/_nuxt/e90b10a.js"
  },
  "/_nuxt/ed282f2.js": {
    "type": "application/javascript",
    "etag": "\"963-5V6875X+a5sFk8towlR6Pbyhux0\"",
    "mtime": "2021-12-18T22:47:44.211Z",
    "path": "../public/_nuxt/ed282f2.js"
  },
  "/inspire/index.html": {
    "type": "text/html; charset=utf-8",
    "etag": "\"4d28-ZQuwcGcYPpMcUi1wlH6c7wZCX+k\"",
    "mtime": "2021-12-18T22:47:50.867Z",
    "path": "../public/inspire/index.html"
  }
};

const mainDir = dirname(fileURLToPath(globalThis.entryURL));

function readAsset (id) {
  return promises.readFile(resolve(mainDir, getAsset(id).path))
}

function getAsset (id) {
  return assets[id]
}

const METHODS = ["HEAD", "GET"];
const PUBLIC_PATH = "/x-math/_nuxt/";
const TWO_DAYS = 2 * 60 * 60 * 24;
const STATIC_ASSETS_BASE = "/x-math/_nuxt/static" + "/" + "1639867664";
async function serveStatic(req, res) {
  if (!METHODS.includes(req.method)) {
    return;
  }
  let id = withLeadingSlash(withoutTrailingSlash(parseURL(req.url).pathname));
  let asset = getAsset(id);
  if (!asset) {
    const _id = id + "/index.html";
    const _asset = getAsset(_id);
    if (_asset) {
      asset = _asset;
      id = _id;
    }
  }
  if (!asset) {
    if (id.startsWith(PUBLIC_PATH) && !id.startsWith(STATIC_ASSETS_BASE)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    res.statusCode = 304;
    return res.end("Not Modified (etag)");
  }
  const ifModifiedSinceH = req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime) {
    if (new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
      res.statusCode = 304;
      return res.end("Not Modified (mtime)");
    }
  }
  if (asset.type) {
    res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag) {
    res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime) {
    res.setHeader("Last-Modified", asset.mtime);
  }
  if (id.startsWith(PUBLIC_PATH)) {
    res.setHeader("Cache-Control", `max-age=${TWO_DAYS}, immutable`);
  }
  const contents = await readAsset(id);
  return res.end(contents);
}

export { serveStatic as default };
