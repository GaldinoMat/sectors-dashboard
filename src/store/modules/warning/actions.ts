export function dispatchWarning(isWarning: boolean, text: string) {
  return {
    type: "DISPATCH_WARNING_AND_TEXT",
    payload: {
      isWarning,
      text
    }
  }
}
