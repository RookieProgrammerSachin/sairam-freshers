import Image from "next/image";
import Loading from "./components/Loading";
import React, { useEffect, useState } from "react";

export default function Home() {
  //dummy loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimeout);
  }, [])


  return (
    <>
      <Loading hasLoaded={!isLoading} />
      Login Home
    </>
  );
}
