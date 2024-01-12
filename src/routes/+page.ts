import type { PageLoad } from './$types';
export const prerender = true;
export const ssr = false;

export const load = (async () => {
    console.log('main page load')
    // window.addEventListener()
    return {
        name: name(),
    };
}) satisfies PageLoad;

function name() {
    return 'this is a name';
}