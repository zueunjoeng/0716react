import React, {useEffect, useState} from 'react'

function Entery() {
    let count = 0;
    //일반변수 상태변수값을 받아서 출력하려면 return 출력식에서 처리하기
    const [bgcolor, setBg] = useState('red'); //랜더링 
    //스타일 랜더링 classList 관련 명령은 useEffect에서 처리하기 딱 한번
    return (
        <div>
            <button onClick={()=>{
                document.body.style.backgroundColor = 'blue'
            }}>파</button>
            <button onClick={()=>{
                document.body.style.backgroundColor = 'yellow'
            }}>노</button>
            <button onClick={()=>{
                document.body.style.backgroundColor = 'green'
            }}>초</button>
            
        </div>        
    )
}

export default Entery
