
let click = document.getElementById('confettiButton'); 
let count=0;
let countClick = []; 

click.addEventListener('click', (e)=> {
  console.log('click', e);
  count+1; 
  countClick.push(count);  
}); 

const chooseParticleColor = (groupName) => {
  const hsl = { hue: 0, saturation: 30, value: 20 }; 
  switch(groupName) {
    case 'red': 
    hsl.hue = 0;
    hsl.saturation = 100; 
    hsl.value = 63; 
    break; 

    case 'pink':
    hsl.hue = 0;
    hsl.saturation = 100; 
    hsl.value = 88; 
    break;

    case 'yellow': 
    hsl.hue = 54;
    hsl.saturation = 95; 
    hsl.value = 67; 
    break; 

    case 'green': 
    hsl.hue = 92;
    hsl.saturation = 72; 
    hsl.value = 75; 
    break;  
    
    case 'blue': 
    hsl.hue = 180;
    hsl.saturation = 25; 
    hsl.value = 80; 
    break;    
  }

  return `hsla(${hsl.hue}, ${hsl.saturation}%, ${hsl.value}%)`;
}



const bang = (addConfettiParticles) => {
  
  countClick.forEach((item, index)=> {
    setTimeout(()=> {
      let randomNumber = Math.ceil(Math.random() * index) * 3.79;
      let groupNames = ['red', 'blue', 'green', 'pink', 'yellow'];
      groupNames.map(
          (name) => {  
          addConfettiParticles({
            groupName: name,  
            particleAmount: randomNumber, 
            xPosition: randomNumber*3.5,      
            yPosition: randomNumber*5,     
            xVelocity: 0,      
            yVelocity: 2,      
            xSpread: 80,       
            ySpread: 20       
          }); 
        })
      }, 2000)} 
  ); 
} 
export {
  chooseParticleColor,
  bang
}
