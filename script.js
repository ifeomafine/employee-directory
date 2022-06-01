// alert('how are you?')

const bar = document.querySelector('#searchBar') /*same as searchbar */
const card = document.querySelectorAll('.cardOne') /*same as employee */
// console.log(card)

const displayEmployees = (values) => {
    card.forEach(element => {
      element.style.display = 'none'
      const name = element.children[1].innerText.toUpperCase();
      const title = element.children[2].innerText.toUpperCase();
      const type = element.children[3].innerText.toUpperCase();

      if (name.includes(values) || title.includes(values) || type.includes(values)) {
        element.style.display = 'block'
      }
    } )
}

 bar.addEventListener('keyup' , (e) => {
    displayEmployees(e.target.value.toUpperCase())
}) ;