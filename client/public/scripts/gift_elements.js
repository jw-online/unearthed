const renderGifts = async () => {
    const response = await fetch ('/gifts')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(gift => {
            //instantiate gift elements
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            //set image of top container
            topContainer.style.backgroundImage = `url(${gift.image})`

            //add text
            const giftName = document.createElement('h3')
            giftName.textContent = gift.name
            bottomContainer.appendChild(giftName)

            //add price
            const giftPrice = document.createElement('p')
            giftPrice.textContent = `Cost: ${gift.pricePoint}`
            bottomContainer.appendChild(giftPrice)

            //add audience
            const giftAudience = document.createElement('p')
            giftAudience.textContent = `Best for ${gift.audience}`
            bottomContainer.appendChild(giftAudience)

            //add button
            const giftButton = document.createElement('a')
            giftButton.textContent = "Learn More"
            giftButton.setAttribute('role', 'button')
            giftButton.setAttribute("href", `/gift/${gift.id}`)
            bottomContainer.appendChild(giftButton)

            //combine everything
            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            mainContent.appendChild(card)
        })
    } else {
        //mainContent.innerHTML = "<h2>No Gifts Available </h2>"
        console.log("Could not render gifts")
        window.location.href = "/404.html"
    }
}

const renderGift = async () => {
    const reqID = parseInt(window.location.href.split('/').pop())
    const giftResponse = await fetch ('/gifts/')
    const data = await giftResponse.json()
    const mainContent = document.getElementById('gift-content')
    let gift

    if (data) {
        gift = data.find(gift => gift.id === reqID)
    }

    if (gift) {
        document.getElementById('image').src = gift.image
        document.getElementById('name').textContent = gift.name
        document.getElementById('submittedBy').textContent = `Submitted by: ${gift.submittedBy}`
        document.getElementById('pricePoint').textContent = `Cost: ${gift.pricePoint}`
        document.getElementById('audience').textContent = `Best for ${gift.audience}`
        document.getElementById('description').textContent = gift.description
        document.title = `UE - ${gift.name}`

    } else {
        //mainContent.innerHTML = "<h2>No Gifts Available </h2>"
        console.log(`Could not render gift with ID: ${reqID}`)
        window.location.href = "/404.html"
    }
}
const requestedURL = parseInt(window.location.href.split('/').pop())

if (requestedURL) {
    renderGift();
} else {
    renderGifts();
}