import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
        _id
        number
        }
    }
`


export default function GraphqlMutationPage(){

    const [writer, setWriter] = useState()
    const [title, setTitle] = useState() 
    const [contents, setContents] = useState() 

    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () =>{
        const result = await 나의함수({
            variables:{
                writer: writer,
                title: title,
                contents: contents
            }
        })
        console.log(result)
    }

    const onChangeWiter = (event) =>{
        setWriter(event.target.value)
    }   

    const onChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const onChangeContents = (event) => {
        setContents(event.target.value)
    }



    //한줄일때 괄호() 필요없음
    return (
        <>
            작성자: <input type="text" onChange={onChangeWiter} />
            제목: <input type="text" onChange={onChangeTitle} />
            내용: <input type="text" onChange={onChangeContents} />
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        </>
    )
    
}