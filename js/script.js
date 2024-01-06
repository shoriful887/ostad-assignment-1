
let age;


function ageChecker(){
    let cards_img=document.querySelector('.age-checker-card');
    let age= parseInt(document.getElementById('inputAge').value);

    if(age>=18){
        document.querySelector('.age-checker-card-title').innerHTML="You are an adult";
        cards_img.src='./img/adult.jpg';
        
    }
    else{
        let card_data= document.querySelector('.age-checker-card-title').innerHTML="You are a child"; 
        cards_img.src='./img/child.jpg';

      
    }
}