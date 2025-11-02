/**
 * Cloudflare Pages SSR entry point for QwikCity
 */
import {
    renderToStream,
    type RenderToStreamOptions,
} from "@builder.io/qwik/server";
import Root from "./root";

export default function (opts: RenderToStreamOptions) {
    return renderToStream(<Root />, {
        ...opts,
        containerAttributes: {
            lang: "en-us",
            ...opts.containerAttributes,
        },
        serverData: {
            ...opts.serverData,
        },
    });
}
