import Form from "./components/Form";
import Table from "./components/Table";
import "./App.css";
import { DataProvider } from "./Context/DataContext";

function App() {
  return (
    <DataProvider>
      <div className="app-container">
        <header className="app-header">
          <h1 className="app-title">Track Your Expense</h1>
        </header>
        <main className="app-content">
          <section className="form-section">
            <Form />
          </section>
          <section className="table-section">
            <Table />
          </section>
        </main>
      </div>
    </DataProvider>
  );
}

export default App;
