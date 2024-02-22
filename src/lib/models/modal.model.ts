/**
 * Defines the state structure for a modal in the application.
 * 
 * @property {ConstructorOfATypedSvelteComponent | null} component - Represents the Svelte component
 *           that will be displayed inside the modal. Can be set to `null` to indicate no component
 *           should be displayed.
 * 
 * @property {Object.<string, never>} props - An object that contains properties intended to be passed
 *           as props to the Svelte component when rendering it inside the modal. In this specific 
 *           definition, the object keys are strings, but they are not expected to have any values 
 *           (indicated by the `never` type). Is a placeholder for future extensions.
 */
export type ModalState = {
    component: ConstructorOfATypedSvelteComponent | null;
    props: ModalProps;
};


export interface ModalProps {
    retain?: boolean;
    data?: {[key: string]: unknown};
}
