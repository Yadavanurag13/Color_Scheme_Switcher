//we selected out all the class that named as button
const buttons = document.querySelectorAll('.button')
//this will return out nodelist

//we selected out the body of the webpage so that we
//can make changess
const body = document.querySelector('body')

//used for eachloop to get access of the buttons we can use only for each loop on nodelist
buttons.forEach(function(button) {
    //console.log(button);

    button.addEventListener('click', function(event) {
        console.log(event);
        console.log(event.target);

        //checking each condition and changing the color according to that
        // if(event.target.id === 'grey') {
        //     body.style.backgroundColor = event.target.id;
        // }
        // if(event.target.id === 'white') {
        //     body.style.backgroundColor = event.target.id;
        // }
        // if(event.target.id === 'blue') {
        //     body.style.backgroundColor = event.target.id;
        // }
        // if(event.target.id === 'yellow') {
        //     body.style.backgroundColor = event.target.id;
        // }

        body.style.backgroundColor = event.target.id
    })
})
