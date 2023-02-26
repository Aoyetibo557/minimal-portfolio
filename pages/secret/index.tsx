import useKonamiCode from "@/components/Utility/_konami/util";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MY_SECRET_KEY = "my_secret_key_3878982";

const SecretPage = () => {
  const router = useRouter();
  const [secretUnlocked, setSecretUnlocked] = useState(false);
  const { key, unlocked } = router.query;

  useKonamiCode(() => {
    setSecretUnlocked(true);
  });

  useEffect(() => {
    if (key !== MY_SECRET_KEY) {
      router.push("/");
    }
  }, [key, router]);

  return unlocked || secretUnlocked ? (
    <div>
      <h1>Secret Page</h1>
      <div>You can view this page</div>
    </div>
  ) : (
    <div>
      <h1>Secret Page</h1>
      <div>You can't view this page</div>
    </div>
  );
};

export default SecretPage;
