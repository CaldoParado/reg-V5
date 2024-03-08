import { writable, type Writable } from 'svelte/store';
import type { KeyboardState } from '$lib/models/keyboard.model';

/**
 * Initial state for the keyboard store.
 * @type {KeyboardState}
 */
const initialState: KeyboardState = {
    component: null,
    handler: (ev: CustomEvent) => { console.log(ev) },
    type: 'standard'
    // props: {}
};


/**
 * The writable store to manage keyboard state.
 * @type {Writable<KeyboardState>}
 */
export const keyboardStore: Writable<KeyboardState> = writable(initialState);

/**
 * Show a keyboard with a specified component and props.
 * @param {ConstructorOfATypedSvelteComponent | null} component - The Svelte component to display in the modal.
 * @param {Object.<string, never>} [props={}] - Optional props to pass to the Svelte component.
 */
export function showKeyboard(
    component: ConstructorOfATypedSvelteComponent | null,
    // type: 'standard' | 'crossword' | 'numeric',
    handler: (ev: CustomEvent) => void,
    type: string
): void {
    keyboardStore.set({ component, handler, type });
}

/**
 * Hide the currently displayed keyboard.
 */
export function hideKeyboard(): void {
    keyboardStore.set({ component: null, handler: () => { }, type: 'standard' });
}

