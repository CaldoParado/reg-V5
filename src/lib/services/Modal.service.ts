import { writable, type Writable } from 'svelte/store';
import type { ModalProps, ModalState } from '$lib/models/modal.model';

/**
 * Initial state for the modal store.
 * @type {ModalState}
 */
const initialState: ModalState = {
	component: null,
	props: {}
};

/**
 * Show a modal with a specified component and props.
 * 
 * @param {ConstructorOfATypedSvelteComponent | null} component - The Svelte component to display in the modal.
 * @param {Object.<string, never>} [props={}] - Optional props to pass to the Svelte component.
 */
export function showModal(
	component: ConstructorOfATypedSvelteComponent | null,
	props: ModalProps = {}
): void {
	modalStore.set({ component, props: props??{} });
}

/**
 * Hide the currently displayed modal.
 */
export function hideModal(): void {
	modalStore.set({ component: null, props: {} });
}

/**
 * The writable store to manage modal state.
 * @type {Writable<ModalState>}
 */
export const modalStore: Writable<ModalState> = writable(initialState);
