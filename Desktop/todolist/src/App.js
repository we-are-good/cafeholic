import "App.css" 
import { useState } from 'react';


export default function App() {

  
  //state hook
  const [ title, setTitle ] = useState(""); //제목
  const [ writer, setWriter ] = useState(""); //내용
  const [ todocard, setTodoCard ] = useState([
    {
      id: 0,
      title: "123",
      writer: "1234",
      done: false 
    }
  ]);

  //error
  const [titleError, setTitleError] = useState("");
  const [writerError, setWriterError] = useState("");


  /** 함수 선언 */
  //제목
  const onChangeWriter = (e) =>{
    setTitle(e.target.value);
    console.log(title);

    if(e.target.value !== ""){
      setTitleError("");
    }
  }

  //내용
  const onChangeContents = (e) => {
    setWriter(e.target.value);
    if(e.target.value !== ""){
      setWriterError("");
    }
  }


  //보내기(추가하기,등록하기) btn
  const onSubmitHandler = () => {
    if(!title){
      setTitleError("제목을 입력해주세요");
    }else{
      setTitleError("");
    }
    
    if(!writer){
      setWriterError("내용을 입력해 주세요.");
    }else{
      setWriterError("");
    }

    if(title && writer){
      alert("게시글이 등록되었습니다.");

      const newTodoList = {
        id: todocard.length + 1,
        title,
        writer,
        done: false
      }
      setTodoCard([...todocard, newTodoList]);

      setTitle("");
      setWriter("");
    }
  }

  //삭제하기 btn
  const onDelHandler = (id) => {
    const delTodoList = todocard.filter((item) => item.id !== id);
    setTodoCard(delTodoList);
  }

  const isDone = (id) => {
    const isDoneTodoList = todocard.map((item) => {
      if(item.id === id){
        return {...item, done: !item.done}
      }
      return item;
    });
    setTodoCard(isDoneTodoList);
  }



  return (
    <div className="wrapper">
      <div className="test">
        <input type="text" placeholder="제목을 넣어주세요." value={title} onChange={onChangeWriter} />
        <p>{titleError}</p>
        <input type="text" placeholder="내용을 입력해주세요." value={writer} onChange={onChangeContents} />
        <p>{writerError}</p>
        <button onClick={onSubmitHandler}>등록하기</button>
      </div>
      
      
      <h1>working</h1>
      <div>
        <ul>
          { todocard.map((item) => {
            if( item.done === false){
              return(
                  <li key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.writer}</p>
                    <div>
                      <button onClick={() => onDelHandler(item.id)}>삭제하기</button>
                      <button onClick={() => isDone(item.id)}>{item.done? "취소" : "완료"}</button>
                    </div>
                  </li>
              );
            }
            return null;
          })} 
          </ul>
      </div>
      <h1>done</h1>
      <div>
        <ul>
          { todocard.map((item) => {
            if(item.done === true){
              return(
                  <li key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.writer}</p>
                    <div>
                      <button onClick={() => onDelHandler(item.id)}>삭제하기</button>
                      <button onClick={() => isDone(item.id)}>{item.done? "취소" : "완료"}</button>
                    </div>
                  </li>
              );
            }
            return null;
            })} 
        </ul>
      </div>
    </div>
  )
}
