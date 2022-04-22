const notesContainer =document.getElementById("app");
const addNoteButton =notesContainer.querySelector(".add-note");

getNote().forEach(notes =>{
    const noteElement =craeteNoteElement(notes.id , notes.content);
    notesContainer.insertBefore(noteElement ,addNoteButton);
}); 

addNoteButton.addEventListener("click" , ()=> addNote());

function getNote(){
    return JSON.parse(localStorage.getItem("stickeynotes-notes") || "[]");

}

function saveNote(notes){
    localStorage.setItem("stickeynotes-notes",JSON.stringify(notes));

}
// create New Text Area 
function craeteNoteElement(id ,content){
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.value =content;
    element.placeholder ="Empty Sticky Note";

    element.addEventListener("change" , ()=>{
     updateNote(id , element.value);
    });
    element.addEventListener("dblclick" , ()=>{
     const doDelete =confirm("Are You Sure ?? ");
     if(doDelete){
        deleteNote(id,element);
       }
    });
   
    return element;

}
function addNote(){
    const notes =getNote();
    const noteObject ={
        id: Math.floor(Math.random()*10000),
        content : ""
    };
    const noteElement = craeteNoteElement(Object.id , Object.content);
    notesContainer.insertBefore(noteElement , addNoteButton);
    notes.push(noteObject);
    saveNote(notes);

}
function updateNote(id , newContent){
    const notes = getNote();
    const targetNote = notes.filter(notes => notes.id ==id)[0];
    targetNote.content = newContent;
    saveNote(notes);

}


function deleteNote(id ,element){
//    const notes = getNote.filter(notes => notes.id !=id);
const notes = getNote();
 notes.filter(notes => notes.id !=id);
   saveNote(notes);
   notesContainer.removeChild(element);
}