import './assets/tailwind.css'
// Select the node that will be observed for mutations
const targetNode = document.querySelector('html')
setTheme()

// Options for the observer (which mutations to observe)
const config = { attributes: true }

// Callback function to execute when mutations are observed
const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.attributeName === 'class') {
      setTheme()
    }
  }
}

function setTheme() {
  const isDark = targetNode.classList.contains('htw-dark')
  if (isDark) {
    targetNode.setAttribute('data-theme', 'dark')
  } else {
    targetNode.setAttribute('data-theme', 'light')
  }
}

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback)

// Start observing the target node for configured mutations
observer.observe(targetNode, config)
