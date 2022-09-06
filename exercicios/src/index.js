import React from 'react'
import ReactDOM from 'react-dom'

import {BomDia, BoaNoite } from './components/multiplos'
import Saudacao from './components/classe'

ReactDOM.render(

<div>
    <BomDia nome="João" />
    <BoaNoite nome = "João "/>
</div>
,document.getElementById('root'))


ReactDOM.render(

    <div>
        <Saudacao tipo="Bom Dia" nome="João"/>
    </div>
    ,document.getElementById('root'))




    

//ReactDOM.render(<h1>React</h1>, document.getElementById('root'))

