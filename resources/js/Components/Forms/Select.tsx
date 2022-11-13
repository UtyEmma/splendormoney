import React, { ChangeEvent, FormEvent, PropsWithChildren, useEffect, useRef, useState } from 'react'
import ReactSelect, { ActionMeta, components, ControlProps, IndicatorsContainerProps, MenuProps, Props } from 'react-select'
import CreatableSelect from 'react-select/creatable';

export const Select = ({isMulti, children, onChange, ...propTypes} : PropsWithChildren<Props>) => {  
    
    const [elements, setElements] = useState<any>([])
    const [options, setOptions] = useState<any>(propTypes.options)
    
    const IndicatorsContainer = () => {
        return (
          <></>
        );
    };

    const Control = ({children, ...props}: ControlProps) => {
        return (
            <components.Control {...props} className={`form-select form-select-lg border-gray-300 px-2 py-1 rounded ${propTypes.className}`} >
                {children}
            </components.Control>
        )   
    }

    const Menu = (
        props: MenuProps<any>
      ) => {
        return (
          <>
            <components.Menu<any, any, any> {...props} >
              {props.children}
            </components.Menu>
          </>
        );
    };

    
    useEffect(() => {
        if(children){
            const elements = !Array.isArray(children) ? [children] : children
            setOptions(elements.map((child: any) => {
                if(!child.props.value) return;
                return {
                    label: child.props.children,
                    value: child.props?.value || "" 
                }
            }))
        }
    }, [children])

    useEffect(() => {
        setOptions(propTypes.options)
    }, [propTypes.options])


    let value = propTypes.defaultValue ? propTypes.options!.filter((option : any ) => option?.value === propTypes.defaultValue)[0] : ((options && options.length > 0) ? options[0] : null )

    return (
        <>
            <ReactSelect {...propTypes} options={options} defaultValue={value}  isMulti={isMulti ?? false} components={{IndicatorsContainer, Control, Menu}} />
            {/* <input name={propTypes.name} onChange={onChange as any} value={}   /> */}
        </>
    )
}

export const SelectCreate = (propTypes : Props) => {
    const input : any = useRef()

    const IndicatorsContainer = () => {
        return (
          <></>
        );
    };
    
    const Control = ({children, ...props}: ControlProps) => {
        return (
            <components.Control {...props} className={`${propTypes.className} form-select px-2 py-1 rounded`} >
                {children}
            </components.Control>
        )   
    }
    
    const defaultValue = propTypes.defaultValue ? propTypes.options!.filter((option : any ) => option?.value === propTypes.defaultValue) : propTypes.options![0]
    
    return (
        <>
            {/* <input type="text" name={propTypes.name} ref={input} id={propTypes.id} value={value} onChange={(e) => handleChange(e)} /> */}
            <CreatableSelect  {...propTypes} defaultValue={defaultValue} className="" components={{IndicatorsContainer, Control}} />
            {/* <input type="text" value={value} name={propTypes.name} hidden /> */}
        </>
    )
}
