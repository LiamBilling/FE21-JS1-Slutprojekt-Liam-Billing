fetch(`hhttps://raw.githubusercontent.com/LiamBilling/LiamBilling-FE21-JS1-Slutprojekt-Liam-Billing/main/js/countries.jsonS`)
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
