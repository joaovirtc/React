import React from "react"

export default (dados) =>

 <div>
     <h1>Bom dia {dados.nome}! </h1>
     <h2>Daqui a alguns dias você vai fazer {dados.idade} anos</h2>
     </div>


//  <React.Fragments>
//      <h1>Bom dia {props.nome}! </h1>
//     <h2>Daqui a alguns dias você vai fazer {props.idade} anos</h2>
// </React.Fragments> 



// export default props => [
//     <h1 key='h1'>Bom dia {props.nome}! </h1>,
//     <h2 key = 'h2'>Daqui a alguns dias você vai fazer {props.idade} anos</h2>
// ]