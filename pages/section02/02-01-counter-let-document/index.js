export default function CounterLetDocumentPage(){



    function onClickCountUp(){
        const conut = Number(document.getElementById('qqq').innerText) + 1
        document.getElementById('qqq').innerText = conut

    }

    function onClickCountDown(){
        const conut = Number(document.getElementById('qqq').innerText) - 1
        document.getElementById('qqq').innerText = conut
    }


    return(
        <div>
            <div id="qqq">0</div>
            <button onClick={onClickCountUp}>카운트 올리기</button>
            <button onClick={onClickCountDown}>카운트 내리기</button>
        </div>
    )
}