
    // Reference messages collection
    var messagesRef = firebase.database().ref('messages');
  
    //listen for form submit
    document.getElementById('create-form1').addEventListener('Submit',submitform);

    //submit form
    function submitform(e){
    e.preventDefault();
    
    //get values
    var firstname = getInputVal('firstname');
    var lastname = getInputVal('lastname');
    var University = getInputVal('University');
    var USN = getInputVal('USN');
    var PhoneNumber = getInputVal('PhoneNumber');
    var Gender = getInputVal('Gender');
        
    // Save message
    saveMessage(firstname, lastname, University, USN,PhoneNumber,Gender);
    }

    //function to get form values 
    function getInputValue(id){
    return document.getElementById(id).value;   
    }

    // Save message to firebase
    function saveMessage(firstname, lastname, University, USN,PhoneNumber,Gender){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        firstname: firstname,
        lastname:lastname,
        University: University,
        USN:USN,
        PhoneNumber: PhoneNumber,
        Gender:Gender,
    });
  }