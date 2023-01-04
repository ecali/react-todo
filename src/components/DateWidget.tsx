import { useEffect } from "react";

export const DateWidget = () => {

    useEffect(() => {
       const dt = new Date();
       var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    }, [])
  return <></>;
};
