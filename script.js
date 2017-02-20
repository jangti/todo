$(document).ready(function(){
	var operation = 'c' ;
	var listIndex = -1;
	// alert(operation);
	var tblTasks = localStorage.getItem(tblTasks);
	tblTasks = JSON.parse(tblTasks);
	if (tblTasks === null) {
		tblTasks = [];
	}

	function create(){
		// ale
		// alert('hi');
		var tasks = JSON.stringify({todoTxt:$('#todoTxt').val()});
		tblTasks.push(tasks);
		localStorage.setItem('tblTasks', JSON.stringify(tblTasks));
		// alert(tblTasks);
		// console.log(tblTasks);
		return true;
	}
	function edit(){
		tblTasks[listIndex] = JSON.stringify({
			todoTxt:$('#todoTxt').val()
		});
		localStorage.setItem('tblTasks', JSON.stringify(tblTasks));
		return true;		
	}
	function deleteIt(){
		tblTasks.splice(listIndex,1);
		localStorage.setItem('tblTasks', JSON.stringify(tblTasks));
	}
	function list(){
		// alert('hi');
		// console.log(tblTasks);
		$('#todoList').html('');
		$('#todoList').html('<thead>'+
			'<tr>'+
			'<th>Tasks</th>'+
			'<th>Acessories</th>' +
			'</tr>'+ 
			'</thead>'+
			'<tbody>'+
			'</tbody>');
		tblTasks = JSON.parse(localStorage.getItem('tblTasks'));
		for(var i in tblTasks){
			// alert
			// alert(i);
			var task = JSON.parse(tblTasks[i]);
			$('#todoList tbody').append('<tr>'+
				'<td>'+task.todoTxt+'</td>'+
				'<td> <img src = "edit.png" alt = "edit' +i+ '" class = "btnEdit"/>&nbsp &nbsp<img src="delete.png" alt="Delete'+i+'" class = "btnDelete"/></td>'
				+'</tr>'
			);
		}
	}
	$('#todoForm').bind('submit', function(){
		// alert(operation);
		if(operation === 'c'){
			return create();
		}
		else{
			return edit();
		}
		list();
	});
	list();
	
	$('.btnEdit').bind('click', function(){
		operation = 'e';
		listIndex = parseInt($(this).attr('alt').replace('edit',''));
		var task = JSON.parse(tblTasks[listIndex]);
		$('#todoTxt').val(task.todoTxt);
	});
	$('.btnDelete').bind('click', function(){
		listIndex = parseInt($(this).attr('alt').replace('delete',''));
		deleteIt();
		list();
	})

});