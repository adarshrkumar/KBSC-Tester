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
  if (ctrlActive == true && event.code == 'KeyA') {
    // this disables the browsers default paste functionality
    event.preventDefault()
    // perform desired action(s) here...
    location.href = '/'
  }
  if (ctrlActive == true && event.code == 'KeyC') {
    // this disables the browsers default paste functionality
    event.preventDefault()
    // perform desired action(s) here...
    location.href = '/'
  }
  if (ctrlActive == true && event.code == 'KeyW') {
    // this disables the browsers default paste functionality
    event.preventDefault()
    // perform desired action(s) here...
    location.href = '/'
  }
})