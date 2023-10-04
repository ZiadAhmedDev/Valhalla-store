  // Define addToWishlist and changeSvgColor functions in the global scope
  function addToWishlist(productTitle) {
    // Retrieve the wishlist from local storage
    let wishlist = localStorage.getItem('wishlist');
    console.log(wishlist);

    // Convert the wishlist from a string to an array (if it exists)
    wishlist = wishlist ? JSON.parse(wishlist) : [];

    // Check if the product title already exists in the wishlist
    const index = wishlist.indexOf(productTitle);
    if (index !== -1) {
      // Remove the product title from the wishlist
      wishlist.splice(index, 1);
    } else {
      // Add the product title to the wishlist
      wishlist.push(productTitle);
    }

    // Save the updated wishlist back to local storage
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }

  function changeSvgColor(button) {
    // Get the SVG element inside the clicked button
    const svgElement = button.querySelector('.icon-wrap svg');

    // Get the current fill color
    const currentFillColor = svgElement.getAttribute('fill');

    // Toggle the fill color between red and white
    if (currentFillColor === 'red') {
      svgElement.setAttribute('fill', 'white');
    } else {
      svgElement.setAttribute('fill', 'red');
    }
  }

  // Add event delegation to handle button clicks for all product cards
  document.addEventListener('click', function(event) {
    const button = event.target.closest('.wishlist-button');
    if (button) {
      const productTitle = button.getAttribute('data-productTitle');
      addToWishlist(productTitle);
      changeSvgColor(button);
    }
  });
