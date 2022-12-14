import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function CreateWord() {
  const days = useFetch("http://localhost:3001/days");
  const history = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();

    // console.log(engRef.current.value)
    // console.log(korRef.current.value)
    // console.log(dayRef.current.value)

    if (!isLoading) {
      setIsLoading(true);

      fetch(`http://localhost:3001/words/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false
        })
      }).then(res => {
        if (res.ok) {
          alert('완료!');
          history(`/day/${dayRef.current.value}`);
        }
      })
    }

  }

  const engRef = useRef(null);
  const korRef = useRef(null);
  const dayRef = useRef(null);

  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {
            days.map(day => (
              <option value={day.day} key={day.id}>{day.day}</option>
            ))
          }
        </select>
      </div>
      <button style={{
        opacity: isLoading ? 0.3 : 1
      }}>{isLoading ? "Saving..." : "저장"}</button>
    </form>
  )
}

export default CreateWord;