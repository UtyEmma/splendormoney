import React, { createContext, PropsWithRef, Children, Ref, cloneElement, useContext, useEffect, useState, PropsWithChildren } from 'react'

const StepperContext = createContext<{
    next: any, 
    previous: any, 
    reset: any, 
    step: number, 
    length: number
} | null>(null)

export const useStepper = () => useContext(StepperContext)

type IStepperItem = (child : React.ElementType<any>, index: number ) => React.ReactNode

export interface IStepperProps extends PropsWithChildren {
    activeStep: any
    setActiveStep: any
    reference: any
}

export const Stepper = ({children, reference, activeStep, setActiveStep} : PropsWithRef<IStepperProps>) => {
    const [step, setStep] = useState<number>(activeStep.current || 1)
    const [elements, setElements] = useState<any[]>([])

    const next = () => (step + 1) < (elements.length + 1) && setStep((step) => step + 1)
    const previous = () => (step - 1 >= 1) && setStep(step => step - 1)
    const reset = (val = 1) => setStep(val)

    useEffect(() => {
        if(Array.isArray(children)){
            (!children?.length || (children?.length <= 1)) ? setElements([children]) : setElements(children) 
        }
    }, [])

    useEffect(() => {
        if(reference) reference.current = {next, previous, reset, step, length: elements.length}           
    }, [step])

    useEffect(() => {
        setActiveStep(step)            
    }, [step])


    return (
        <StepperContext.Provider value={{next, previous, reset, step, length: elements.length}}>
            { elements.map((child, index) => step === (index + 1) ? cloneElement(child, {
                key: index
            }) : <></>) }
        </StepperContext.Provider>
    )
}
