// Submission is deliberately not wired up. No backend or email service was
// supplied, and faking a success state would be worse than saying so.
// To go live: set `endpoint` to the receiving URL and confirm `method`.
export const forms = {
  endpoint: null,          // e.g. 'https://api.example.com/enquiries'
  method: 'POST',
  // Shown when endpoint is null, so nobody mistakes the form for working.
  unconfiguredMessage: 'This form is not connected to a mail service yet. Please contact us directly while we finish setup.',
  resume: {
    accept: '.pdf,.doc,.docx',
    // Enforce server-side too. Null until the receiving service defines a limit.
    maxBytes: null,
  },
};
