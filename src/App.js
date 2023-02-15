import Navigation from "./components/pages/Navigation";

function App() {
  return (
    <div className="App"
    style={{
      backgroundImage: `url("https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "100vh",
    }}
    
    
    >
      <Navigation />
    </div>
  );
}

export default App;
