// A LA SORTIE DE CHAQUE CHAMP LES VERIFICATIONS SUIVANTES SONT EFFECTUEES:
// LE NOM DOIT AU MOINS CONTENIR 2 CARACTERES ET NE PAS DEASSER 25 CARACTERES
// LE PRENOM DOIT AU MOINS CONTENIR 2 CARACTERES ET NE PAS DEASSER 50 CARACTERES
// LE numero DOIT CONTENIR 9 CARACTERES ET ETRE COMPOSE QUE DE CHIFFRES (77,78,70,76)
// SI ON CLIQUE SUR VALIDER TOUTES LES INFOS SI VALIDES SONT AFFICHEES DANS LA DIVISION INFOS
validenom=0;
valideprenom=0;
validetel=0;
var inputnom= document.getElementById('nomblur');
inputnom.onblur = function () {
	if(inputnom.value.trim() != ''){
		if(inputnom.value.length<2 || inputnom.value.length>25 || is_string_alp(inputnom.value)==false){
			inputnom.style.border= "2px solid red";
			validenom=0;
		}else{
			inputnom.style.border= "1px solid pink";
			validenom=1;
		}
	}
}
function is_num_valid(string)
{
	r = /^(78|77|76|70|33)[0-9]{7}$/;
	return r.test(string);
}
function is_string_alp(string)
{
	r = /^[a-z ]+$/i;
	return r.test(string);
}
function verifprenom(){
	inputprenom =  document.getElementById('prenom');
	if(inputprenom.value.trim() != ''){
		if(inputprenom.value.length<2 || inputprenom.value.length>25 || is_string_alp(inputnom.value)==false){
			inputprenom.style.border= "2px solid red";
			valideprenom=0;
		}else{
			inputprenom.style.border= "1px solid pink";
			valideprenom=1;
		}
	}
}
var inputel= document.getElementById('tel');
inputel.addEventListener("blur",function(){
	if(inputel.value.trim() != '')	{
		if(is_num_valid(inputel.value.trim())==false){
			inputel.style.border= "2px solid red";
			validetel=0;
		}else{
			inputel.style.border= "1px solid pink";
			validetel=1;
		}
	}
})
add = -1;
var table = document.getElementById('tab');

function valider()
{
	if(validetel==1 && valideprenom==1 && validenom==1)
	{
		    table.removeAttribute('hidden');
		    h.removeAttribute('hidden');

			var nom = document.getElementById('nomblur').value;
			var prenom = document.getElementById('prenom').value;
			var tel = document.getElementById('tel').value;

			var tr = document.createElement('tr');
			table.appendChild(tr);

			var td = document.createElement('td');
			td.innerHTML = nom;
			tr.appendChild(td);

			var td = document.createElement('td');
			td.innerHTML = prenom;
			tr.appendChild(td);

			var td = document.createElement('td');
			td.innerHTML = tel;
			tr.appendChild(td);

			var tds = document.createElement('td');
			tds.innerHTML = '<b>Supprimer</b>';
			tds.style.color = 'red';
			tds.style.cursor = 'pointer';
			add = add + 1;
			tds.setAttribute('class',add);
			tr.setAttribute('id',add);
			tr.appendChild(tds);

			validetel=0;
			valideprenom=0;
			validenom=0;

			vider_champs();


	}else{
		table.setAttribute('hidden','hidden');
		alert('TOUS LES CHAMPS DOIVENT ETRE CORRECTS!');
	}
}

function vider_champs(){
    document.getElementById('nomblur').value ="";
    document.getElementById('tel').value ="";
    document.getElementById('prenom').value ="";
}

table.onmouseover = function(){
	for (var i = 1; i < table.rows.length; i++) 
		{
			table.rows[i].cells[3].onclick = function(){
			if(confirm('Voulez-vous vraiment supprimer la ligne ?'))
			{
				index = this.parentElement.rowIndex;
				table.deleteRow(index);
			}
		}
	}
}
