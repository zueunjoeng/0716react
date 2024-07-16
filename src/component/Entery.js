import React, {useEffect, useState} from 'react'

function Entery() {
    let count = 0;
    //일반변수는 여전히 상태변수를 받집못해서.. 
    //useRef가 등장하게 된다. 
    const[num, setNum] = useState(0); //랜더링
    useEffect(()=>{
        document.body.style.backgroundColor = 'red'

    }, []);
    useEffect(()=>{
        document.querySelector('button').addEventListener('click', ()=>{
            setNum(num +1);
        })
    }, [num]); //랜더링이 끝나고 나서 html태그로 이해
    return (
        <div>
            <button>일반변수 count 하나씩 증가</button>
            <h1>나는 일반변수 count의 상태변수값을 대입해서 출력 : { `${count = num}` } </h1>
        </div>        
    )
}

export default Entery
