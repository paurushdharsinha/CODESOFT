// const { sources } = require("webpack");

const div = document.createElement('div')
const p = document.createElement('p');
const content = document.querySelector("#content");

const homeBtn = document.querySelector('#homeBtn')
const menuBtn = document.querySelector('#menuBtn')
const contactBtn = document.querySelector('#contactBtn')


function hideAllSections() {
    contentAfter.create.classList.add('hidden');
    menu.create.classList.add('hidden');
    contact.create.classList.add('hidden');
}

homeBtn.addEventListener('click', () => {
    hideAllSections();
    contentAfter.create.classList.remove('hidden');
    contentAfter.create.scrollIntoView({ behavior: 'smooth' });
});

menuBtn.addEventListener('click', () => {
    hideAllSections();

    menu.create.classList.remove('hidden');
    menu.create.scrollIntoView({ behavior: 'smooth' });

});

contactBtn.addEventListener('click', () => {
    hideAllSections();
    contact.create.classList.remove('hidden');
    contact.create.scrollIntoView({ behavior: 'smooth' });
});


//function for creating image elements
function image(create, select, src, alt) {
    this.create = document.createElement(create);
    this.create.src = src;
    this.create.alt = alt;

    // Check if 'select' is an id or a class
    if (select.startsWith('#')) {
        this.create.id = select.substring(1);
        // Remove '#' to set the id
    } else if (select.startsWith('.')) {
        this.create.classList.add(select.substring(1));
    }
}


// function for crating element with and id and inner text 
function element(create, select, innerText) {
    this.create = document.createElement(create);
    this.create.innerText = innerText;

    // check if id or class
    if (select.startsWith('#')) {
        this.create.id = select.substring(1);
        // Remove '#'  from id name 
    } else if (select.startsWith('.')) {
        this.create.classList.add(select.substring(1));
    }
}

const backImage = new image('img', '#backImage', "./images/henry-perks-TStCoAiFjDY-unsplash.jpg", 'Backgroung Image')
content.appendChild(backImage.create);


const ele1 = new element("div", "#welcome", "Welcome To")
content.appendChild(ele1.create)

// create id = headings 
const headings = document.createElement('div')
headings.id = 'headings';
content.appendChild(headings)

const ele3 = new element("p", '#heading', 'Restaurant')
headings.appendChild(ele3.create)
const ele4 = new element("p", '#nameOfRestaurant', " Dicken's Dinin' ")
headings.appendChild(ele4.create)

const ele5 = new element("p", '#paragraph', "Welcome to Dicken's Dinin', a cozy retreat where every sip and bite is crafted with love and care. Nested in the heart of Jabalpur, our cafe is a heaven for those seeking a delightful escape from the everyday hustle.We offer a curated selection of freshly brewed coffees, artisan teas, and delectable pastries made from locally sourced ingredients. ")
headings.appendChild(ele5.create)

const ele6 = new element("br", '', '')
headings.appendChild(ele6.create)


// crete id = contentAfter
const contentAfter = new element('div', '#contentAfter', '');
content.appendChild(contentAfter.create)

// create id = contentAfter2
const contentAfter2 = new element('div', '#contentAfter2', '')
contentAfter.create.appendChild(contentAfter2.create);

// div class = cont1
const cont1 = new element('div', '.cont1', '');
contentAfter2.create.appendChild(cont1.create);
const element1 = new element('div', '.box', 'Looking for a place to Party ... ?');
cont1.create.appendChild(element1.create);
const image1 = new image('img', '.iamgeOfBox', "./images/Party.jpeg", 'image');
cont1.create.appendChild(image1.create)


const cont2 = new element('div', '.cont1', '');
contentAfter2.create.appendChild(cont2.create);
const element2 = new element('div', '.box', 'Finding a quiet corner to work ... ?')
cont2.create.appendChild(element2.create);
const image2 = new image('img', '.iamgeOfBox', "./images/Work.jpeg", 'image')
cont2.create.appendChild(image2.create)


const cont3 = new element('div', '.cont1', '');
contentAfter2.create.appendChild(cont3.create);
const element3 = new element('div', '.box', 'Looking to catch up with friends ... ?')
cont3.create.appendChild(element3.create);
const image3 = new image('img', '.iamgeOfBox', "./images/frnd.jpeg", 'image')
cont3.create.appendChild(image3.create)

// div id = destination 
const element4 = new element('div', '#destination', "Dicken's Dinin' is your perfect destination . . .")
contentAfter.create.appendChild(element4.create);




//  ------------------ MENU JS -------------------





const menu = new element('div', '#menu', '');
content.appendChild(menu.create);

const menuImg = new image('img', '#menuImage', './images/menu.webp', 'menu-image')
menu.create.appendChild(menuImg.create);


//function for defining array and appendind items to a div 
function listing(list, div) {

    const ul = document.createElement('ul')

    list.forEach(item => {
        const liButton = document.createElement('button')
        liButton.textContent = item;
        ul.appendChild(liButton);
    });

    div.appendChild(ul);
}
` `
const food = ['Coffee', 'Shakes', 'Cocktails', 'Pizza', 'Burger', 'Sandwich', 'Pasta', 'Chinese', 'Desserts']

const menuList = new element('div', '#menuList', '')
menu.create.appendChild(menuList.create)

listing(food, menuList.create);

// function for scrolling to the particular food 
function scrollToFood(nameOfItem, targetDiv) {

    food.forEach(items => {
        food.addEventListener('click', () => {
            food.scrollIntoView({ behavior: 'smooth' })
        })
    })

    // nameOfItem.addEventListener('click', () => {
    //     targetDiv.create.scrollIntoView({ behavior: 'smooth' })
    // })

}

// scrollToFood('coffee', 'gridHeading')
















// append food's  name and price to a div
function foodPrice(list, div) {

    const ul = document.createElement('ul');
    ul.className = 'gridItems';
    const ul2 = document.createElement('ul');
    ul2.className = 'gridPrice';

    list.forEach((value, key) => {
        const li = document.createElement('li');
        li.textContent = key;
        ul.appendChild(li);

        const li2 = document.createElement('li');
        li2.textContent = value;
        ul2.appendChild(li2);
    });

    div.appendChild(ul);
    div.appendChild(ul2);

}

// class = menuItems starting 
const menuItems = new element('div', '.menuItems', '')
menu.create.appendChild(menuItems.create);

const gridHeading = new element('div', '.gridHeading', 'Coffee ... ');
menuItems.create.appendChild(gridHeading.create);

const br2 = new element('br', '', '')
menuItems.create.appendChild(br2.create);

// const coffee  = {
//     Hot Coffee : 40,
//     Cold Coffee:60
// }

const coffee = new Map([
    ["Hot Coffee", 40],
    [" Cold Coffee", 60],
    ["Chocolate Cold coffee", 80],
    ["Cold Coffee with Ice Cream", 80],
    ["Roasted Hazelnut Cold Coffee", 100]
]);

foodPrice(coffee, menuItems.create);

const coffeeImg = new image('img', '.gridImage', './images/coldCoffee.jpeg', 'coffee Image');
menuItems.create.appendChild(coffeeImg.create);


// addding shakes 
const menuItems2 = new element('div', '.menuItems', '')
menu.create.appendChild(menuItems2.create);

const gridHeading2 = new element('div', '.gridHeading', 'Shakes ... ');
menuItems2.create.appendChild(gridHeading2.create);

const br3 = new element('br', '', '')
menuItems2.create.appendChild(br3.create);

const shake = new Map([
    ['Chocolate Shake', 80],
    ['Orange Shake', 90],
    ['Pineapple Shake', 90],
    ['Milk Shake', 100],
    ['Mango Shake', 110],
    ['Oreo Shake', 120],
    ['Dry Fruit Shake', 150]
])

foodPrice(shake, menuItems2.create);
const shakeImg = new image('img', '.gridImage', './images/coldCoffee.jpeg', 'coffee Image');
menuItems2.create.appendChild(shakeImg.create);


// addding cocktails 
const menuItems3 = new element('div', '.menuItems', '')
menu.create.appendChild(menuItems3.create);

const gridHeading3 = new element('div', '.gridHeading', 'Cocktails ... ');
menuItems3.create.appendChild(gridHeading3.create);

const br4 = new element('br', '', '')
menuItems3.create.appendChild(br4.create);

const cocktails = new Map([
    [' Long Island Ice Tea', 80],
    ['Mai Tai', 90],
    ['Mojito', 90],
    ['Gin Tonic', 100],
    [' Blue Lagoon', 110],
    ['Oreo Shake', 120],
    ["Dicken's Special", 150]
])

foodPrice(cocktails, menuItems3.create);
const cocktailsImg = new image('img', '.gridImage', './images/coldCoffee.jpeg', 'coffee Image');
menuItems3.create.appendChild(cocktailsImg.create);


// addding pizza 
const menuItems4 = new element('div', '.menuItems', '')
menu.create.appendChild(menuItems4.create);

const gridHeading4 = new element('div', '.gridHeading', 'Pizza ... ');
menuItems4.create.appendChild(gridHeading4.create);

const br5 = new element('br', '', '')
menuItems4.create.appendChild(br5.create);

const pizza = new Map([
    ['Veg Pizza ', 80],
    ['Mexican Pizza', 90],
    ['Cheese Pizza', 100],
    [' Paneer Tikka Pizza', 110],
    ['Corn Pizza', 110],
    ['Extra Spicy Pizza', 120],
    [" Dicken's Special Pizza", 150]
])

foodPrice(pizza, menuItems4.create);
const pizzaImg = new image('img', '.gridImage', './images/coldCoffee.jpeg', 'coffee Image');
menuItems4.create.appendChild(pizzaImg.create);


// addding burger 
const menuItems5 = new element('div', '.menuItems', '')
menu.create.appendChild(menuItems5.create);

const gridHeading5 = new element('div', '.gridHeading', 'Burger ... ');
menuItems5.create.appendChild(gridHeading5.create);

const br6 = new element('br', '', '')
menuItems5.create.appendChild(br6.create);

const burger = new Map([
    ['Veg Burger ', 60],
    [' Classic Cheese Burger', 70],
    ['Tandoori Burger', 80],
    ['Makhni Paneer Burger', 80],
    ['London Burger', 100],
    ["  Dicken's Special Burger", 120]
])

foodPrice(pizza, menuItems5.create);
const burgerImg = new image('img', '.gridImage', './images/coldCoffee.jpeg', 'coffee Image');
menuItems5.create.appendChild(burgerImg.create);


// addding sandwich 
const menuItems6 = new element('div', '.menuItems', '')
menu.create.appendChild(menuItems6.create);

const gridHeading6 = new element('div', '.gridHeading', 'Sandwich ... ');
menuItems6.create.appendChild(gridHeading6.create);

const br7 = new element('br', '', '')
menuItems6.create.appendChild(br7.create);

const sandwich = new Map([
    ['Veg Grilled Sandwich ', 70],
    [' Corn Cheese Sandwich', 70],
    ['Cheese Paneer Sandwich', 80],
    ['Veg Loaded Sandwich', 100],
    ["Pizza Sandwich", 120]
]);

foodPrice(sandwich, menuItems6.create);
const sandwichImg = new image('img', '.gridImage', './images/coldCoffee.jpeg', 'coffee Image');
menuItems6.create.appendChild(sandwichImg.create);


// addding pasta 
const menuItems7 = new element('div', '.menuItems', '')
menu.create.appendChild(menuItems7.create);

const gridHeading7 = new element('div', '.gridHeading', 'Pasta ... ');
menuItems7.create.appendChild(gridHeading7.create);

const br8 = new element('br', '', '')
menuItems7.create.appendChild(br8.create);

const pasta = new Map([
    ['Red Sause Pasta ', 100],
    ['Extra Veggie Pasta', 100],
    ['White Sauce Pasta', 110],
    ["Tomato Olive Pasta", 120],
    ['Extra Cheese Pasta', 130],
]);

foodPrice(pasta, menuItems7.create);
const pastaImg = new image('img', '.gridImage', './images/coldCoffee.jpeg', 'coffee Image');
menuItems7.create.appendChild(pastaImg.create);


// addding chinese 
const menuItems8 = new element('div', '.menuItems', '')
menu.create.appendChild(menuItems8.create);

const gridHeading8 = new element('div', '.gridHeading', 'Chinese ... ');
menuItems8.create.appendChild(gridHeading8.create);

const br9 = new element('br', '', '')
menuItems8.create.appendChild(br9.create);

const chinese = new Map([
    [' Veg Noodles ', 70],
    ['Veg Hakka Noodles', 80],
    [' Veg Fried Rice', 80],
    [' Veg Singapuri Noodles', 90],
    ["Veg Schezwan Rice", 100],
    ["Chinese Platter", 150]
])

foodPrice(sandwich, menuItems8.create);
const chineseImg = new image('img', '.gridImage', './images/coldCoffee.jpeg', 'coffee Image');
menuItems8.create.appendChild(chineseImg.create);


// addding dessert 
const menuItems9 = new element('div', '.menuItems', '')
menu.create.appendChild(menuItems9.create);

const gridHeading9 = new element('div', '.gridHeading', 'Dessert ... ');
menuItems9.create.appendChild(gridHeading9.create);

const br10 = new element('br', '', '')
menuItems3.create.appendChild(br10.create);

const dessert = new Map([
    ['Rasagulla ', 40],
    [' Gulab Jamun', 50],
    ['Seasonal Halwa ', 70],
    ['Ice Cream', 70],
    ['Kesar Kheer', 80],
    ['Chocolate Brownie', 100]
])

foodPrice(dessert, menuItems9.create);
const dessertImg = new image('img', '.gridImage', './images/coldCoffee.jpeg', 'coffee Image');
menuItems4.create.appendChild(dessertImg.create);





//  ----------------  contact.html  --------------





const contact = new element('div', '#contact', '');
content.appendChild(contact.create);

const contactChild = new element('div', '#contactChild', '');
contact.create.appendChild(contactChild.create);

function createForm() {

    const form = new element('form', '', '')
    form.action = './submit';
    form.method = './post'

    const orderBtn = new element('button', '#orderNow', 'ORDER NOW');
    form.create.appendChild(orderBtn.create)

    // first name label and input
    const fNameLabel = new element('label', '', 'First Name');
    fNameLabel.create.setAttribute('for', 'fname');
    form.create.appendChild(fNameLabel.create);

    const fnameInput = new element('input', '#fname', '')
    fnameInput.type = 'text';
    fnameInput.name = 'fname';
    fnameInput.required = true;
    form.create.appendChild(fnameInput.create);

    // last name label and input 
    const lnameLabel = new element('label', 'lname', 'Last Name');
    lnameLabel.create.setAttribute('for', 'lname');
    form.create.appendChild(lnameLabel.create);

    const lnameInput = new element('input', '#lname', '');
    lnameInput.type = 'text';
    lnameInput.name = 'lname';
    lnameInput.required = true;
    form.create.appendChild(lnameInput.create);

    // email lable and input 
    const emailLabel = new element('label', '', 'Email');
    emailLabel.create.setAttribute('for', 'email');
    form.create.appendChild(emailLabel.create);

    const emailInput = new element('input', '#address', '');
    emailInput.type = 'email';
    emailInput.name = 'email';
    form.create.appendChild(emailInput.create);

    // address lable and input 
    const addressLabel = new element('label', '', 'Address');
    addressLabel.create.setAttribute('for', 'address');
    form.create.appendChild(addressLabel.create);

    const addressTextarea = new element('textarea', '#address', '');
    addressTextarea.name = 'address';
    form.create.appendChild(addressTextarea.create);

    // phone label and input 
    const phoneLabel = new element('label', '', 'Phone number');
    phoneLabel.create.setAttribute('for', 'phone');
    form.create.appendChild(phoneLabel.create);

    const phoneInput = new element('input', '#phone', '');
    phoneInput.type = 'tel';
    phoneInput.name = 'phone';
    phoneInput.value = '+91 ';
    phoneInput.required = true;
    form.create.appendChild(phoneInput.create);

    //  Order label and textarea
    const messageLabel = new element('label', '', 'Order');
    messageLabel.create.setAttribute('for', 'message');
    form.create.appendChild(messageLabel.create);

    const messageTextarea = new element('textarea', '#message', '');
    messageTextarea.name = 'message';
    messageTextarea.required = true;
    form.create.appendChild(messageTextarea.create);

    // Create Submit button
    const submitButton = new element('button', '#submit', 'Submit');
    submitButton.type = 'submit';
    form.create.appendChild(submitButton.create);

    contactChild.create.appendChild(form.create);

}

createForm();


const verticalLine = new element('div', '#verticalLine', '');
contactChild.create.appendChild(verticalLine.create);

const contactDiv = new element('div', '#ContactDiv', '');
contactChild.create.appendChild(contactDiv.create);

const ourContact = new element('div', '#ourContact', '');
contactDiv.create.appendChild(ourContact.create);

const heading = new element('h2', '', 'Our Contact');
ourContact.create.appendChild(heading.create);
const para = new element('p', '', 'You can also place your order via Phone call.');
ourContact.create.appendChild(para.create);

//innerFlex1
const innerFlex1 = new element('div', '.innerFlex', '');
contactDiv.create.appendChild(innerFlex1.create);

const innerImage = new image('img', '.innerImage', './images/phone-icon.jpeg', 'phone');
innerFlex1.create.appendChild(innerImage.create);

const innerDetails = new element('div', '.innerDetails', '+91 9632587410');
innerFlex1.create.appendChild(innerDetails.create);

// innerFlex2
const innerFlex2 = new element('div', '.innerFlex', '');
contactDiv.create.appendChild(innerFlex2.create);

const innerImage2 = new image('img', '.innerImage', './images/mail-icon use.png', 'mail image');
innerFlex2.create.appendChild(innerImage2.create);

const innerDetails2 = new element('div', '.innerDetails', 'Dickensdining@gmail.com');
innerFlex2.create.appendChild(innerDetails2.create);

// innerFlex3
const innerFlex3 = new element('div', '.innerFlex', '');
contactDiv.create.appendChild(innerFlex3.create);

const innerImage3 = new image('img', '.innerImage', './images/location icon.jpeg', 'location image');
innerFlex3.create.appendChild(innerImage3.create);

const innerDetails3 = new element('div', '.innerDetails', 'Beside Samdariya Mall, Opposite of SBI Bank, Jabalpur, Madhya Pradesh, India');
innerFlex3.create.appendChild(innerDetails3.create);


document.addEventListener('DOMContentLoaded', () => {
    hideAllSections()
});




// --- new design of code ... try later 

// const food = ['Coffee', 'Shakes', 'Cocktails', 'Pizza', 'Burger', 'Sandwich', 'Pasta', 'Chinese', 'Desserts'];

// function scrollToFood(targetDiv) {
//     food.forEach(item => {
//         // Create an element for each food item (you might already have them in your HTML)
//         const foodItem = document.createElement('div');
//         foodItem.textContent = item;
//         foodItem.classList.add('food-item'); // Add a class for styling, if needed

//         // Append the food item to your menu or list in the HTML
//         document.querySelector('#foodMenu').appendChild(foodItem);

//         // Add event listener to each food item
//         foodItem.addEventListener('click', () => {
//             const targetElement = document.getElementById(targetDiv);
//             if (targetElement) {
//                 targetElement.scrollIntoView({ behavior: 'smooth' });
//             }
//         });
//     });
// }

// // Call the function with the ID of the target div
// scrollToFood('gridHeading');

















