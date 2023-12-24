import { useState } from 'react'


export default function SignupStatePage(){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [ emailError, setEmailError] = useState('')


    function onChangeEmail(event){ //이벤트 핸들러 함수
        console.log(event) //나의 행동
        console.log(event.target) //작동된 태그 input나옴
        console.log(event.target.value)  //작동된 태그의 입력된 값
        //event는 on바인딩 함수에서는 event함수를 넣어준다. Event핸들러 함수라고도 함

        setEmail(event.target.value)

    }

    function onChangePassword(event){
        setPassword(event.target.value)
    }



    function onClickSignup(event){

        console.log(email) //진짜 포장이 잘되었는지 확인해보기
        console.log(password) //진짜 포장이 잘되었는지 확인해보기


        //1.검증하기
        if(email.includes('@') === false){
            //alert('이메일이 올바르지 않습니다')
            setEmailError('이메일이 올바르지 않음! @가없음 ')
        }else{
             //2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수 API)
            alert('회원가입을 축하합니다!!')
        }

        //3. 성공 알람 보여주기
    }

    return(

        <div>
            이메일: <input type="text" onChange={onChangeEmail} />
            {/* <div id="myerror"></div> */}
            <div>{emailError}</div>
            비밀번호:<input type="password" onChange={onChangePassword} />
            <button onClick={onClickSignup}>회원가입</button>
        </div>




    )

}