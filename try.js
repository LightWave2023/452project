document.addEventListener('DOMContentLoaded', function() {  
    // Get all the View More buttons 
    var showModalButtons = document.getElementsByClassName('show-modal');  
    var modal = document.getElementById('productModal');  
    var modalImage = document.getElementById('modalImage');  
    var modalProductName = document.getElementById('modalProductName');  
    var modalProductDescription = document.getElementById('modalProductDescription');  
    var closeModal = document.getElementsByClassName('close')[0];  
    
    // Add a click event listener for each View More button  
    for (var i = 0; i < showModalButtons.length; i++) {  
      showModalButtons[i].addEventListener('click', function(e) {  
        e.preventDefault(); // Block default click events  
    
        // Obtain the data id of the parent element (product element) of the currently clicked button  
        var productId = this.parentNode.getAttribute('data-id');  
    
        // Assuming you have a method to obtain detailed information about the product  
        var productData = getProductDataById(productId);  
    
        // Display product images, names, and descriptions in pop-up boxes  
        modalImage.src = productData.image;  
        modalProductName.textContent = productData.name;  
        modalProductDescription.textContent = productData.description;  
    
        // Display pop-up box  
        modal.style.display = 'block';  
      });  
    }  
    
    // Get the close button for the pop-up box and add a click event listener to it  
    closeModal.addEventListener('click', function() {  
      // Hide Popup Boxes  
      modal.style.display = 'none';  
    });  
    
    // When the user clicks on a pop-up box outside of anywhere, it also closes  
    window.addEventListener('click', function(event) {  
      if (event.target === modal) {  
        modal.style.display = 'none';  
      }  
    });  
    
    // Assumed function for obtaining product data based on product ID 
    function getProductDataById(id) {  
        // Assuming this is your way of obtaining product data from the server or local storage  
        // This is a simulated array used to demonstrate  
        var productsData = [  
            { id: 1, image: 'D.png', name: 'Apple MacBook Pro', description: 'The Apple MacBook Pro is a powerful laptop suitable for professional users. It is equipped with the latest generation of processors and high-speed graphics processors, providing users with smooth multitasking capabilities and excellent graphics performance. Meanwhile, its exquisite design and excellent durability have made it a popular choice in the market.' },  
            { id: 2, image: 'E.png', name: 'Dell XPS 13', description: 'The Dell XPS 13 is a lightweight and portable laptop with excellent performance and long battery life. It adopts a high-resolution display screen, providing users with a clear and delicate visual experience. In addition, its excellent cooling system and silent performance also make it stand out among similar products.' },
            { id: 3, image: 'F.png', name: 'HP Pavilion Gaming Laptop', description: 'HP Pavilion Gaming Laptop is a laptop designed specifically for gamers. It is equipped with high-performance processors and independent graphics cards, making it easy to handle various large-scale games. Meanwhile, its unique cooling system and comfortable keyboard design also provide players with a better gaming experience.' },
            { id: 4, image: 'G.png', name: 'Lenovo ThinkPad X1 Carbon', description: 'The Lenovo ThinkPad X1 Carbon is a business laptop known for its excellent durability and performance. It uses high-quality materials and exquisite craftsmanship to ensure the stability and durability of the product. Meanwhile, its efficient cooling system and long battery life make it the preferred choice for business people.' },
            { id: 5, image: 'H.png', name: 'Samsung Galaxy Tab S7', description: 'The Samsung Galaxy Tab S7 is a powerful tablet computer suitable for various scenarios. It is equipped with high-performance processors and large storage capacity, providing users with a smooth operating experience and rich storage space. Meanwhile, its exquisite display screen and excellent audio performance also bring users a better entertainment experience.' },
            { id: 6, image: 'I.png', name: 'Microsoft Surface Pro 7', description: 'Microsoft Surface Pro 7 is a two in one tablet that can be used as a tablet or connected to a keyboard to become a powerful laptop. It has a high-resolution display screen and excellent performance, which can meet various needs of users. Meanwhile, its exquisite design and long battery life also make it highly favored by users.' },
            { id: 7, image: 'J.png', name: 'Logitech MX Master 3', description: 'Logitech MX Master 3 is a high-end wireless mouse suitable for various computers and mobile devices. It adopts precise sensors and comfortable ergonomic design, providing users with an excellent operating experience. Meanwhile, its multi device connectivity and long battery life make it a choice for professional users.' },
            { id: 8, image: 'K.png', name: 'SanDisk Ultra 3D NAND USB 3.1 Flash Drive', description: 'SanDisk Ultra 3D NAND USB 3.1 Flash Drive is a high-performance flash drive with fast data transfer speed and a large amount of storage space. It adopts advanced 3D NAND technology to ensure the stability and durability of data. Meanwhile, its compact design and portability make it an ideal choice for users to store and transmit data.' },
            { id: 9, image: 'L.png', name: 'ASUS ROG Strix Gaming Monitor', description: 'ASUS ROG Strix Gaming Monitor is a high-performance display designed specifically for gamers. It adopts a panel with high resolution and fast response time, bringing users smooth and realistic game graphics. Meanwhile, its unique game mode and rich interface design also meet the various needs of gamers.' },   
            { id: 10, image: 'M.png', name: 'Razer BlackWidow Chroma V2', description: 'Razer BlackWidow Chroma V2 is a high-end mechanical keyboard suitable for gaming and office settings. It adopts high-quality mechanical buttons and RGB backlight design, providing users with an excellent typing experience and personalized visual effects. Meanwhile, its macro programming capabilities and comfortable button layout make it the preferred choice for professional users.' },   
        ];  
        
        // Search product data based on ID  
        for (var i = 0; i < productsData.length; i++) {  
          if (productsData[i].id === id) {  
            return productsData[i];  
          }  
        }  
        
        // If the product is not found, return null or throw an error
        return null;  
      }  
        
      // When the user presses the Esc key, the modal box is also closed
      window.addEventListener('keydown', function(event) {  
        if (event.key === 'Escape' && modal.style.display === 'block') {  
          modal.style.display = 'none';  
        }  
      });  
      });
