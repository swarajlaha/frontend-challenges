export function scrollToTopHandler() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

export function scrollFunction(setShowScrollBtn) {
  if(document.documentElement.scrollTop > 30) {
    setShowScrollBtn(true)
  } else {
    setShowScrollBtn(false)
  }
}
