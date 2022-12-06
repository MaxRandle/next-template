import cn from "classnames";
import React from "react";
import styles from "./Alert.module.scss";

import {
  BsXOctagon,
  BsExclamationTriangle,
  BsInfoCircle,
  BsCheckSquare,
} from "react-icons/bs";

type AlertProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   *
   * @summary alert statuses convey the meaning of the information.
   *
   * danger - there was an error or something is broken and the user needs to take action to resolve it.
   *
   * warning - important information that the user needs to see in order to warn them of a risk.
   *
   * info - supplementary information that is likely to be useful to the user in the current context.
   *
   * success - affirmative feedback that the user's actions have succeeded with the expected outcome.
   *
   */
  status: "danger" | "warning" | "info" | "success";
};

export const Alert: React.FC<AlertProps> = ({
  status,
  className,
  children,
  ...props
}: AlertProps) => {
  const classNames = cn(className, styles.alert, {
    [styles[`alert--${status}`] ?? ""]: status,
  });

  const iconClassNames = cn({
    [styles[`icon--${status}`] ?? ""]: status,
  });

  const Icon =
    status === "danger"
      ? BsXOctagon
      : status === "warning"
      ? BsExclamationTriangle
      : status === "info"
      ? BsInfoCircle
      : BsCheckSquare;

  return (
    <div className={classNames} {...props}>
      <Icon size={24} className="icon" />
      {children}
    </div>
  );
};
