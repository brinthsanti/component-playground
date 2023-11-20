import React, { useContext, useEffect, useRef } from "react";

import "./index.css";

const ScrollerContext = React.createContext();
export default function Scroller({ children, currentItem, loaded }) {
  const sections = useRef([]);

  useEffect(()=>{
    if(loaded){
      const {element: activeSection} = sections.current.find(section => section.id === currentItem);
    activeSection.scrollIntoView();
    }
  },[loaded])
  function register(section) {
    sections.current = [...sections.current, section];
  }

  function unregister(id) {
    const filtered = sections.current.filter(
      (section) => section.id !== id
    );
    sections.current = filtered;
  }
  return (
    <div className="scroller">
      <ScrollerContext.Provider
        value={{
          register,
          unregister,
        }}
      >
        {children}
      </ScrollerContext.Provider>
    </div>
  );
}

export function Section({ id, children }) {
  const elementRef = useRef({});
  const { register, unregister } = useContext(ScrollerContext);

  useEffect(() => {
    if (elementRef.current) {
      console.log('elementRef.current', elementRef.current);
      register({ id, element: elementRef.current })
    }

    return () => {
      unregister(id);
    }
  }, [])
  return <div id={id} className="scroll-section" ref={elementRef}>
    {children}
  </div>
}