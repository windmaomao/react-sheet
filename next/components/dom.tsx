export function focusNextElement() {
  var query = '[tabindex]'
  if (document.activeElement) {
    var elements = [...document.querySelectorAll(query)]
    var index = elements.indexOf(document.activeElement)
    index++
    if (index == elements.length) index = 0
    elements[index].focus()
  }
}