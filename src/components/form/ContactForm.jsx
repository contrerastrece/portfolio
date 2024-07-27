import { useState } from "react";
// import { EmailTemplate } from "../../email-template";
import resend from "../../resend";

export const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "Hello from Resend!",
        text: message,
      });
      setStatus("Email sent successfully!");
    } catch (error) {
      setStatus("Failed to send email.");
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
          placeholder="example@email.com"
          className="input input-bordered w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Mensaje</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24 w-full resize-none"
          placeholder="Escribe tu mensaje"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </label>

      <button className="btn btn-primary w-full mt-3" type="submit">
        Enviar
      </button>
    </form>
  );
};
