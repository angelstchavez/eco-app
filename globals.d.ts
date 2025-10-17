declare module "*.css" {
  const content: { [className: string]: string } | string;
  export default content;
}

declare module "*.module.css" {
  const classes: { [className: string]: string };
  export default classes;
}

declare module "*.scss" {
  const content: { [className: string]: string } | string;
  export default content;
}

declare module "*.module.scss" {
  const classes: { [className: string]: string };
  export default classes;
}

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";

