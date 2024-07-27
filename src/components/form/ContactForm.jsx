import { useState } from "react";
export const ContactForm = () => {
  const [formData, setFormData] = useState({ to: "", subject: "", text: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    const apiKey = import.meta.env.VITE_RESEND_API_KEY;
    e.preventDefault();
    setIsLoading(true);
    setStatus("Sending...");

    try {
      const response = await fetch(".../../../api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          from: "onboarding@resend.dev",
          to: "contrerastrece@gmail.com",
          subject: formData.subject,
          html: `<p>Congrats on sending your <strong>text:${formData.text}, ${formData.to}</strong>!</p>`,
        }),
      });

      const result = await response.json();
      console.log(result);

      if (result.id) {
        setStatus("Email sent successfully!");
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
      {status && <p>{status}</p>}
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="email"
          name="to"
          placeholder="example@email.com"
          className="input input-bordered w-full"
          value={formData.to}
          onChange={handleChange}
          required
        />
      </label>

      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Mensaje</span>
        </div>
        <textarea
          name="text"
          className="textarea textarea-bordered h-24 w-full resize-none"
          placeholder="Escribe tu mensaje"
          value={formData.text}
          onChange={handleChange}
          required
        ></textarea>
      </label>

      <button className="btn btn-primary w-full mt-3" type="submit">
        {isLoading ? "Enviando..." : "Enviar"}
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
