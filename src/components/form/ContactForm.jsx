import { useState } from "react";
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    msg: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    // const apiKey = import.meta.env.VITE_RESEND_API_KEY;
    e.preventDefault();
    setIsLoading(true);
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:3000", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      const result = await response.json();
      console.log(result);

      if (result.id) {
        setStatus("Email sent successfully!");
        setFormData({
          email: "",
          msg: "",
        });
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      action=""
      className="flex flex-col gap-2 w-full max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="email"
          name="email"
          placeholder="example@email.com"
          className="input input-bordered w-full"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Mensaje</span>
        </div>
        <textarea
          name="msg"
          className="textarea textarea-bordered h-24 w-full resize-none"
          placeholder="Escribe tu mensaje"
          value={formData.msg}
          onChange={handleChange}
          required
        ></textarea>
      </label>

      <button
        className={`btn btn-primary w-full mt-3 ${
          isLoading && "btn-disabled"
        } `}
        type="submit"
      >
        {isLoading ? (
          <>
            <span className="loading loading-spinner"></span>Enviando...
          </>
        ) : (
          "Enviar"
        )}
      </button>
      {status && (
        <p
          className={`mt-4 text-center ${
            status.includes("successfully") ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
};
