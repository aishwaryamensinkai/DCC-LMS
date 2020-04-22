
    // Reference messages collection
    var messagesRef = firebase.database().ref('messages');
  
    //listen for form submit
    document.getElementById('create-form').addEventListener('Submit',submitform);

    //submit form
    function submitform(e){
    e.preventDefault();
    
    //get values
    var FirstName = getInputVal('FirstName');
    var Lastname = getInputVal('Lastname');
    var Email = getInputVal('Email');
    var FeedBackContent = getInputVal('FeedBackContent');
        
    // Save message
    saveMessage(FirstName, Lastname, Email, FeedBackContent);
    }

    //function to get form values 
    function getInputValue(id){
    return document.getElementById(id).value;   
    }

    // Save message to firebase
    function saveMessage(FirstName, Lastname, Email, FeedBackContent){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        FirstName: FirstName,
        Lastname:Lastname,
        Email:Email,
        FeedBackContent:FeedBackContent
    });
  }