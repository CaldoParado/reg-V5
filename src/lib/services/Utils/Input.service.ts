import Keyboard from "../../../components/modals/Keyboard.svelte";
import { hideKeyboard, showKeyboard } from "../Keyboard.service";

export function handleInput(node: HTMLInputElement) {
    // const handleChange = (event: Event) => {
    //     console.log('Input cambiado:', (event.target as HTMLInputElement).value);
    //     showKeyboard(Keyboard);
    //     // showModal(Domicilios)
    // };

    // const updateValue = (el: HTMLInputElement): (ev: CustomEvent) => void => {

    //     return () => { };
    // }

    const handleFocus = (event: Event) => {
        const input = (event.target as HTMLInputElement);

        const itype = input.inputMode;

        showKeyboard(Keyboard, (ev: CustomEvent) => {
            switch (ev.detail) {
                case 'Backspace':
                    input.value = input.value.substring(0, input.value.length - 1);
                    break;
                default:
                    input.value += ev.detail;
                    break;
            }
        }, itype);
    };

    const handleBlur = () => {
        // const handleBlur = (event: Event) => {
        // console.log('Input desenfocado:', (event.target as HTMLInputElement).value);
        hideKeyboard();
    };

    node.addEventListener('focus', handleFocus);
    node.addEventListener('blur', handleBlur);

    return {
        destroy() {
            console.log('input destroyed')
            node.removeEventListener('focus', handleFocus);
            node.removeEventListener('blur', handleBlur);
        }
    };
}