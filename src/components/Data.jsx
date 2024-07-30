import { LiaGitAlt } from "react-icons/lia";
import { SiExpress, SiPostgresql, SiReactquery } from "react-icons/si";
import {
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { AiOutlineHtml5 } from "react-icons/ai";
import { RiSupabaseLine } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";

export const SkillsData = [
  {
    icono: <TbBrandNextjs size={15} />,
    title: "Nextjs",
    stack: "frontend",
  },
  {
    icono: <FaReact size={15} />,
    title: "React",
    stack: "frontend",
  },
  {
    icono: <TbBrandJavascript size={15} />,
    title: "JavaScript",
    stack: "frontend",
  },
  {
    icono: <TbBrandTypescript size={15} />,
    title: "Typescript",
    stack: "frontend",
  },
  {
    icono: <FaNodeJs size={15} />,
    title: "Node",
    stack: "backend",
  },
  {
    icono: <SiReactquery size={15} />,
    title: "TanStack Query",
    stack: "frontend",
  },
  {
    icono: <TbBrandTailwind size={15} />,
    title: "TailwindCSS",
    stack: "frontend",
  },
  {
    icono: <LiaGitAlt size={15} />,
    title: "Git",
  },
  {
    icono: <FaGithub size={15} />,
    title: "GitHub",
  },
  {
    icono: <RiSupabaseLine size={15} />,
    title: "Supabase",
    stack: "backend",
  },
  {
    icono: <SiPostgresql size={15} />,
    title: "PostreSQL",
    stack: "backend",
  },
  {
    icono: <AiOutlineHtml5 size={15} />,
    title: "HTML",
    stack: "frontend",
  },
  {
    icono: <TbBrandCss3 size={15} />,
    title: "CSS",
    stack: "frontend",
  },
  {
    icono: <SiExpress size={15} />,
    title: "Express",
    stack: "backend",
  },
  {
    icono: <GrMysql size={15} />,
    title: "MySQL",
    stack: "backend",
  },
];


export const projectList = [
  {
    id: "1",
    title: "Bot WhatsaApp",
    linkGitHub: "https://github.com/contrerastrece/wsp-bot",
    linkPreview: "",
    image: "",
    description: "Bot de WhatsApp para barberías gestiona interacciones con clientes, permitiendo agendar citas, ver servicios, horarios disponibles y cancelar citas",
  },
  {
    id: "2",
    title: "Quiniela",
    linkGitHub: "https://github.com/contrerastrece/quiniela-app",
    linkPreview: "https://quiniela-contra.vercel.app/",
    image: "public/quiniela.png",
    description: "Quiniela-Contra es una aplicación web que pone a prueba tus habilidades de pronósticos futbolísticos y te permite competir con otros usuarios. ",
  },
  {
    id: "3",
    title: "E-comerce",
    linkGitHub: "https://github.com/contrerastrece/teslo-sshop",
    linkPreview: "",
    image: "",
    description: "E-commerce que ofrece una amplia variedad de ropa. La tienda permite autenticación de usuarios y cuenta con una pasarela de pagos.",
  },
  {
    id: "4",
    title: "Control de Gastos",
    linkGitHub: "https://github.com/contrerastrece/control-gastos",
    linkPreview: "https://control-gastos-mauve.vercel.app/login",
    image: "public/control-gastos.png",
    description: "ontrol de gastos permite a los usuarios gestionar y monitorear sus finanzas personales, categorizando gastos e ingresos",
  },
  {
    id: "5",
    title: "Search Movies",
    linkGitHub: "https://github.com/contrerastrece/movie-app",
    linkPreview: "",
    image: "",
    description: "movies",
  },
  {
    id: "6",
    title: "Search Song",
    linkGitHub: "",
    linkPreview: "",
    image: "",
    description: "music",
  },
  {
    id: "7",
    title: "Weather App",
    linkGitHub: "https://github.com/contrerastrece/weather-app",
    linkPreview: "",
    image: "",
    description: "Weather",
  },
];