import { createContext, useState } from "react";

export const EventContext = createContext();

export default function EventContextProvider({ children }) {
  const [eventList, setEventList] = useState([
    {
      title: "A",
      id: 1,
      description: "fghjk",
      imgUrl:
        "https://media.foot-national.com/photo_article/613397/227961/1200-L-football-amateur-l-equite-sportive-en-danger.jpg",
    },
    {
      title: "B",
      id: 2,
      description: "dsfgrefds",
      imgUrl:
        "https://media.foot-national.com/photo_article/613397/227961/1200-L-football-amateur-l-equite-sportive-en-danger.jpg",
    },
    {
      title: "C",
      description: "nbvcxwqsdfghjklmpoiuytreza",
      id: 3,
      imgUrl:
        "https://media.foot-national.com/photo_article/613397/227961/1200-L-football-amateur-l-equite-sportive-en-danger.jpg",
    },
    {
      title: "D",
      id: 4,
      description: "poiuytrezaqsdfghjklm",
      imgUrl:
        "https://media.foot-national.com/photo_article/613397/227961/1200-L-football-amateur-l-equite-sportive-en-danger.jpg",
    },
    {
      title: "E",
      id: 5,
      description: "mlkjhgfdsqazertyu",
      imgUrl:
        "https://media.foot-national.com/photo_article/613397/227961/1200-L-football-amateur-l-equite-sportive-en-danger.jpg",
    },
  ]);
  return (
    <EventContext.Provider value={{ eventList }}>
      {children}
    </EventContext.Provider>
  );
}
