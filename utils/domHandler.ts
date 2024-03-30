function isElement(obj: any) {
  return typeof HTMLElement === 'object'
    ? obj instanceof HTMLElement
    : obj &&
        typeof obj === 'object' &&
        obj !== null &&
        obj.nodeType === 1 &&
        typeof obj.nodeName === 'string'
}

export function getWindowScrollTop() {
  const doc = document.documentElement
  return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
}

export function getWindowScrollLeft() {
  const doc = document.documentElement
  return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0)
}

export function getAttribute(element: HTMLElement, name: string) {
  if (isElement(element)) {
    const value = element.getAttribute(name)

    if (value && !isNaN(+value)) {
      return +value
    }

    if (value === 'true' || value === 'false') {
      return value === 'true'
    }

    return value
  }

  return undefined
}
