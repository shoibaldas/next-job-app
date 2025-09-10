import React from "react";
import clsx from "clsx";

// Base heading styles without color (color will be applied separately)
const headingBaseStyles = {
  h1: "text-5xl font-bold",
  h2: "text-4xl font-bold",
  h3: "text-3xl font-bold",
  h4: "text-2xl font-bold",
  h5: "text-xl font-bold",
  h6: "text-lg font-bold",
};

// Default colors for when no custom color is provided
const defaultHeadingColor = "text-text-primary";

// Casing utility
const casingClass = {
  none: "",
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  normal: "normal-case",
};

// Alignment utility
const alignClass = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

// Font family utility
const fontFamilyClass = {
  roboto: "font-primary",
  akira: "font-akira",
};

/**
 * Heading component
 * @param {object} props
 * @param {1|2|3|4|5|6} level - Heading level (1-6)
 * @param {string} color - Tailwind or custom color class (e.g. 'text-blue-600' or '#262626')
 * @param {string} align - 'left' | 'center' | 'right' | 'justify'
 * @param {string} casing - 'uppercase' | 'lowercase' | 'capitalize' | 'normal' | 'none'
 * @param {string} fontFamily - 'roboto' | 'akira'
 * @param {string} className - Additional classes
 * @param {ReactNode} children
 */
export function Heading({
  level = 1,
  children,
  className = "",
  color,
  align = "left",
  casing = "none",
  fontFamily = "roboto",
  ...props
}) {
  const Tag = `h${level}`;
  const colorClass = color || defaultHeadingColor;

  const fontClass = className.includes("font-")
    ? ""
    : fontFamilyClass[fontFamily];
  
  return (
    <Tag
      className={clsx(
        headingBaseStyles[`h${level}`],
        colorClass,
        alignClass[align],
        casingClass[casing],
        // fontFamilyClass[fontFamily],
        fontClass,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}

/**
 * Text component
 * @param {object} props
 * @param {string} size - 'xs' | 'sm' | 'base' | 'lg' | 'xl'
 * @param {string} weight - 'thin' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
 * @param {string} color - Tailwind or custom color class
 * @param {string} align - 'left' | 'center' | 'right' | 'justify'
 * @param {string} casing - 'uppercase' | 'lowercase' | 'capitalize' | 'normal' | 'none'
 * @param {string} fontFamily - 'roboto' | 'akira'
 * @param {string} className - Additional classes
 * @param {ReactNode} children
 */
export function Text({
  size = "base",
  weight = "normal",
  color,
  align = "left",
  casing = "none",
  fontFamily = "roboto",
  className = "",
  children,
  ...props
}) {
  const sizeClass = {
    xs: "text-xs",
    sm: "text-sm",
    base: "text-base",
    lg: "text-lg",
    xl: "text-xl",
  }[size];

  const weightClass = {
    thin: "font-thin",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
  }[weight];

  const colorClass = color || "text-text-secondary";

  return (
    <span
      className={clsx(
        sizeClass,
        weightClass,
        alignClass[align],
        casingClass[casing],
        fontFamilyClass[fontFamily],
        colorClass,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}