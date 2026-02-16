const FROM = "Zeitwork <waitlist@updates.zeitwork.com>";
const REPLY_TO = "tom@zeitwork.com";

function getBaseUrl() {
  return process.env.NUXT_BASE_URL || "https://zeitwork.com";
}

export async function sendConfirmationEmail(email: string, token: string) {
  const confirmUrl = `${getBaseUrl()}/api/waitlist/confirm?token=${token}`;

  const { error } = await useResend().emails.send({
    from: FROM,
    to: [email],
    replyTo: REPLY_TO,
    subject: "Confirm your email",
    html: `<p>Thanks for signing up for the Zeitwork waitlist.</p>
<p>Please confirm your email address by clicking the link below:</p>
<p><a href="${confirmUrl}">Confirm Email</a></p>
<p>If you didn't sign up for Zeitwork, you can safely ignore this email.</p>`,
  });

  if (error) {
    console.error("Failed to send confirmation email:", error);
    throw new Error("Failed to send confirmation email");
  }
}

export async function sendWelcomeEmail(email: string) {
  const { error } = await useResend().emails.send({
    from: FROM,
    to: [email],
    replyTo: REPLY_TO,
    subject: "Welcome to the Zeitwork Waitlist",
    html: `<p>Your email has been confirmed. You're now on the Zeitwork waitlist -- we'll let you know as soon as your spot is ready.</p>
<p>If you'd like to get onboarded to Zeitwork sooner, you can schedule a call with our team:</p>
<p><a href="https://cal.com/team/zeitwork/setup">Schedule a Call</a></p>
<p>Thanks for your interest in Zeitwork.</p>`,
  });

  if (error) {
    console.error("Failed to send welcome email:", error);
    throw new Error("Failed to send welcome email");
  }
}
