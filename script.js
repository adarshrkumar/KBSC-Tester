document.documentElement.addEventListener('keyup', event => {
  if (event.key == 'Control') {
    ctrlActive = false
  };
  if (event.code == 'KeyC') {
    cActive = false
  };
  if (event.code == 'KeyV') {
    vActive = false
  };
})

document.documentElement.addEventListener('keydown', event => {
  if (event.key == 'Control') {
    ctrlActive = true
  };
  if (ctrlActive == true && event.code == 'KeyV') {
    // this disables the browsers default paste functionality
    event.preventDefault()
    // perform desired action(s) here...
    location.href = '/paste.html'
  }
  if (ctrlActive == true && event.code == 'KeyX') {
    // this disables the browsers default paste functionality
    event.preventDefault()
    // perform desired action(s) here...
    location.href = '/paste.html'
  }
  if (ctrlActive == true && event.code == 'KeyZ') {
    // this disables the browsers default paste functionality
    event.preventDefault()
    // perform desired action(s) here...
    location.href = '/paste.html'
  }
  if (ctrlActive == true && event.code == 'KeyY') {
    // this disables the browsers default paste functionality
    event.preventDefault()
    // perform desired action(s) here...
    location.href = '/paste.html'
  }
})