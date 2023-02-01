const FooterMenu = ({ className, title, titleClassName, menuItems, menuItemsClassName, ...rest }) => {
  return (
    <section>
      <h4 className={titleClassName && titleClassName}>{title}</h4>
      <ul className={className && className} {...rest}>
        {menuItems?.map((item) => (
          <li className={menuItemsClassName && menuItemsClassName} key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FooterMenu;
