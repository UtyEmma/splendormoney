import React from 'react'
import DateRangePicker, { Props } from 'react-bootstrap-daterangepicker'
import 'bootstrap-daterangepicker/daterangepicker.css';
import moment from 'moment';

interface IProps {
    single?: boolean, 
    placeholder?: string,
    enddate?: string,
    name?: string,
    startdate?: string,
    time?: boolean
}

export const DatePicker = ({single = false, placeholder, enddate, name, startdate, time, ...props} : any & IProps) => {
    const settings = {
        singleDatePicker: single,
        endDate: enddate,
        startDate: startdate,
        timePicker: time,
        showCustomRangeLabel: true,
        locale: {
            format: "MM-DD-YYYY",
            separator: " - ",
            applyLabel: "Apply",
            cancelLabel: "Cancel",
            customRangeLabel: "Custom",
            weekLabel: "W",
            firstDay: 1,
            minDate: moment().format('MM/DD/YYY')
        }
    }


    return (
        <>
            <DateRangePicker {...props} initialSettings={settings}>
                <input type="text" name={name} className="form-control" placeholder={placeholder} />
            </DateRangePicker>
        </>
    )
}
