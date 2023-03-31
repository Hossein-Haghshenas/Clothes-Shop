import clsx from "clsx";

const BorderedTitle = ({ title, titleClassName, containerClassName }) => {
  return (
    <>
      <section className={clsx("border-b-2 border-[#00000028] pb-6 mb-6", containerClassName && containerClassName)}>
        <h3 className={clsx("font-semibold text-[35px] sm:text-[25px]", titleClassName && titleClassName)}>{title}</h3>
      </section>
    </>
  );
};

export default BorderedTitle;
