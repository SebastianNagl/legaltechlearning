//first variables

//let = abänderbar

//let x = "123Test";
//console.log(x);

//let initial = "new";
//console.log(initial);
//initial ="overwritten"; 
//console.log(initial);

//const; bleibt konstant

//const first1= 2; 

//var; werden stets als Erstes geladen, fehleranfällig 

//var firstvar= "Hi vars up; I´m the uninvited grand uncle of virtual dinner party"; 
//console.log(firstvar);

//Inhalte von Variablen -data types 

//let testVar; 

//numbers //Strings etc dyn Sprache 

//boolean 

//beachte falsy ||truthy-Werte

//question=true; 
//let nu1= 22; 
//question=false;

///if(question=true){nu1= "test"};
//console.log(nu1);

//if (question){console.log("läuft")};
//a=1; 
//b=3;
//if (a===b)
//{console.log("istgleich")}
//else
//{console.log("istnicht")};


// AND

//if(a===1 && b===1){};

//OR 
//if(a===1 ||b===1){};

//NOT 
//if(!a){};

//LOOPS

//for
//for(let i=0; i<6; i++){}

//while 
//while(a<3){console.log("compute"; a++)


//do while 
//do{console.log("compute"); a++} while(a>3)

//Switch 

//switch (){    case x:   break; case y:   break;  default:}

//function 
//function product(a,b) {}   return a*b;}
//let x=product(5,3);

//fisbas
function fisbas(){
let i=1;
while(i<101)
{
    if((i%3)===0 && (i%5)===0){
        console.log("fisbas", +i); 
        i++;
    } 
    else if((i%3)===0) {
       console.log("fis", +i);
       i++;
    }
         else if ((i%5)===0) {
          console.log("bas", +i); 
            i++;
         }
          else{
           console.log("no fis, no bas", +i);
             i++;
          }
}
}
