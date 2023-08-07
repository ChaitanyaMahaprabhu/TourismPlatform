import { createContext, useEffect, useState } from "react";

const context = createContext();
const SharedData = (props) => {
  const [agents, setAgents] = useState([]);
  const [travellers, setTravellers] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [tours, setTours] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getAgents();
    getTravellers();
    getFeedbacks();
    getGallery();
    getTours();
    getBookings();
  }, []);

  const getAgents = async () => {
    try {
      const response = await fetch("https://localhost:7064/api/Agents");
      if (response.ok) {
        const data = await response.json();
        setAgents(data);
      } else {
        console.error("Error fetching agents:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getTravellers = async () => {
    try {
      const response = await fetch("https://localhost:7064/api/Travellers");
      if (response.ok) {
        const data = await response.json();
        setTravellers(data);
      } else {
        console.error("Error fetching travellers:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getFeedbacks = async () => {
    try {
      const response = await fetch("https://localhost:7064/api/Feedbacks");
      if (response.ok) {
        const data = await response.json();
        setFeedbacks(data);
      } else {
        console.error("Error fetching feedbacks:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getGallery = async () => {
    try {
      const response = await fetch("https://localhost:7064/api/Galleries");
      if (response.ok) {
        const data = await response.json();
        setGallery(data);
      } else {
        console.error("Error fetching galleries:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getTours = async () => {
    try {
      const response = await fetch("https://localhost:7064/api/Tours");
      if (response.ok) {
        const data = await response.json();
        setTours(data);
      } else {
        console.error("Error fetching tours:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getBookings = async () => {
    try {
      const response = await fetch("https://localhost:7064/api/Bookings");
      if (response.ok) {
        const data = await response.json();
        setBookings(data);
      } else {
        console.error("Error fetching bookings:", response.statusText);
      }
    } catch (e) {
      console.log(e);
    }
  };




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
    reviews: 80,
    agents: agents,
    feedbacks: feedbacks,
    gallery: gallery,
    tours: tours,
    travellers: travellers,
    bookings: bookings,
    setAgents: setAgents
  };

  return <context.Provider value={data}>{props.children}</context.Provider>;
};

export { SharedData, context };
