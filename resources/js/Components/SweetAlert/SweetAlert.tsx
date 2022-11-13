import React from 'react'
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

type StatusText = 'success' | 'error' | 'warning' | 'info';
export interface SwalOptions {
    status: StatusText,
    text: string,
    confirm?: string,
    cancel?: string,
    button?: string,
    onSuccess?: () => any,
    onCancel?: () => any 
}

export const SweetAlert = ({text, status, confirm, cancel, button = "", onSuccess, onCancel}: SwalOptions) => {
    const classes : any= {
        error: 'btn-danger',
        warning: 'btn-warning',
        success: 'btn-success',
        info: 'btn-info'
    }

    return Swal.fire({
            text: text,
            icon: status,
            showCancelButton: true,
            buttonsStyling: false,
            confirmButtonText: confirm ?? 'Confirm',
            cancelButtonText: cancel ?? 'Cancel' ,
            customClass: {
                confirmButton: `btn fw-bold ${classes[button]}`,
                cancelButton: "btn fw-bold btn-active-light-primary",
            },
        }).then(function (t: SweetAlertResult) {
            t.isConfirmed && onSuccess && onSuccess()
            t.isDismissed && onCancel && onCancel()
        })
}
