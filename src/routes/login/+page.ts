import type { PageLoad } from './$types';

export const load = (async () => {
	console.log('login page load data');
	return {};
}) satisfies PageLoad;
