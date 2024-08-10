import useKonamiCode from "@/components/Utility/_konami/util";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const SecretPage: React.FC = () => {
  const router = useRouter();
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const [inputValues, setInputValues] = useState<string[]>(Array(6).fill(""));
  const [accessDenied, setAccessDenied] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const { key, unlocked } = router.query;

  useKonamiCode(() => {
    setSecretUnlocked(true);
  });

  useEffect(() => {
    if (key !== process.env.NEXT_PUBLIC_MY_SECRET_KEY || !unlocked) {
      // router.push("/");
    }
  }, [key, router]);

  useEffect(() => {
    const enteredCode = inputValues.join("").toUpperCase();
    if (enteredCode === "KONAMI") {
      setAccessGranted(true);
      confetti({
        particleCount: 180,
        spread: 180,
      });

      const audio = new Audio("/ding.mp3");
      audio.play();
      setTimeout(() => {
        router.push("/");
      }, 5000);
    } else if (inputValues.every((value) => value !== "")) {
      setAccessDenied(true);
      setTimeout(() => {
        router.push("/");
      }, 5000);
    }
  }, [inputValues, router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const newInputValues = [...inputValues];
    newInputValues[idx] = e.target.value.toUpperCase();
    setInputValues(newInputValues);

    if (e.target.value !== "" && idx < inputValues.length - 1) {
      // Focus on the next input
      const nextInput = document.getElementById(`input-${idx + 1}`);
      if (nextInput) {
        (nextInput as HTMLInputElement).focus();
      }
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center ${
        unlocked || secretUnlocked ? " text-minimal-black" : " text-white"
      } relative`}>
      {!accessDenied && !accessGranted ? (
        <>
          <h1
            className={`w-3/4 text-3xl mukta-font text-center font-bold relative z-10 ${
              unlocked || secretUnlocked ? "glitch" : ""
            }`}>
            You have uncovered the gateway to the forbidden realm. Only those
            with the sacred passcode may proceed. Reveal the code and unlock the
            mysteries within...
          </h1>
          <div className="mt-4 text-lg z-10">
            {unlocked || secretUnlocked ? (
              <div className="flex justify-center space-x-2">
                {Array(6)
                  .fill("")
                  .map((_, idx) => (
                    <input
                      key={idx}
                      id={`input-${idx}`}
                      type="text"
                      maxLength={1}
                      value={inputValues[idx] || ""}
                      onChange={(e) => handleChange(e, idx)}
                      className="w-12 h-12 text-center text-2xl bg-gray-800 text-green-400 border border-gray-500 focus:outline-none"
                    />
                  ))}
              </div>
            ) : (
              "You can't view this page"
            )}
          </div>
        </>
      ) : accessGranted ? (
        <div className="text-green-400 mukta-font text-center text-3xl font-bold uppercase z-10">
          Congratulations! You've unlocked the secret. 🎇.
          <span className="text-base"> HIRE ME.༼ つ ◕_◕ ༽つ</span>
        </div>
      ) : (
        <div className="glitch w-3/4 text-red-400 mukta-font text-center text-4xl font-bold uppercase z-10">
          How dare you mortal, leave this space at once before you anger the
          gods!
        </div>
      )}
    </div>
  );
};

export default SecretPage;
