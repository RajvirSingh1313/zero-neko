import React from 'react'
const ChildListWords = (props) =>{
    return(
        <p className="text-xs lg:text-sm text-right">{(props.num === -1 ? "" : props.num+1+". ")+props.datas.glosses[0][0].toUpperCase()+props.datas.glosses.join("; ").slice(1)}</p>
    )
}

export default ChildListWords;