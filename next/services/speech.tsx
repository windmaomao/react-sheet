const speak = (text = 'Hello') => {
  const u = new SpeechSynthesisUtterance()
  u.lang = 'en'
  u.pitch = 1.0
  u.rate = 0.75
  u.text = text 
  window.speechSynthesis.speak(u)
}

export { speak }