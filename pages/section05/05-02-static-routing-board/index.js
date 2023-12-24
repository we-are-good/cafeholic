import {useRouter} from 'next/router'

export default function StaticRoutingPage(){

    const router = useRouter()



    const onClickMove1 = () =>{
        router.push("/section05/05-02-static-routing-board-moved/1")
    }
    const onClickMove2 = () =>{
        router.push("/section05/05-02-static-routing-board-moved/2")
    }
    const onClickMove3 = () =>{
        router.push("/section05/05-02-static-routing-board-moved/3")
    }


    return(
        <div>
            <button onClick={onClickMove1}>1번 게시글로 이동하기</button>
            <button onClick={onClickMove2}>2번 게시글로 이동하기</button>
            <button onClick={onClickMove3}>3번 게시글로 이동하기</button>
        </div>
    )
}