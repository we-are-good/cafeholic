import axios from 'axios'

export default function RestGetPage(){
    
    function onClickAsync(){
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log(result) //promise
    }

    // async function onClickSync(){
    //     const result = await axios.get("https://koreanjson.com/posts/1")
    //     console.log(result) //제대로된 결과 => { title: .... }
    //     console.log(result.data.title) // title 내용 보여준다 
    // } -> 함수 중복선언 문제

    const onClickSync = async () => {
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result) //제대로된 결과 => { title: .... }
        console.log(result.data.title) // title 내용 보여준다 
    }

    return(
        <div>
            <button onClick={onClickAsync}>REST_API(비동기) 요청하기</button>
            <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
        </div>
    )
}