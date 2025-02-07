import * as React from "react"
const SvgComponent = ({ width, height, fillColor }: { width: number | string, height: number | string, fillColor: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
		viewBox="0 0 73 73"
  >
    <g clipPath="url(#a)">
      <path
				fill={fillColor}
        d="M57.792 0H15.208C6.81 0 0 6.81 0 15.208v42.584C0 66.19 6.81 73 15.208 73h42.584C66.192 73 73 66.19 73 57.792V15.208C73 6.81 66.193 0 57.792 0ZM44.208 59.586c-1.232.238-1.625-.52-1.625-1.168v-6.676c0-2.272-.797-3.75-1.673-4.505 5.42-.602 11.115-2.661 11.115-12.005 0-2.659-.95-4.83-2.504-6.53.25-.615 1.083-3.091-.24-6.44 0 0-2.04-.654-6.685 2.494-1.947-.547-4.028-.812-6.096-.824-2.068.009-4.149.277-6.093.818-4.647-3.148-6.691-2.494-6.691-2.494-1.32 3.352-.487 5.825-.234 6.442-1.558 1.703-2.507 3.872-2.507 6.53 0 9.32 5.68 11.41 11.087 12.027-.696.609-1.326 1.68-1.545 3.255-1.39.62-4.91 1.694-7.081-2.026 0 0-1.287-2.336-3.732-2.51 0 0-2.373-.03-.167 1.482 0 0 1.597.748 2.704 3.559 0 0 1.408 4.343 8.176 2.871v4.53c0 .641-.393 1.395-1.606 1.17C19.138 56.371 12.167 47.25 12.167 36.5c0-13.441 10.895-24.333 24.333-24.333 13.438 0 24.333 10.892 24.333 24.333 0 10.746-6.962 19.865-16.625 23.086Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h73v73H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
