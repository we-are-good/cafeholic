import { RedInput, BlueButton } from "./BoardWrite.styles"


export default function BoardWriteUI(props) {


    return (

        <div>
            <div>@@@@@@@여기는 프리젠터입니다 @@@@@@@@</div>
            <div>
                작성자: <input type="text" onChange={props.bbb} />
                제목: <input type="text" onChange={props.ccc} />
                내용: <input type="text" onChange={props.ddd} />
                <button onClick={props.aaa}>GRAPHQL-API 요청하기</button>
            </div>
            <div>@@@@@@@여기는 프리젠터입니다 @@@@@@@@</div>
        </div>


    )
}