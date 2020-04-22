
    // Reference messages collection
    var messagesRef = firebase.database().ref('messages');
  
    //listen for form submit
    document.getElementById('create-form1').addEventListener('Submit',submitform);

    //submit form
    function submitform(e){
    e.preventDefault();
    
    //get values
    var ID = getInputVal('ID');
    var BookName = getInputVal('BookName');
    var AuthorsName = getInputVal('AuthorsName');
    var Edition = getInputVal('Edition');
    var Quantity = getInputVal('Quantity');
    var Department = getInputVal('Department');
        
    // Save message
    saveMessage(ID, BookName, AuthorsName, Edition,Quantity,Department);
    }

    //function to get form values 
    function getInputValue(id){
    return document.getElementById(id).value;   
    }

    // Save message to firebase
    function saveMessage(ID, BookName, AuthorsName, Edition,Quantity,Department){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        ID: ID,
        BookName:BookName,
        AuthorsName: AuthorsName,
        Edition:Edition,
        Quantity: Quantity,
        Department:Department,
    });
  }