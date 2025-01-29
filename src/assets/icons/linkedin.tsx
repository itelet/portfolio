import * as React from "react"
const SvgComponent = ({ width, height, fillColor }: { width: number | string, height: number | string, fillColor: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
		viewBox="0 0 73 73"
  >
    <path
      fill={fillColor}
      d="M57.792 0H15.208C6.81 0 0 6.81 0 15.208v42.584C0 66.19 6.81 73 15.208 73h42.584C66.192 73 73 66.19 73 57.792V15.208C73 6.81 66.193 0 57.792 0ZM24.333 57.792h-9.125V24.333h9.125v33.459Zm-4.562-37.316c-2.938 0-5.323-2.402-5.323-5.365s2.385-5.366 5.323-5.366c2.938 0 5.323 2.403 5.323 5.366 0 2.963-2.382 5.366-5.323 5.366Zm41.062 37.316h-9.125V40.746c0-10.244-12.166-9.469-12.166 0v17.046h-9.125V24.333h9.125v5.369c4.246-7.866 21.291-8.447 21.291 7.531v20.559Z"
    />
  </svg>
)
export default SvgComponent
