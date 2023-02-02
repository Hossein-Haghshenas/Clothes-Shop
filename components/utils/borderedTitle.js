import clsx from "clsx";

const BorderedTitle = ({ title, titleClassName, containerClassName }) => {
  return (
    <>
      <section className={clsx("border-b-2 border-slate-300 pb-6 mb-6", containerClassName && containerClassName)}>
        <h3 className={clsx("font-semibold text-[35px]", titleClassName && titleClassName)}>{title}</h3>
      </section>
    </>
  );
};

export default BorderedTitle;
