
// SI ON CLIQUE SUR VALIDER TOUTES LES INFOS SI VALIDES SONT AFFICHEES DANS LA DIVISION INFOS
nom = document.getElementById('nomblur');

tel.addEventListener('blur',function()
{
    tel = document.getElementById('tel');
    if(tel.value.trim() != '')
    {
        if(is_num_valid(tel.value))
        {
            valid++;
            tel.style.border= "1px solid pink";
        }
        else
        {
            tel.style.border = '2px solid red';
        }
    }
});
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
valid = 0;

nom.onblur = function() 
{
    if(nom.value.trim() != '')
    {
        if(is_string_alp(nom.value) && (nom.value.length>1 && nom.value.length<26))
        {
            valid++;
            nom.style.border= "1px solid pink";
        }
        else
        {
            nom.style.border = '2px solid red';
        }
    }
}

function validFName() 
{
    prenom = document.getElementById('prenom'); 
    if(prenom.value.trim() != '')
    {
        if(is_string_alp(prenom.value) && (prenom.value.length>1 && prenom.value.length<51))
        {
            valid++;
            prenom.style.border= "1px solid pink";
        }
        else
        {
            prenom.style.border = '2px solid red';
        }
    }
}
id=0;
tab = document.getElementById('tab');
function valider()
{
    if(valid==3)
    {
        id++;
        tr = document.createElement('tr');
        tr.id = id;
        tr.innerHTML = `
        <td>${nom.value}</td>
        <td>${prenom.value}</td>
        <td>${tel.value}</td>
        <td><button onclick="remove(${id})">Supprimer</button></td>`;
        tab.appendChild(tr);
        vider_champs();
        valid = 0;
    }
    else
    {
        alert('TOUS LES CHAMPS DOIVENT ETRE CORRECTS !');
    }
}

function vider_champs()
{
    document.getElementById('nomblur').value = '';
    document.getElementById('prenom').value = '';
    document.getElementById('tel').value = '';
}
function remove(id)
{
    if(confirm('Voulez-vous vraiment supprimer la ligne ?'))
    {
        r = document.getElementById(id);
        r.remove();
    }
}