
//fonction pour afficher des popUp et les supprimer ensuite
	var idPopup=0;
	function setPopup(text,type, time)
	{
		//verifications
		if( typeof(time) == 'undefined' ){time= 4000;}
		else{time*=1000;}
		if(type!="success" && type!="danger" && type!="info" && type!="warning" && type!="default"){type="default";}
		if(text=="" || text== 'undefined'){console.log('Popup.js : No text = No display');return false;}
		//

		var popup=[];

		popup="<p id='popup_"+idPopup+"' class='popup popup-"+type+"'>"+text+"</p>";
		
		$('#popup-div').append(popup);
		hidePopup(idPopup, time);
		idPopup++;

		return true;
	}
	
	function hidePopup(id, time)
	{
		setTimeout(function()
		{
			$('#popup_'+id).animate({opacity: 0,height: "toggle"}, 500);
		}, time);
		setTimeout(function(){$('#popup_'+id).remove();}, time+1000);

		return true;
	}

