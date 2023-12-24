import { useQuery, gql } from "@apollo/client"

const FETCH_BOARD = gql`
    query{
        fetchBoard(number:1){
            number
            writer
            title
            contents
        }
    }
`



export default function StaticRoutingMovedPage(){

    const { data } = useQuery(FETCH_BOARD)

    console.log(data)

    return(
        <div>
            <div>1번 게시글 이동이 완료되었습니다.</div>
            <div>작성자 : {data?.fetchBoard?.writer}</div> //옵셔널 체이닝 이라고 부름(optional-chaining, 축약)
            <div>제목 : {data && data.fetchBoard?.title}</div> //조건부랜더링.
            <div>내용 : {data ? data.fetchBoard?.contents : "로딩중입니다"}</div> //삼항연상자
        </div>
        
    )

}