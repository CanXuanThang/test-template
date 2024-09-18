import type { TData } from "@/models";
import { useState } from "react";
import './_index.scss'

interface Props {
  data: TData[];
}

function AnswerAQuestion({ data }: Props) {
  const [answer, setAnswer] = useState(-1);

  const handleClick = (index: number) => {
    setAnswer(index);
  };

  return (
    <ul className="answer-a-question" >
      {data.map((item, index) => (
        <li className="question-item" key={index}>
          <p onClick={() => handleClick(index)}>›› {item.name}</p>
          <div className={index === answer ? "answer" : "answer-hidden"}>
            <div dangerouslySetInnerHTML={{__html: item.shortDescription}} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default AnswerAQuestion;
