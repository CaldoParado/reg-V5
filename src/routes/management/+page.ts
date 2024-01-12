// import { redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async () => {
    return {
        status: 401,
        redirect: '/login'
      };
    return {};
}) satisfies PageLoad;