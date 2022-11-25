import { ReactComponent } from '@inertiajs/inertia-react'
import React, { ComponentProps, ElementType, PropsWithChildren, ReactElement } from 'react'

interface IModalProps extends PropsWithChildren {
    id: string
    title?: string
}

const Modal = ({ id, children, title } : IModalProps) => {
    return (
        <div className="modal fade" id={id}  tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content rounded">
					<div className="modal-header pb-10 border-0  justify-content-between">
                        <div>
                            { title && <h2>{title}</h2>}
                        </div>
						<div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-target={id} data-bs-toggle="modal">
							<span className="svg-icon svg-icon-1">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor" />
									<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor" />
								</svg>
							</span>
						</div>
					</div>
					<div className="modal-body px-10 px-lg-15 pt-0 pb-15">
                        {children}
					</div>
				</div>
			</div>
		</div>
    )
}

interface IModalButtonProps extends PropsWithChildren<ComponentProps<'button'>>{
    as?: ElementType
    id: string
}

const ModalButton = ({as: Element = 'button', id, ...props }: IModalButtonProps ) => {
    return (
        <Element {...props} className={`btn ${props.className}`} data-bs-target={`#${id}`} data-bs-toggle='modal' >{props.children}</Element>
    )
}

Modal.Button = ModalButton

export default Modal
