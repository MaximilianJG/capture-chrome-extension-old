function listenClick() {
  const button = document.getElementById('hi');
  button.addEventListener('click', () => {
    console.log('hi')
  })
}

listenClick();
