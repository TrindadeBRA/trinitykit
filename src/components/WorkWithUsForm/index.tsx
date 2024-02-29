import React, { useState } from "react";

//TODO Refatorar ese componente, foi apenas um teste

const WorkWithUsForm = () => {
  const [formData, setFormData] : any = useState({
    name: "",
    email: "",
    phone: "",
    presentation_document: null, // Renomeie para corresponder ao nome do arquivo
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: any) => {
    setFormData({ ...formData, presentation_document: e.target.files[0] }); // Use o mesmo nome que você definiu no FormData
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name); // Use formData.name para acessar o valor do campo
    formDataToSend.append('email', formData.email); // Use formData.email para acessar o valor do campo
    formDataToSend.append('phone', formData.phone); // Use formData.phone para acessar o valor do campo
    formDataToSend.append('presentation_document', formData.presentation_document); // Use formData.presentation_document para acessar o arquivo

    try {
      const token = "ohuhasgdkahsdkjasnbdkjbasdkjbdjb"
      console.log(">>>", token)
      const response = await fetch('https://cms.thetrinityweb.com.br/wp-json/trinitykit/v1/talents-bank/add-talent', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + token,
        },
        body: formDataToSend,
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-300">
      <h2 className="text-2xl font-bold mb-4">Trabalhe Conosco</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <div>
          <label htmlFor="name" className="block mb-1">
            Nome:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1">
            Celular:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div>
          <label htmlFor="presentation_document" className="block mb-1">
            Arquivo de CV:
          </label>
          <input
            type="file"
            id="presentation_document"
            name="presentation_document"
            onChange={handleFileChange}
            className="w-full border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          disabled={submitting}
        >
          {submitting ? "Enviando..." : "Enviar"}
        </button>
      </form>
    </div>
  );
};

export default WorkWithUsForm;
