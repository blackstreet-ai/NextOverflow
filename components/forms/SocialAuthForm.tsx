"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import React from "react";
import { toast } from "sonner";

import ROUTES from "@/constants/routes";

import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      // Sign in with the selected provider
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
        redirect: false,
      });
    } catch (error) {
      console.log(error);

      // trigger error toast
      toast("An error occurred. Please try again.");
    }
  };

  return (
    <div className={"mt-10 flex flex-wrap gap-2.5"}>
      <Button className={buttonClass} onClick={() => handleSignIn("github")}>
        <Image
          src={"/icons/github.svg"}
          alt={"Github Logo"}
          width={20}
          height={20}
          className={"invert-colors mr-2.5 object-contain"}
        />
        <span className={""}>Login with Github</span>
      </Button>
      <Button className={buttonClass} onClick={() => handleSignIn("google")}>
        <Image
          src={"/icons/google.svg"}
          alt={"Google Logo"}
          width={20}
          height={20}
          className={"mr-2.5 object-contain"}
        />
        <span className={""}>Login with Google</span>
      </Button>
    </div>
  );
};
export default SocialAuthForm;
