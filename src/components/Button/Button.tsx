import React from "react";

type ButtonVariant = "filled" | "outlined" | "text";
type ButtonSize = "sm" | "md" | "lg";
type ButtonColor =
  | "blue-grey"
  | "grey"
  | "brown"
  | "deep-orange"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "light-green"
  | "green"
  | "teal"
  | "cyan"
  | "light-blue"
  | "blue"
  | "indigo"
  | "deep-purple"
  | "purple"
  | "pink"
  | "red";
export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  fullWidth?: boolean;
  ripple?: boolean;
  className?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, size, color, fullWidth, ripple, className, children, ...rest },
    ref
  ) => { 
    // 1. init
    // const { button } = useTheme();
    // const { valid, defaultProps, styles } = button;
    // const { base, variants, sizes } = styles;

    
    // 2. set default props
    // variant = variant ?? defaultProps.variant;
    // size = size ?? defaultProps.size;
    // color = color ?? defaultProps.color;
    // fullWidth = fullWidth ?? defaultProps.fullWidth;
    // ripple = ripple ?? defaultProps.ripple;
    // className = className ?? defaultProps.className;
    
    // 3. set ripple effect instance
    // const rippleEffect = ripple !== undefined && new Ripple();

    // 4. set styles
    // const buttonBase = objectsToString(base.initial);
    // const buttonVariant = objectsToString(
    //   variants[findMatch(valid.variants, variant, "filled")][
    //     findMatch(valid.colors, color, "blue")
    //   ],
    // );
    // const buttonSize = objectsToString(sizes[findMatch(valid.sizes, size, "md")]);
    // const classes = classnames(
    //   buttonBase,
    //   buttonSize,
    //   buttonVariant,
    //   { [objectsToString(base.fullWidth)]: fullWidth },
    //   className,
    // );

    return (
      <button
      {...rest}
      ref={ref} className="inline-flex items-center rounded px-4 py-2 font-semibold focus:outline-none focus-visible:ring focus-visible:ring-primary-500 shadow-sm bg-primary-500 text-white border border-primary-600 hover:bg-primary-600 hover:text-white active:bg-primary-500 disabled:bg-primary-400 disabled:hover:bg-primary-400"
      
      type={rest.type || "button"}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "McinarUI.Button";

export default Button;
