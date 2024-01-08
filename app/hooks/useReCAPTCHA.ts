"use client";

import { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export const useReCAPTCHA = () => {
  const [captchaValue, setCaptchaValue] = useState("");
  const [captchaEmpty, setCaptchaEmpty] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value || "");
    setCaptchaEmpty(false);
  };

  const resetCaptcha = () => {
    setCaptchaValue("");
    setCaptchaEmpty(false);
  };

  const handleCaptchaExpire = () => {
    setCaptchaValue("");
    setCaptchaEmpty(true);
  };

  return {
    captchaValue,
    captchaEmpty,
    recaptchaRef,
    resetCaptcha,
    handleCaptchaChange,
    handleCaptchaExpire,
  };
};
