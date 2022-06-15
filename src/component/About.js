import React from 'react'
// I imported NoteConext from ./noteContext so I can use it here.
// import noteContext from '../context/notes/noteContext'

const About = () => {
  // Asigned the vairable a to use useContext to access noteContext from main noteContext file to access the state. 
  // const a = useContext(noteContext);
  // I order to use useEffect function to apply the setTimeout function I have created in noteState.
  // useEffect(() => {
  // a.update(); function is called so it can update the things that I have updated in noteState.
  // a.update();
  // eslint-disable-next-line
  // }, [])

  return (
    <>
      {/* I have to call state via {a.state.name} & {a.state.class} because I have seted the state inside the state. */}
      {/* This is About {a.state.name} and he is in class {a.state.class} */}
      <div className="aboutUsParaBody">
            <h1>About iNotebook</h1>
        <div className="aboutUsParaBox">
          <div className="aboutUsWhat iPara">
            <h2>s iNotebook</h2>
            <p>iNotebook is a helpful tool for people around the world which can save their notes in the cloud so they access them from anywhere around the world. Your notes are secured by the end-to-end encrypted server so you can hassle-free save notes in iNotebook.</p>
        </div>
          </div>

          <div className="aboutUsParaBox">
            <div className="aboutUsPara">
              {/* <h1>About iNotebook</h1> */}
              <h2>Our mission</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur molestias illum temporibus cumque expedita, perferendis magni? Impedit pariatur odio, esse consectetur est dolorum. Ut atque, voluptatum reprehenderit sunt voluptas quasi sequi placeat. Ullam laborum doloribus, autem maxime ab vero quis.</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default About;