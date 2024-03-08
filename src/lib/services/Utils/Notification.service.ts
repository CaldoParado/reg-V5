import Toastify from 'toastify-js';

export function showError(message?: string): void {
    Toastify({
        text: message ?? '¡Ocurrió un error!',
        duration: 1500,
        // destination: "https://github.com/apvarun/toastify-js",
        // newWindow: true,
        // close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: false, // Prevents dismissing of toast on hover
        style: {
            //   background: "linear-gradient(to right, #b09b00, #96c93d)",
            background: "linear-gradient(to right, crimson, tomato)",
            borderRadius: "10px",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}
export function showSuccess(message?: string): void {
    Toastify({
        text: message ?? '¡La operación se completó con exito!',
        duration: 1500,
        gravity: "top",
        position: "right",
        stopOnFocus: false,
        style: {
            background: "linear-gradient(to right, green, #20B2AA)",
            borderRadius: "10px",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}