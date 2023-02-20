import clsx from "clsx";

const Container = ({
  children,
  className,
  wFull,
  flex,
  row,
  col,
  justifyCenter,
  justifyBetween,
  justifyAround,
  alignCenter,
  alignBaseline,
  gap1,
  gap2,
  gap3,
  wrap,
  reverse,
  ...rest
}) => {
  return (
    <>
      <section
        className={clsx(
          className && className,
          wFull && "w-full",
          flex && "flex",
          row && "flex-row",
          col && "flex-col",
          justifyCenter && "justify-center",
          justifyBetween && "justify-between",
          justifyAround && "justify-around",
          alignCenter && "items-center",
          alignBaseline && "items-baseline",
          gap1 && "gap-4",
          gap2 && "gap-8",
          gap3 && "gap-12",
          wrap && "flex-wrap",
          reverse && "flex-row-reverse",
        )}
        {...rest}
      >
        {children}
      </section>
    </>
  );
};

export default Container;
