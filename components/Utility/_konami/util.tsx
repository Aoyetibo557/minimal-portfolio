import { useState, useEffect } from "react";

const useKonamiCode = (callback: () => void, delay: number = 1000) => {
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((keys) => [...keys, e.key]);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (
      keys
        .join("")
        .includes(
          "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightEnter"
        )
    ) {
      setTimeout(() => {
        callback();
      }, delay);
    }
  }, [keys]);

  return keys;
};

export default useKonamiCode;

// import { useEffect, useState } from "react";

// const useKonamiCode = (callback: () => void) => {
//   const [keysPressed, setKeysPressed] = useState<number[]>([]);

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       setKeysPressed((prev) => [...prev, event.keyCode]);
//     };

//     const checkCode = () => {
//       if (keysPressed.toString() === "38,38,40,40,37,39,37,39,66,65") {
//         callback();
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     checkCode();

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [callback, keysPressed]);
// };

// export default useKonamiCode;

// import { useEffect, useState } from "react";

// const useKonamiCode = (callback: () => void, delay: number = 1000) => {
//   const [keysPressed, setKeysPressed] = useState<number[]>([]);

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       setKeysPressed((prev) => [...prev, event.keyCode]);
//     };

//     const checkCode = () => {
//       if (keysPressed.toString() === "38,38,40,40,37,39,37,39,66,65") {
//         setTimeout(() => {
//           callback();
//         }, delay);
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     checkCode();

//     return () => {
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [callback, keysPressed, delay]);
// };

// export default useKonamiCode;
