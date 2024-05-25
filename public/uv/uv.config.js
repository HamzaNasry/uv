/*global Ultraviolet*/
self.__uv$config = {
    prefix: "/uv/",
    bare: "/b/",
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: "public/uv/uv.handler.js",
    client: "public/uv/uv.client.js",
    bundle: "public/uv/uv.bundle.js",
    config: "public/uv/uv.config.js",
    sw: "public/uv/sw.js",
};
