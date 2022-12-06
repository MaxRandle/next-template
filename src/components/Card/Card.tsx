import cn from "classnames";
import React from "react";
import styles from "./Card.module.scss";

type CardProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * @summary specifies the background color, defaults to 'raised'
   */
  palette?: "base" | "raised" | "primary";
};

export const Card: React.FC<CardProps> = ({
  palette = "raised",
  className,
  ...props
}: CardProps) => {
  const classNames = cn(className, styles.card, {
    [styles[`card--${palette}`] ?? ""]: palette,
  });

  return <div className={classNames} {...props} />;
};
