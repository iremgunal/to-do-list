import ToDoContainer from "./components/ToDoContainer/ToDoContainer";

const INITIAL_STATE = [
  {id:1 , baslik:'Alışveris yap' , tamamlandi:false},
  {id:2 , baslik:'React çalış' , tamamlandi:false},
  {id:3 , baslik:'Gibi yeni bölüm izle' , tamamlandi:true}
]

function App() {
  return (
    <div className="App">
    <ToDoContainer tasks={INITIAL_STATE} />
    </div>
  );
}

export default App;
