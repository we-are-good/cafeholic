import { useMutation, gql } from '@apollo/client'

const 나의그래프큐엘셋팅 = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
        _id
        number
        }
    }
`


export default function GraphqlMutationPage(){
    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () =>{
        const result = await 나의함수({
            variables:{
                writer: "잇츠미",
                title: "안녕반갑",
                contents: "잉잉"
            }
        })
        console.log(result)
    }




    //한줄일때 괄호() 필요없음
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    
}