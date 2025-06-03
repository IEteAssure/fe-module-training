export function getUserGreeting(name?: string): string {
  if (name) {
    return `Hi friend ${name}`;
  } else {
    return "Hello user!";
  }
}
