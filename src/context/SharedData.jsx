import { createContext, useEffect, useState} from "react";

const context = createContext();
const SharedData = (props) => {
    const questions = [
        {
          question: "What is MakeMyTrip?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos rem exercitationem soluta blanditiis. Dignissimos culpa odio voluptatum fugiat dolor. Facilis numquam ratione autem magnam sunt impedit mollitia, deleniti iusto?",
        },
        {
          question: "What payment methods do you accept?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos rem exercitationem soluta blanditiis. Dignissimos culpa odio voluptatum fugiat dolor. Facilis numquam ratione autem magnam sunt impedit mollitia, deleniti iusto?",
        },
        {
          question: "Are there any additional fees or hidden charges?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos rem exercitationem soluta blanditiis. Dignissimos culpa odio voluptatum fugiat dolor. Facilis numquam ratione autem magnam sunt impedit mollitia, deleniti iusto?",
        },
        {
          question: "Do you offer travel insurance?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos rem exercitationem soluta blanditiis. Dignissimos culpa odio voluptatum fugiat dolor. Facilis numquam ratione autem magnam sunt impedit mollitia, deleniti iusto?",
        },
        {
          question: "What travel documents do I need for my trip?",
          answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eos rem exercitationem soluta blanditiis. Dignissimos culpa odio voluptatum fugiat dolor. Facilis numquam ratione autem magnam sunt impedit mollitia, deleniti iusto?",
        },
      ];

      const data = {
        questions,
        users: 100,
        trips: 200,
        reviews: 80
      };

    return(
        <context.Provider value = {data}>
            {props.children}
        </context.Provider>
    );
}

export {SharedData, context}