import { Resend } from "resend";

const resend = new Resend(process.env.NUXT_RESEND_API_KEY);

export function useResend() {
  return resend;
}
