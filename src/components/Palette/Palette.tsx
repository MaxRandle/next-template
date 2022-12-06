import cn from "classnames";
import React from "react";
import styles from "./Palette.module.scss";

type PaletteProps = React.ComponentPropsWithoutRef<"div">;

export const Palette: React.FC<PaletteProps> = ({ className, ...props }: PaletteProps) => {
  const classNames = cn(className, styles.container);

  console.log(styles);

  const hues = ["base", "primary", "success", "info", "warning", "danger"] as const;
  const lights = ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"] as const;

  return (
    <div className={classNames} {...props}>
      {lights.map((light) =>
        hues.map((hue) => {
          const itemClassNames = cn(styles.item, {
            [styles[`item--${hue}-${light}`] ?? ""]: `item--${hue}-${light}`,
          });

          return <div key={`${hue}-${light}`} className={itemClassNames} />;
        })
      )}
    </div>
  );
};
