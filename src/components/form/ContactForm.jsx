export const ContactForm = () => {
  return (
    <form action="" className="flex flex-col gap-2 w-full max-w-md mx-auto">
      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input
          type="email"
          placeholder="example@email.com"
          className="input input-bordered w-full"
        />
      </label>

      <label className="form-control w-full">
        <div className="label">
          <span className="label-text">Mensaje</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24 w-full resize-none"
          placeholder="Escribe tu mensaje"
        ></textarea>
      </label>

      <button className="btn btn-primary w-full mt-3">Enviar</button>
    </form>
  );
};
