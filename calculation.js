


function display() {

    var people = prompt('Enter the number of people')
    var amount = prompt('Enter the amount to be split')

    var split = amount/people;

    
    
    
        document.getElementById('output').innerHTML = "<strong>The bill is split " + people + " ways, with each person paying " + split + " each.</strong>"; 
    

}