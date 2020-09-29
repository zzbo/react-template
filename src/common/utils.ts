export function showError(err: Error): void {
  console.log(err);
}

export function getRandomString(): string {
  return Math.random().toString(36).substring(7);
}
