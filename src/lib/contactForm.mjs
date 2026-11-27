// Send with fetch so the visitor stays on this page and sees the result.
// Without JavaScript the form still posts to Formspree as before.
export const sendForm = async (action, body, fetcher = fetch) => {
  try {
    const response = await fetcher(action, {
      method: "POST",
      body,
      headers: { Accept: "application/json" },
    })
    return response.ok ? "sent" : "error"
  } catch {
    return "error"
  }
}
