// Configuration for form submission handling.
// Use Formsubmit for simple static-site form routing without a backend yet.
// This sends form data directly to the specified email address.
export const forms = {
  endpoint: 'https://formsubmit.co/info@skyquantech.ai',
  method: 'POST',
  // Message shown if submission is attempted without an endpoint.
  unconfiguredMessage: 'Form submissions are not currently active. Please contact us directly while we finish setup.',
  resume: {
    accept: '.pdf,.doc,.docx',
    // Max size for file uploads (resume) in bytes (e.g., 5MB).
    maxBytes: 5 * 1024 * 1024,
  },
};
