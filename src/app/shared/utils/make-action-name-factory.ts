export function makeActionNameFactory(prefix: string): (actionName: string) => string {
  return (actionName: string) => `[${prefix.toUpperCase()}] ${actionName}`
}
