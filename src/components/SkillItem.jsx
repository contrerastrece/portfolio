export const SkillItem = ({ icono, title }) => {
  return (
    <span className="btn btn-sm font-thin text-[10px] md:text-xs flex items-center justify-center gap-2 bg-slate-100 px-5  select-none  py-1 rounded-md dark:bg-neutral  dark:text-slate-400">
      {icono} {title}
    </span>
  );
};
