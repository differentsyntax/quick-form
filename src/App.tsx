import { useState } from "react";
import "./App.css";
import Form from "./form/Form";
import { EntryData, initialEntryData, User } from "./utilities";
import Table from "./table/Table";

function App() {
  const [entries, setEntries] = useState<EntryData>(initialEntryData);
  const handleSubmit = (userData: User) => {
    setEntries((prevData: EntryData) => [...prevData, userData]);
  };

  return (
    <>
      <div className="form-and-table">
        <Form onSubmit={handleSubmit} />
        <Table data={entries} />
      </div>
    </>
  );
}

export default App;
