import * as React from "react"

const SvgComponent = ({ width, height }: { width: string, height: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
		preserveAspectRatio="xMidYMid slice"
    width={width}
    height={height}
    fill="none"
		viewBox="0 0 664 36"
  >
    <path
      fill="#fff"
      d="M10.271 30V11.31h12.18v2.76h-8.88v4.8h7.29v2.79h-7.29v5.58h8.79V30h-12.09Zm19.41.36c-1.54 0-2.74-.36-3.6-1.08-.84-.74-1.26-1.69-1.26-2.85 0-.74.16-1.42.48-2.04.34-.64.84-1.19 1.5-1.65.66-.46 1.48-.81 2.46-1.05.98-.26 2.1-.39 3.36-.39h.6c.24 0 .5.01.78.03.28 0 .54.02.78.06l.09 2.34c-.2-.02-.44-.03-.72-.03-.28-.02-.57-.03-.87-.03-.28-.02-.52-.03-.72-.03-.8 0-1.48.06-2.04.18-.54.12-.98.29-1.32.51a1.928 1.928 0 0 0-.99 1.68c0 .32.05.59.15.81.12.22.27.4.45.54.2.12.43.21.69.27.26.06.54.09.84.09.6 0 1.12-.09 1.56-.27.46-.2.84-.51 1.14-.93.32-.42.55-.94.69-1.56.16-.64.24-1.39.24-2.25 0-1.16-.12-2.05-.36-2.67-.24-.62-.59-1.05-1.05-1.29-.46-.26-1.04-.39-1.74-.39-.64 0-1.25.11-1.83.33-.56.2-1.11.58-1.65 1.14l-1.86-2.04c.78-.74 1.65-1.27 2.61-1.59a9.06 9.06 0 0 1 2.88-.48c.88 0 1.7.1 2.46.3.76.2 1.42.54 1.98 1.02.58.46 1.03 1.1 1.35 1.92.34.8.51 1.8.51 3V30h-3.51v-1.5c-.26.34-.54.63-.84.87-.3.24-.62.43-.96.57-.34.14-.7.24-1.08.3-.38.08-.78.12-1.2.12Zm11.73-14.31h3.51l-.03 3.9-.39-.24c.08-.62.25-1.17.51-1.65.28-.48.62-.9 1.02-1.26.42-.36.87-.63 1.35-.81.5-.18 1.01-.27 1.53-.27.78 0 1.48.13 2.1.39.64.24 1.23.64 1.77 1.2l-1.44 2.85-.09.24-.27-.12-.18-.48c-.06-.18-.21-.38-.45-.6-.28-.22-.58-.39-.9-.51-.3-.12-.63-.18-.99-.18-.48 0-.94.08-1.38.24-.44.16-.83.41-1.17.75-.32.34-.58.78-.78 1.32-.18.52-.27 1.14-.27 1.86V30h-3.45V16.05ZM55.631 30v-2.67h3.93V12.54h-3.75V9.87h7.17v17.46h3.9V30h-11.25Zm16.89 5.28c-.66 0-1.26-.12-1.8-.36-.52-.22-1.03-.53-1.53-.93l1.17-2.34.12-.27.27.12c.06.16.13.31.21.45.1.14.28.3.54.48.14.08.29.14.45.18.18.04.37.06.57.06.4 0 .74-.11 1.02-.33.3-.22.57-.56.81-1.02.26-.46.51-1.05.75-1.77l3.03-8.55c.3-.86.55-1.69.75-2.49.22-.8.35-1.62.39-2.46h3.15c-.08.9-.29 1.85-.63 2.85-.34.98-.68 1.93-1.02 2.85l-3.45 9.48c-.56 1.48-1.24 2.52-2.04 3.12-.78.62-1.7.93-2.76.93Zm-2.85-19.23h3.39l4.11 10.65-1.77 3.63-5.73-14.28ZM100.841 30v-2.73h3.66V14.04h-3.45v-2.73h10.32v2.73h-3.66v13.23h3.81V30h-10.68Zm14.55 0V16.05h3.39v1.92c.34-.44.71-.83 1.11-1.17.4-.34.84-.6 1.32-.78.5-.2 1.03-.3 1.59-.3.82 0 1.57.2 2.25.6.68.38 1.23 1 1.65 1.86.42.86.63 1.99.63 3.39V30h-3.39v-8.37c0-.78-.08-1.41-.24-1.89-.16-.48-.4-.83-.72-1.05-.3-.24-.66-.36-1.08-.36-.38 0-.76.08-1.14.24-.36.14-.69.36-.99.66-.3.3-.54.66-.72 1.08-.18.4-.27.86-.27 1.38V30h-3.39Zm22.32.3c-.8 0-1.5-.13-2.1-.39-.58-.26-1.07-.68-1.47-1.26-.38-.58-.66-1.35-.84-2.31-.16-.96-.21-2.15-.15-3.57l.39-10.02 3.51-.45.27-.03.03.27-.24.42c-.08.14-.13.38-.15.72l-.33 4.14.15.21-.24 4.68c-.06 1.3-.02 2.31.12 3.03.16.7.39 1.18.69 1.44.32.26.7.39 1.14.39.64 0 1.21-.13 1.71-.39.52-.26 1-.56 1.44-.9l.72 2.46c-.68.5-1.41.89-2.19 1.17-.76.26-1.58.39-2.46.39Zm-7.2-14.25h10.74l-.03 2.67h-10.77l.06-2.67Zm21.36 14.28c-1 0-1.93-.16-2.79-.48-.84-.32-1.58-.78-2.22-1.38-.62-.62-1.1-1.38-1.44-2.28-.34-.9-.51-1.92-.51-3.06 0-1.16.17-2.2.51-3.12.34-.92.8-1.7 1.38-2.34.6-.64 1.3-1.12 2.1-1.44.8-.34 1.66-.51 2.58-.51.82 0 1.59.14 2.31.42.72.28 1.35.71 1.89 1.29.56.56 1 1.27 1.32 2.13.32.84.48 1.82.48 2.94 0 .2-.01.44-.03.72 0 .28-.01.52-.03.72h-9.24c.04.66.17 1.23.39 1.71.22.46.51.84.87 1.14.36.3.76.53 1.2.69.44.14.9.21 1.38.21.42 0 .82-.04 1.2-.12.4-.08.77-.22 1.11-.42.36-.2.7-.46 1.02-.78l1.74 1.68c-.44.52-.94.96-1.5 1.32a5.5 5.5 0 0 1-1.77.72c-.62.16-1.27.24-1.95.24Zm-3.63-8.94h5.94c0-.48-.07-.91-.21-1.29-.12-.38-.3-.7-.54-.96-.24-.26-.54-.45-.9-.57-.34-.14-.74-.21-1.2-.21-.38 0-.75.06-1.11.18-.34.1-.65.28-.93.54s-.51.58-.69.96c-.18.38-.3.83-.36 1.35Zm13.17-5.34h3.51l-.03 3.9-.39-.24c.08-.62.25-1.17.51-1.65.28-.48.62-.9 1.02-1.26.42-.36.87-.63 1.35-.81.5-.18 1.01-.27 1.53-.27.78 0 1.48.13 2.1.39.64.24 1.23.64 1.77 1.2l-1.44 2.85-.09.24-.27-.12-.18-.48c-.06-.18-.21-.38-.45-.6-.28-.22-.58-.39-.9-.51-.3-.12-.63-.18-.99-.18-.48 0-.94.08-1.38.24-.44.16-.83.41-1.17.75-.32.34-.58.78-.78 1.32-.18.52-.27 1.14-.27 1.86V30h-3.45V16.05Zm20.46 14.28c-1 0-1.93-.16-2.79-.48-.84-.32-1.58-.78-2.22-1.38-.62-.62-1.1-1.38-1.44-2.28-.34-.9-.51-1.92-.51-3.06 0-1.16.17-2.2.51-3.12.34-.92.8-1.7 1.38-2.34.6-.64 1.3-1.12 2.1-1.44.8-.34 1.66-.51 2.58-.51.82 0 1.59.14 2.31.42.72.28 1.35.71 1.89 1.29.56.56 1 1.27 1.32 2.13.32.84.48 1.82.48 2.94 0 .2-.01.44-.03.72 0 .28-.01.52-.03.72h-9.24c.04.66.17 1.23.39 1.71.22.46.51.84.87 1.14.36.3.76.53 1.2.69.44.14.9.21 1.38.21.42 0 .82-.04 1.2-.12.4-.08.77-.22 1.11-.42.36-.2.7-.46 1.02-.78l1.74 1.68c-.44.52-.94.96-1.5 1.32a5.5 5.5 0 0 1-1.77.72c-.62.16-1.27.24-1.95.24Zm-3.63-8.94h5.94c0-.48-.07-.91-.21-1.29-.12-.38-.3-.7-.54-.96-.24-.26-.54-.45-.9-.57-.34-.14-.74-.21-1.2-.21-.38 0-.75.06-1.11.18-.34.1-.65.28-.93.54s-.51.58-.69.96c-.18.38-.3.83-.36 1.35Zm18.27 8.94c-.84 0-1.65-.08-2.43-.24-.78-.14-1.5-.37-2.16-.69a8.2 8.2 0 0 1-1.83-1.29l1.5-2.76.12-.24.24.15c.06.14.12.3.18.48.06.16.21.35.45.57.5.42 1.07.75 1.71.99.64.24 1.4.36 2.28.36.56 0 1.03-.06 1.41-.18.4-.14.7-.32.9-.54.22-.24.33-.51.33-.81 0-.24-.06-.45-.18-.63s-.31-.34-.57-.48c-.26-.14-.6-.28-1.02-.42-.42-.16-.92-.33-1.5-.51-1.02-.26-1.91-.58-2.67-.96-.74-.4-1.31-.88-1.71-1.44-.4-.56-.6-1.21-.6-1.95 0-.78.22-1.47.66-2.07.46-.6 1.1-1.07 1.92-1.41.82-.36 1.79-.54 2.91-.54.58 0 1.13.05 1.65.15a6.9 6.9 0 0 1 1.47.39c.48.16.92.38 1.32.66.42.26.81.57 1.17.93l-1.65 2.31-.21.24-.21-.18c-.02-.16-.07-.31-.15-.45-.06-.16-.21-.35-.45-.57-.4-.3-.86-.52-1.38-.66-.5-.14-1-.21-1.5-.21-.68 0-1.27.11-1.77.33-.48.22-.72.56-.72 1.02 0 .26.11.5.33.72.22.2.58.4 1.08.6.52.18 1.2.38 2.04.6 1.12.3 2.03.65 2.73 1.05.72.38 1.24.84 1.56 1.38.34.54.51 1.17.51 1.89 0 .78-.22 1.51-.66 2.19-.44.68-1.09 1.22-1.95 1.62-.84.4-1.89.6-3.15.6Zm16.2-.03c-.8 0-1.5-.13-2.1-.39-.58-.26-1.07-.68-1.47-1.26-.38-.58-.66-1.35-.84-2.31-.16-.96-.21-2.15-.15-3.57l.39-10.02 3.51-.45.27-.03.03.27-.24.42c-.08.14-.13.38-.15.72l-.33 4.14.15.21-.24 4.68c-.06 1.3-.02 2.31.12 3.03.16.7.39 1.18.69 1.44.32.26.7.39 1.14.39.64 0 1.21-.13 1.71-.39.52-.26 1-.56 1.44-.9l.72 2.46c-.68.5-1.41.89-2.19 1.17-.76.26-1.58.39-2.46.39Zm-7.2-14.25h10.74l-.03 2.67h-10.77l.06-2.67ZM236.261 30v-2.67h3.42v-8.61h-3.24v-2.67h6.66v11.28h3.12V30h-9.96Zm4.98-16.26a2.1 2.1 0 0 1-1.5-.6c-.42-.4-.63-.88-.63-1.44 0-.6.2-1.09.6-1.47.4-.38.91-.57 1.53-.57.56 0 1.05.2 1.47.6.44.4.66.88.66 1.44 0 .56-.22 1.04-.66 1.44-.42.4-.91.6-1.47.6Zm9.15 16.26V16.05h3.39v1.92c.34-.44.71-.83 1.11-1.17.4-.34.84-.6 1.32-.78.5-.2 1.03-.3 1.59-.3.82 0 1.57.2 2.25.6.68.38 1.23 1 1.65 1.86.42.86.63 1.99.63 3.39V30h-3.39v-8.37c0-.78-.08-1.41-.24-1.89-.16-.48-.4-.83-.72-1.05-.3-.24-.66-.36-1.08-.36-.38 0-.76.08-1.14.24-.36.14-.69.36-.99.66-.3.3-.54.66-.72 1.08-.18.4-.27.86-.27 1.38V30h-3.39Zm35.61.33c-1.24 0-2.41-.18-3.51-.54-1.08-.38-1.98-.95-2.7-1.71l1.65-2.79.12-.24.27.15c.04.14.09.29.15.45.08.16.24.35.48.57.5.38 1.05.69 1.65.93.62.22 1.29.34 2.01.36.46 0 .88-.05 1.26-.15.4-.1.74-.25 1.02-.45s.5-.45.66-.75c.16-.32.24-.68.24-1.08 0-.24-.03-.47-.09-.69a1.74 1.74 0 0 0-.33-.63c-.14-.22-.35-.43-.63-.63-.28-.22-.63-.45-1.05-.69-.42-.26-.95-.53-1.59-.81-1.28-.56-2.3-1.13-3.06-1.71-.74-.58-1.27-1.2-1.59-1.86-.32-.66-.48-1.41-.48-2.25 0-.92.25-1.74.75-2.46.52-.72 1.23-1.29 2.13-1.71.9-.42 1.93-.63 3.09-.63.78 0 1.51.09 2.19.27.68.18 1.31.45 1.89.81.58.34 1.11.78 1.59 1.32l-1.98 2.28-.18.21-.24-.18c-.02-.16-.06-.31-.12-.45-.04-.16-.17-.36-.39-.6-.38-.36-.79-.6-1.23-.72-.42-.12-.92-.18-1.5-.18-.42 0-.79.05-1.11.15-.32.1-.6.24-.84.42-.22.18-.4.39-.54.63-.12.22-.18.45-.18.69 0 .24.03.47.09.69.06.2.16.4.3.6.16.2.38.41.66.63.3.2.68.42 1.14.66.46.24 1.03.51 1.71.81.94.44 1.73.87 2.37 1.29.64.4 1.14.83 1.5 1.29.38.44.65.93.81 1.47.16.52.24 1.11.24 1.77 0 .9-.23 1.77-.69 2.61-.46.84-1.18 1.53-2.16 2.07-.98.52-2.24.78-3.78.78Zm15.21-.03c-1.24 0-2.37-.3-3.39-.9-1-.62-1.79-1.48-2.37-2.58-.58-1.1-.87-2.37-.87-3.81 0-1.38.29-2.62.87-3.72.58-1.1 1.37-1.97 2.37-2.61a6.25 6.25 0 0 1 3.39-.96c1.26 0 2.39.32 3.39.96 1.02.64 1.82 1.51 2.4 2.61.6 1.1.9 2.34.9 3.72 0 1.44-.3 2.71-.9 3.81-.58 1.1-1.38 1.96-2.4 2.58-1 .6-2.13.9-3.39.9Zm0-2.7c.66 0 1.23-.19 1.71-.57.48-.4.86-.94 1.14-1.62.3-.7.45-1.5.45-2.4 0-.94-.15-1.75-.45-2.43-.28-.68-.66-1.2-1.14-1.56-.48-.38-1.05-.57-1.71-.57-.6 0-1.15.19-1.65.57-.48.36-.87.88-1.17 1.56-.28.68-.42 1.49-.42 2.43 0 .9.14 1.7.42 2.4.28.68.66 1.22 1.14 1.62.5.38 1.06.57 1.68.57Zm11.7-8.91h-3.03v-2.64h3.03v-.84c0-1.28.26-2.32.78-3.12.54-.82 1.25-1.43 2.13-1.83.88-.4 1.83-.6 2.85-.6.94 0 1.81.17 2.61.51.82.32 1.51.79 2.07 1.41l-1.26 2.31-.15.24-.24-.15-.18-.42c-.06-.16-.22-.35-.48-.57a3.48 3.48 0 0 0-1.02-.51c-.34-.12-.73-.18-1.17-.18-.52 0-.98.11-1.38.33-.4.22-.7.54-.9.96-.2.42-.3.95-.3 1.59v.87h4.2v2.64h-4.2V30h-3.36V18.69Zm19.8 11.61c-.8 0-1.5-.13-2.1-.39-.58-.26-1.07-.68-1.47-1.26-.38-.58-.66-1.35-.84-2.31-.16-.96-.21-2.15-.15-3.57l.39-10.02 3.51-.45.27-.03.03.27-.24.42c-.08.14-.13.38-.15.72l-.33 4.14.15.21-.24 4.68c-.06 1.3-.02 2.31.12 3.03.16.7.39 1.18.69 1.44.32.26.7.39 1.14.39.64 0 1.21-.13 1.71-.39.52-.26 1-.56 1.44-.9l.72 2.46c-.68.5-1.41.89-2.19 1.17-.76.26-1.58.39-2.46.39Zm-7.2-14.25h10.74l-.03 2.67h-10.77l.06-2.67ZM341.591 30l-2.58-13.95h2.94l1.59 9.54 1.98-7.98h1.77l2.34 7.92c.18-1.32.32-2.44.42-3.36.12-.92.21-1.7.27-2.34.06-.64.1-1.19.12-1.65.02-.48.03-.92.03-1.32v-.81h2.88c-.12 1.48-.29 3.02-.51 4.62-.22 1.6-.47 3.19-.75 4.77-.26 1.58-.53 3.1-.81 4.56h-2.97l-1.95-7.56-1.8 7.56h-2.97Zm18.09.36c-1.54 0-2.74-.36-3.6-1.08-.84-.74-1.26-1.69-1.26-2.85 0-.74.16-1.42.48-2.04.34-.64.84-1.19 1.5-1.65.66-.46 1.48-.81 2.46-1.05.98-.26 2.1-.39 3.36-.39h.6c.24 0 .5.01.78.03.28 0 .54.02.78.06l.09 2.34c-.2-.02-.44-.03-.72-.03-.28-.02-.57-.03-.87-.03-.28-.02-.52-.03-.72-.03-.8 0-1.48.06-2.04.18-.54.12-.98.29-1.32.51a1.928 1.928 0 0 0-.99 1.68c0 .32.05.59.15.81.12.22.27.4.45.54.2.12.43.21.69.27.26.06.54.09.84.09.6 0 1.12-.09 1.56-.27.46-.2.84-.51 1.14-.93.32-.42.55-.94.69-1.56.16-.64.24-1.39.24-2.25 0-1.16-.12-2.05-.36-2.67-.24-.62-.59-1.05-1.05-1.29-.46-.26-1.04-.39-1.74-.39-.64 0-1.25.11-1.83.33-.56.2-1.11.58-1.65 1.14l-1.86-2.04c.78-.74 1.65-1.27 2.61-1.59a9.06 9.06 0 0 1 2.88-.48c.88 0 1.7.1 2.46.3.76.2 1.42.54 1.98 1.02.58.46 1.03 1.1 1.35 1.92.34.8.51 1.8.51 3V30h-3.51v-1.5c-.26.34-.54.63-.84.87-.3.24-.62.43-.96.57-.34.14-.7.24-1.08.3-.38.08-.78.12-1.2.12Zm11.73-14.31h3.51l-.03 3.9-.39-.24c.08-.62.25-1.17.51-1.65.28-.48.62-.9 1.02-1.26.42-.36.87-.63 1.35-.81.5-.18 1.01-.27 1.53-.27.78 0 1.48.13 2.1.39.64.24 1.23.64 1.77 1.2l-1.44 2.85-.09.24-.27-.12-.18-.48c-.06-.18-.21-.38-.45-.6-.28-.22-.58-.39-.9-.51-.3-.12-.63-.18-.99-.18-.48 0-.94.08-1.38.24-.44.16-.83.41-1.17.75-.32.34-.58.78-.78 1.32-.18.52-.27 1.14-.27 1.86V30h-3.45V16.05Zm20.46 14.28c-1 0-1.93-.16-2.79-.48-.84-.32-1.58-.78-2.22-1.38-.62-.62-1.1-1.38-1.44-2.28-.34-.9-.51-1.92-.51-3.06 0-1.16.17-2.2.51-3.12.34-.92.8-1.7 1.38-2.34.6-.64 1.3-1.12 2.1-1.44.8-.34 1.66-.51 2.58-.51.82 0 1.59.14 2.31.42.72.28 1.35.71 1.89 1.29.56.56 1 1.27 1.32 2.13.32.84.48 1.82.48 2.94 0 .2-.01.44-.03.72 0 .28-.01.52-.03.72h-9.24c.04.66.17 1.23.39 1.71.22.46.51.84.87 1.14.36.3.76.53 1.2.69.44.14.9.21 1.38.21.42 0 .82-.04 1.2-.12.4-.08.77-.22 1.11-.42.36-.2.7-.46 1.02-.78l1.74 1.68c-.44.52-.94.96-1.5 1.32a5.5 5.5 0 0 1-1.77.72c-.62.16-1.27.24-1.95.24Zm-3.63-8.94h5.94c0-.48-.07-.91-.21-1.29-.12-.38-.3-.7-.54-.96-.24-.26-.54-.45-.9-.57-.34-.14-.74-.21-1.2-.21-.38 0-.75.06-1.11.18-.34.1-.65.28-.93.54s-.51.58-.69.96c-.18.38-.3.83-.36 1.35Zm26.76 8.61V11.31h4.83c1.1 0 2.02.1 2.76.3.76.2 1.4.49 1.92.87.54.38 1.02.85 1.44 1.41.42.56.77 1.2 1.05 1.92.3.7.53 1.46.69 2.28.16.82.24 1.72.24 2.7-.04 1.42-.23 2.7-.57 3.84-.32 1.12-.82 2.08-1.5 2.88-.66.8-1.52 1.42-2.58 1.86-1.06.42-2.33.63-3.81.63h-4.47Zm3.3-2.64h1.08c1.28 0 2.3-.27 3.06-.81.78-.56 1.34-1.33 1.68-2.31.34-.98.5-2.12.48-3.42 0-1.38-.15-2.58-.45-3.6-.28-1.02-.78-1.81-1.5-2.37s-1.7-.84-2.94-.84h-1.41v13.35Zm18.57 2.97c-1 0-1.93-.16-2.79-.48-.84-.32-1.58-.78-2.22-1.38-.62-.62-1.1-1.38-1.44-2.28-.34-.9-.51-1.92-.51-3.06 0-1.16.17-2.2.51-3.12.34-.92.8-1.7 1.38-2.34.6-.64 1.3-1.12 2.1-1.44.8-.34 1.66-.51 2.58-.51.82 0 1.59.14 2.31.42.72.28 1.35.71 1.89 1.29.56.56 1 1.27 1.32 2.13.32.84.48 1.82.48 2.94 0 .2-.01.44-.03.72 0 .28-.01.52-.03.72h-9.24c.04.66.17 1.23.39 1.71.22.46.51.84.87 1.14.36.3.76.53 1.2.69.44.14.9.21 1.38.21.42 0 .82-.04 1.2-.12.4-.08.77-.22 1.11-.42.36-.2.7-.46 1.02-.78l1.74 1.68c-.44.52-.94.96-1.5 1.32a5.5 5.5 0 0 1-1.77.72c-.62.16-1.27.24-1.95.24Zm-3.63-8.94h5.94c0-.48-.07-.91-.21-1.29-.12-.38-.3-.7-.54-.96-.24-.26-.54-.45-.9-.57-.34-.14-.74-.21-1.2-.21-.38 0-.75.06-1.11.18-.34.1-.65.28-.93.54s-.51.58-.69.96c-.18.38-.3.83-.36 1.35Zm16.62 8.61-5.25-13.95h3.54l3.57 9.99h-.48l1.89-4.56c.38-.96.68-1.9.9-2.82.24-.92.39-1.79.45-2.61h3.18c-.1.88-.32 1.81-.66 2.79-.32.98-.69 1.99-1.11 3.03l-3.36 8.13h-2.67Zm17.01.33c-1 0-1.93-.16-2.79-.48-.84-.32-1.58-.78-2.22-1.38-.62-.62-1.1-1.38-1.44-2.28-.34-.9-.51-1.92-.51-3.06 0-1.16.17-2.2.51-3.12.34-.92.8-1.7 1.38-2.34.6-.64 1.3-1.12 2.1-1.44.8-.34 1.66-.51 2.58-.51.82 0 1.59.14 2.31.42.72.28 1.35.71 1.89 1.29.56.56 1 1.27 1.32 2.13.32.84.48 1.82.48 2.94 0 .2-.01.44-.03.72 0 .28-.01.52-.03.72h-9.24c.04.66.17 1.23.39 1.71.22.46.51.84.87 1.14.36.3.76.53 1.2.69.44.14.9.21 1.38.21.42 0 .82-.04 1.2-.12.4-.08.77-.22 1.11-.42.36-.2.7-.46 1.02-.78l1.74 1.68c-.44.52-.94.96-1.5 1.32a5.5 5.5 0 0 1-1.77.72c-.62.16-1.27.24-1.95.24Zm-3.63-8.94h5.94c0-.48-.07-.91-.21-1.29-.12-.38-.3-.7-.54-.96-.24-.26-.54-.45-.9-.57-.34-.14-.74-.21-1.2-.21-.38 0-.75.06-1.11.18-.34.1-.65.28-.93.54s-.51.58-.69.96c-.18.38-.3.83-.36 1.35Zm12.39 8.61v-2.67h3.93V12.54h-3.75V9.87h7.17v17.46h3.9V30h-11.25Zm20.58.3c-1.24 0-2.37-.3-3.39-.9-1-.62-1.79-1.48-2.37-2.58-.58-1.1-.87-2.37-.87-3.81 0-1.38.29-2.62.87-3.72.58-1.1 1.37-1.97 2.37-2.61a6.25 6.25 0 0 1 3.39-.96c1.26 0 2.39.32 3.39.96 1.02.64 1.82 1.51 2.4 2.61.6 1.1.9 2.34.9 3.72 0 1.44-.3 2.71-.9 3.81-.58 1.1-1.38 1.96-2.4 2.58-1 .6-2.13.9-3.39.9Zm0-2.7c.66 0 1.23-.19 1.71-.57.48-.4.86-.94 1.14-1.62.3-.7.45-1.5.45-2.4 0-.94-.15-1.75-.45-2.43-.28-.68-.66-1.2-1.14-1.56-.48-.38-1.05-.57-1.71-.57-.6 0-1.15.19-1.65.57-.48.36-.87.88-1.17 1.56-.28.68-.42 1.49-.42 2.43 0 .9.14 1.7.42 2.4.28.68.66 1.22 1.14 1.62.5.38 1.06.57 1.68.57Zm8.97 7.41-.03-18.99h3.36v1.95c.32-.52.67-.94 1.05-1.26.4-.34.84-.59 1.32-.75.5-.16 1.02-.24 1.56-.24.76 0 1.47.16 2.13.48.68.3 1.27.76 1.77 1.38.5.62.89 1.39 1.17 2.31.3.9.45 1.96.45 3.18 0 1.22-.15 2.29-.45 3.21-.3.92-.72 1.68-1.26 2.28-.52.6-1.12 1.05-1.8 1.35-.66.3-1.35.45-2.07.45-.5 0-.99-.06-1.47-.18-.46-.12-.89-.29-1.29-.51-.4-.24-.73-.53-.99-.87v6.21h-3.45Zm6.27-7.29c.44 0 .85-.08 1.23-.24.38-.16.71-.42.99-.78.3-.38.53-.88.69-1.5.16-.62.24-1.39.24-2.31 0-.92-.12-1.71-.36-2.37-.24-.68-.58-1.2-1.02-1.56-.44-.36-.97-.55-1.59-.57-.48-.02-.91.06-1.29.24-.36.18-.67.47-.93.87s-.46.91-.6 1.53c-.14.62-.21 1.37-.21 2.25.02.6.07 1.14.15 1.62.08.48.19.9.33 1.26.16.34.35.63.57.87.22.22.48.39.78.51.3.12.64.18 1.02.18Zm8.19 2.28V16.05h2.85v1.02c.24-.32.49-.58.75-.78.26-.2.53-.34.81-.42.3-.1.59-.15.87-.15.34 0 .66.06.96.18.3.1.57.28.81.54.26.24.46.56.6.96.22-.38.47-.69.75-.93.28-.26.6-.45.96-.57.38-.12.79-.18 1.23-.18.52 0 .96.09 1.32.27.36.18.65.44.87.78.24.34.41.76.51 1.26.1.5.15 1.06.15 1.68V30h-2.94v-9.57c0-.6-.03-1.06-.09-1.38-.06-.34-.15-.57-.27-.69a.6.6 0 0 0-.48-.21c-.26 0-.51.13-.75.39-.24.24-.44.58-.6 1.02-.14.42-.21.92-.21 1.5V30h-2.76v-9.48c0-.96-.07-1.6-.21-1.92-.14-.32-.4-.48-.78-.48-.18 0-.36.06-.54.18-.16.12-.31.3-.45.54-.12.22-.22.51-.3.87-.08.34-.12.73-.12 1.17V30h-2.94Zm22.23.33c-1 0-1.93-.16-2.79-.48-.84-.32-1.58-.78-2.22-1.38-.62-.62-1.1-1.38-1.44-2.28-.34-.9-.51-1.92-.51-3.06 0-1.16.17-2.2.51-3.12.34-.92.8-1.7 1.38-2.34.6-.64 1.3-1.12 2.1-1.44.8-.34 1.66-.51 2.58-.51.82 0 1.59.14 2.31.42.72.28 1.35.71 1.89 1.29.56.56 1 1.27 1.32 2.13.32.84.48 1.82.48 2.94 0 .2-.01.44-.03.72 0 .28-.01.52-.03.72h-9.24c.04.66.17 1.23.39 1.71.22.46.51.84.87 1.14.36.3.76.53 1.2.69.44.14.9.21 1.38.21.42 0 .82-.04 1.2-.12.4-.08.77-.22 1.11-.42.36-.2.7-.46 1.02-.78l1.74 1.68c-.44.52-.94.96-1.5 1.32a5.5 5.5 0 0 1-1.77.72c-.62.16-1.27.24-1.95.24Zm-3.63-8.94h5.94c0-.48-.07-.91-.21-1.29-.12-.38-.3-.7-.54-.96-.24-.26-.54-.45-.9-.57-.34-.14-.74-.21-1.2-.21-.38 0-.75.06-1.11.18-.34.1-.65.28-.93.54s-.51.58-.69.96c-.18.38-.3.83-.36 1.35Zm12.15 8.61V16.05h3.39v1.92c.34-.44.71-.83 1.11-1.17.4-.34.84-.6 1.32-.78.5-.2 1.03-.3 1.59-.3.82 0 1.57.2 2.25.6.68.38 1.23 1 1.65 1.86.42.86.63 1.99.63 3.39V30h-3.39v-8.37c0-.78-.08-1.41-.24-1.89-.16-.48-.4-.83-.72-1.05-.3-.24-.66-.36-1.08-.36-.38 0-.76.08-1.14.24-.36.14-.69.36-.99.66-.3.3-.54.66-.72 1.08-.18.4-.27.86-.27 1.38V30h-3.39Zm22.32.3c-.8 0-1.5-.13-2.1-.39-.58-.26-1.07-.68-1.47-1.26-.38-.58-.66-1.35-.84-2.31-.16-.96-.21-2.15-.15-3.57l.39-10.02 3.51-.45.27-.03.03.27-.24.42c-.08.14-.13.38-.15.72l-.33 4.14.15.21-.24 4.68c-.06 1.3-.02 2.31.12 3.03.16.7.39 1.18.69 1.44.32.26.7.39 1.14.39.64 0 1.21-.13 1.71-.39.52-.26 1-.56 1.44-.9l.72 2.46c-.68.5-1.41.89-2.19 1.17-.76.26-1.58.39-2.46.39Zm-7.2-14.25h10.74l-.03 2.67h-10.77l.06-2.67Z"
    />
    <path fill="#D9D9D9" d="M0 0h21.853v3H0z" />
    <path fill="#D9D9D9" d="M0 20V0h3.278v20z" />
  </svg>
)
export default SvgComponent
