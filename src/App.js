import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    text: "",
    checkbox: false,
    radio: "",
    select: "",
  });
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setResponses([...responses, formData]);
      setLoading(false);
      setFormData({
        text: "",
        checkbox: false,
        radio: "",
        select: "",
      });
    }, 2000);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Campos do formulário */}
        <div>
          <label>
            Campo de Texto:
            <input
              type="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Checkbox:
            <input
              type="checkbox"
              name="checkbox"
              checked={formData.checkbox}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Radio Button:
            <input
              type="radio"
              name="radio"
              value="opcao1"
              checked={formData.radio === "opcao1"}
              onChange={handleChange}
            />{" "}
            Opção 1
            <input
              type="radio"
              name="radio"
              value="opcao2"
              checked={formData.radio === "opcao2"}
              onChange={handleChange}
            />{" "}
            Opção 2
          </label>
        </div>

        <div>
          <label>
            Caixa de Seleção:
            <select
              name="select"
              value={formData.select}
              onChange={handleChange}
            >
              <option value="">Selecione...</option>
              <option value="opcao1">Opção 1</option>
              <option value="opcao2">Opção 2</option>
            </select>
          </label>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Carregando..." : "Enviar"}
        </button>
      </form>

      <h2>Respostas do Formulário</h2>
      <table>
        <thead>
          <tr>
            <th>Texto</th>
            <th>Checkbox</th>
            <th>Radio</th>
            <th>Selecionado</th>
          </tr>
        </thead>
        <tbody>
          {responses.map((response, index) => (
            <tr key={index}>
              <td>{response.text}</td>
              <td>{response.checkbox ? "Sim" : "Não"}</td>
              <td>{response.radio}</td>
              <td>{response.select}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
