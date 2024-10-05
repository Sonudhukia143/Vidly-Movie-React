import { v4 as uuid } from 'uuid';

export default function Database () {
    return [
        { id:uuid() , movie:'Terminator' , genre:'Action' , isFavouraite:true},
        { id:uuid() , movie:'Breaking Bad' , genre:'Action' , isFavouraite:true},
        { id:uuid() , movie:'Fifty Shades Of Grey' , genre:'Romance' , isFavouraite:false},
        { id:uuid() , movie:'Peaky Blinders' , genre:'Drama' , isFavouraite:true},
        { id:uuid() , movie:'Helix' , genre:'Sci-Fi' , isFavouraite:false},
        { id:uuid() , movie:'Ashiqi' , genre:'Romance' , isFavouraite:false},
        { id:uuid() , movie:'Avengers' , genre:'Romance' , isFavouraite:false},
        { id:uuid() , movie:'Harry Potter' , genre:'Magic' , isFavouraite:false},
        { id:uuid() , movie:'Lord of Rings' , genre:'Magic' , isFavouraite:false},
        { id:uuid() , movie:'Dr. Strange' , genre:'Drama' , isFavouraite:false},
        { id:uuid() , movie:'Venom' , genre:'Sci-Fi' , isFavouraite:false}
      ]
}