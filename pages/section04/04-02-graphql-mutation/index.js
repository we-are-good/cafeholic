import { useMutation, gql } from '@apollo/client'

const 나의그래프큐엘셋팅 = gql`
    mutation{
        createBoard(writer:"내꺼", title:"안녕", contents:"방가"){
        _id
        number
        }
    }
`


export default function GraphqlMutationPage(){
    const [나의함수] = useMutation(나의그래프큐엘셋팅)

    const onClickSubmit = async () =>{
        const result = await 나의함수()
        console.log(result)
    }




    //한줄일때 괄호() 필요없음
    return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    
}