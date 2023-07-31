import { createContext, useEffect, useState} from "react";

const context = createContext();
const SharedData = (props) => {
    const [questions, setQuestions] = useState([
        {
          question: "What is MakeMyTrip?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos rem exercitationem soluta blanditiis. Dignissimos culpa odio voluptatum fugiat dolor. Facilis numquam ratione autem magnam sunt impedit mollitia, deleniti iusto?",
          status: false,
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos rem exercitationem soluta blanditiis. Dignissimos culpa odio voluptatum fugiat dolor. Facilis numquam ratione autem magnam sunt impedit mollitia, deleniti iusto?",
          status: false,
        },
        {
          question: "Are there any additional fees or hidden charges?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos rem exercitationem soluta blanditiis. Dignissimos culpa odio voluptatum fugiat dolor. Facilis numquam ratione autem magnam sunt impedit mollitia, deleniti iusto?",
          status: false,
        },
        {
          question: "Do you offer travel insurance?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos rem exercitationem soluta blanditiis. Dignissimos culpa odio voluptatum fugiat dolor. Facilis numquam ratione autem magnam sunt impedit mollitia, deleniti iusto?",
          status: false,
        },
        {
          question: "What travel documents do I need for my trip?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos rem exercitationem soluta blanditiis. Dignissimos culpa odio voluptatum fugiat dolor. Facilis numquam ratione autem magnam sunt impedit mollitia, deleniti iusto?",
          status: false,
        },
      ]);

      const data = {
        questions,
        setQuestions
      };
    return(
        <context.Provider value = {data}>
            {props.children}
        </context.Provider>
    );
}

export {SharedData, context}