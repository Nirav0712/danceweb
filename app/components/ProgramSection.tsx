'use client'

import { useState } from 'react'
import Threetype from './Threetype'
import Dancetype from './Dancetype'
import Drawingtype from './Drawingtype'
import Gymnastictype from './Gymnastictype'
import Modelingtype from './Modelingtype'
import Dramatype from './Dramatype'
import Spiritualtype from './Spiritualtype'

export default function ProgramSection() {
    const [activeProgram, setActiveProgram] = useState('dance')

    return (
        <>
            <Threetype activeProgram={activeProgram} setActiveProgram={setActiveProgram} />
            {activeProgram === 'dance' && <Dancetype />}
            {activeProgram === 'drawing' && <Drawingtype />}
            {activeProgram === 'gymnastics' && <Gymnastictype />}
            {activeProgram === 'modeling' && <Modelingtype />}
            {activeProgram === 'drama' && <Dramatype />}
            {activeProgram === 'spiritual' && <Spiritualtype />}


        </>
    )
}
