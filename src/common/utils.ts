export function showError(err: Error) {
  console.log(err);
}

export function getRandomString() {
  return Math.random().toString(36).substring(7);
}
