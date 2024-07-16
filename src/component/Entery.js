import React, {useEffect, useState} from 'react'

function Entery() {
    let count = 0;
    //일반변수는 여전히 상태변수를 받집못해서.. 
    //useRef가 등장하게 된다. 
    const[num, setNum] = useState(0); //랜더링
    return (
        <div>
            <button onClick={
                        ()=>{ 
                        
                           setNum(num + 1); //상태변수의 값을 변경하는 상태함수
                            count = num; //화살표함수 내에서 저장안됨
                            
                        }
                       }>일반변수 count 하나씩 증가</button>
            <h1>나는 일반변수 count의 상태변수값을 대입해서 출력 : { `${count = num}` } </h1>
        </div>        
    )
}

export default Entery
