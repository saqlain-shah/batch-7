import React, { Fragment } from 'react'
import NameCloclk from './nameCloclk'
import Motive from './motive'
import TimeAndDate from './timeAndDate'

export default function MianClock() {
    return (
        <div>
            <Fragment>
                <NameCloclk></NameCloclk>
                <Motive></Motive>
                <TimeAndDate></TimeAndDate>

            </Fragment>



        </div>
    )
}
