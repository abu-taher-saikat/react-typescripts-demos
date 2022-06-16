import "./App.css";
import Counter from "./components/state/Counter";

function App() {
  const personName = {
    first: "saikat",
    last: "abu taher",
  };

  const nameList = [
    {
      first: "saikat",
      last: "abu taher",
    },
    {
      first: "ibrahim",
      last: "kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];
  return (
    <div className="App">
      {/* <Greet name="saikat" messageCount={6} isLoggedIn={true} />
      <Person name={personName} />
      <PersonaList names={nameList} /> */}
      {/* <Status status="success" />
      <Oscar>
        <Heading>Plaeholder text</Heading>
      </Oscar>
      <Greet name="Saikat" messageCount={10} isLoggedIn={true}></Greet> */}

      {/* <Button
        handleClick={(event, id) => {
          console.log("button clicked", event, id);
        }}
      ></Button>

      <Input value="" handleChange={(event) => console.log(event)}></Input> */}

      {/* <Container
        styles={{ border: "1px solid black", padding: "1rem" }}
      ></Container> */}
      <Counter />
    </div>
  );
}

export default App;
