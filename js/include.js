$(
function(){
/* 	$.getJSON("config.json", 
          function(data) { 
		  console.log('inside json');
		  }
     ); */
	 
/* 	console.log('inside ready dom'+products[1].resource);
	console.log(0 % 2);
	console.log(1 % 2);
	console.log(products.length); */
	let row='';
	jQuery.each(products,function(index){
		
		//console.log('prod value:'+products[index].name);
		if(index % 2 == 0){
			row+=`<div class="col-sm-12 row bottom-buffer">`;
			//console.log('adding div 12 in odd row');
		}
		//<button id="singlebutton" name="singlebutton" class="btn btn-primary row top-buffer">Price on Request</button>
		row+=`<div class="col-sm-6"><article class="templatemo-item text-center"><h2>`+
		products[index].name+
		`</h2><div><img src="images/products/`+
		products[index].name+
		`.jpg" alt="`+
		products[index].name+
		`" class="img-thumbnail .img-responsive"></div><div>
		
		<a class="btn btn-primary top-buffer" href="contact.html" role="button">Price on Request</a>
		</div></article></div>`;
		if(index % 2 == 1){
			row+=`</div><hr>`;
			//console.log('adding end div in even row');
		}else if(index == products.length-1){
			row+=`</div><hr>`;
			//console.log('adding end div in last row');
		}
		if(index == products.length-1){
			$("#middle").append(row);
		}
	});
    var includes = $('[data-include]');
    jQuery.each(includes, function(){
      var file = $(this).data('include') + '.html';
      $(this).load(file);
	  //console.log('url:'+window.location.pathname);
	  //$('#about').addClass('active');
    });
	

  }

);
	
