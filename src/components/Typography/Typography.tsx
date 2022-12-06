import cn from "classnames";
import React from "react";
import styles from "./Typography.module.scss";

type TypographyProps = React.ComponentPropsWithoutRef<"p"> & {
  /**
   * @summary the visual size of the text, defaults to 'body'
   */
  level?: "body" | "caption";
  /**
   * @summary specifies the text color, defaults to 'inherit'
   */
  color?: "base" | "weak" | "primary";
};

export const Typography: React.FC<TypographyProps> = ({
  level = "body",
  color,
  className,
  ...props
}: TypographyProps) => {
  const classNames = cn(className, styles.typography, {
    [styles[`typography--${color}`] ?? ""]: color,
    [styles[`typography--${level}`] ?? ""]: level,
  });

  return <p className={classNames} {...props} />;
};
