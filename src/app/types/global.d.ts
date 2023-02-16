declare module '*.scss'

declare module '*.png' {
	const value: string
	export = value
}

declare module '*.jpg' {
	const value: string
	export = value
}

declare module '*.svg' {
    import React from "react";
    const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
  }