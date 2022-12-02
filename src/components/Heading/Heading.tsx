import cn from "classnames";
import React from "react";
import styles from "./Heading.module.scss";

type HeadingProps = React.ComponentPropsWithoutRef<"h1"> & {
  /**
   * @summary the size of the heading. This property informs the DOM node type
   */
  level: 1 | 2 | 3;
  /**
   * @summary explicitly sets the DOM node type irrespective of 'level'
   */
  as?: "h1" | "h2" | "h3";
  /**
   * @summary specifies the font-color, defaults to 'inherit'
   */
  color?: "base" | "weak";
};

export const Heading: React.FC<HeadingProps> = ({
  level,
  as,
  color,
  className,
  ...props
}: HeadingProps) => {
  const Component = as ?? "h1";

  const classNames = cn(className, styles.heading, {
    [styles[`heading--${color}`] ?? ""]: color,
    [styles[`heading--${level}`] ?? ""]: level,
  });

  return <Component className={classNames} {...props} />;
};
