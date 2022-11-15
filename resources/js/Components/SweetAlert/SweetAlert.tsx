import React from 'react'
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

type StatusText = 'success' | 'error' | 'warning' | 'info';
export interface SwalOptions extends SweetAlertOptions {
    status: StatusText,
    text?: string,
    confirm?: string,
    cancel?: string,
    button?: string,
    onSuccess?: () => any,
    onCancel?: () => any 
}

export const SweetAlert = ({text, title = "", status, confirm, cancel, button = "", onSuccess, onCancel}: SwalOptions) => {
    const classes : any= {
        error: 'btn-danger',
        warning: 'btn-warning',
        success: 'btn-success',
        info: 'btn-info'
    }

    return Swal.fire({
            text: text,
            title: title,
            icon: status,
            showCancelButton: true,
            buttonsStyling: false,
            confirmButtonText: confirm ?? 'Confirm',
            cancelButtonText: cancel ?? 'Cancel' ,
            customClass: {
                confirmButton: `btn fw-bold btn-primary ${classes[button]}`,
                cancelButton: "btn fw-bold btn-light",
            },
        }).then(function (t: SweetAlertResult) {
            t.isConfirmed && onSuccess && onSuccess()
            t.isDismissed && onCancel && onCancel()
        })
}
