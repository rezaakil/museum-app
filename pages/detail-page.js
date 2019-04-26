
//this is an event handler function to be used by onsubmit event listener
function submitComment() {
  const inputField = document.getElementById('name')
  const name = inputField.value
  const textArea = document.getElementById('msg')
  const msg = textArea.value

  //this is creating element
  const comment = document.createElement('section')
  const h3 = document.createElement('h3')
  const p = document.createElement('p')

  // adjust the elements we created
  h3.innerHTML = `${name} said:`
  p.innerHTML = msg
  comment.classList.add('comment')
  comment.appendChild(h3)
  comment.appendChild(p)

  // adjust the elements we created
  h3.innerHTML = `${name} said:`
  p.innerHTML = msg
  comment.classList.add('comment')
  comment.appendChild(h3)
  comment.appendChild(p)

  console.log(comment)
  }

