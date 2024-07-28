import express from "express";
import { Resend } from "resend";
import cors from "cors";
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const resend = new Resend(process.env.VITE_RESEND_API_KEY);
app.use(cors());

app.use(express.json()); // Para analizar JSON en el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true })); // Para analizar datos de formulario en el cuerpo de las solicitudes

// app.get("/", async (req, res) => {
//   const { data, error } = await resend.emails.send({
//     from: "Acme <onboarding@resend.dev>",
//     to: ["contrerastrece@gmail.com"],
//     subject: "hello world",
//     html: "<strong>it works!</strong>",
//   });

//   if (error) {
//     return res.status(400).json({ error });
//   }

//   res.status(200).json({ data });
// });
app.post("/", async (req, res) => {
  console.log(req.body)
  const { msg, email } = req.body;

  const { data, error } = await resend.emails.send({
    from: "Portafolio <onboarding@resend.dev>",
    to: ["contrerastrece@gmail.com"],
    subject: "Mensaje Enviado desde tu Portafolio",
    html: `<strong>it works! email: ${email} text:${msg} </strong>`,
  });
  if (error) {
    return res.status(400).json({ error });
  }

  res.status(200).json(data);
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
