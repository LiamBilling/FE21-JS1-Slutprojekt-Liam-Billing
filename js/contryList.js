fetch(`https://raw.githubusercontent.com/LiamBilling/countries/fb3a4a37b315eff426ab29a3a3db04ac6bb40c7b/countries.json?token=AVNPD7QIR5QURC3NVXFDBRTB2EDEW`)
.then(  
    function(response) {
    console.log(response);
 
      response.json().then(function(data) {  
        let option;
    
    	for (let i = 0; i < data.length; i++) {
          option = document.createElement('option');
          getCountry.appendChild(option);
      	  option.text = data[i].name;
      	  option.value = data[i].code;
      	  getCountry.add(option);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });