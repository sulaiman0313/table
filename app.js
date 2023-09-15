const ul = document.createElement('ul');
const tableDiv = document.getElementById('table')

const tableNumer = document.getElementById('tableNumer')
const btn = document.getElementById('btn')


ul.className = 'ul-list'


btn.addEventListener('click',removeTable)

tableNumer.addEventListener('input',()=>{

        


        let x = tableNumer.value;

        if(x > 0 && x != null){
            setTimeout(() => {
                table(x)
            }, 100);

        }else{
            removeTable()
        }


        // if(x == 0 && ul.value != ''){
        //     console.log("doora")
        //     removeTable()
        // }else{
        //     setTimeout(() => {
        //         table(x)
        //     }, 1000);
        // }

       

    
})

document.addEventListener('keydown', function(event) {
    // Check if the pressed key is the Backspace key

    let li = document.querySelectorAll('li')
    if (event.key === 'Backspace') {
      // Log a message to the console   

      let myarr = []

      if(li.length > 10){

      li.forEach((childs)=>{
        myarr.push(childs)
        ul.removeChild(childs)

      })
      
      myarr.slice(11,19).forEach((item)=>{
        ul.appendChild(item)
      })
    
      console.log(myarr)
      }

    
    
    }
  });


  function prevRemover(){

    let li = document.querySelectorAll('li')

    let myarr = []

      if(li.length > 1){

      li.forEach((childs)=>{
        myarr.push(childs)

      })
    

      li.forEach((childs)=>{
        ul.removeChild(childs)

      })
      
      myarr.slice(10,20).forEach((item)=>{
        ul.appendChild(item)
      })
      myarr.slice(0,10).forEach((item)=>{
        myarr.shift()
      })
    
      }
  }


function table(x){

   
    prevRemover()
 
    for(let i = 1; i<=10;i++){

        const li = document.createElement('li');
        const span = document.createElement('span')

        span.innerHTML = `${x} * ${i} = ${x*i}`

        li.appendChild(span)
        ul.appendChild(li)

        
    }
    tableDiv.appendChild(ul)

   
    
}

// function removeTable(){
//     const grandparent = document.querySelector('.ul-list')
//     const grandchild = document.querySelector('li')


//     while(grandchild.length != 0){
//         if(grandparent && grandchild){
//             grandparent.removeChild(grandchild)
//         }
       
//     }
   
    


//     // for(let i = 0;i<childenodes.length;i++){
//     //     childenodes[i].remove();
//     // }

//     // while(childenodes.length != 0){
//     //     // for(let i = 0;i<childenodes.length;i++){
//     //     //     childenodes[i].remove()
//     //     // }

//     //     childenodes.childNodes.remove()
//     // }

//     // console.log(childenodes.length)
//   tableNumer.value = null
// }

function removeTable() {
    const grandparent = document.querySelector('.ul-list');
    const grandchildList = grandparent.querySelectorAll('li');
  
    console.log(grandchildList.length)    
    grandchildList.forEach((grandchild) => {
      grandparent.removeChild(grandchild);
    });
  
    
      tableNumer.value = '';
    
  }