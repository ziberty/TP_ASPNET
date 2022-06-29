const uri = 'api/commandes';
let commandes = [];

function getCommandes() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayCommandes(data))
        .catch(error => console.error('Impossible de récupérer les commandes.', error));
}

function addCommande() {
    const addEntreeTextbox = document.getElementById('add-entree');
    const addPlatTextbox = document.getElementById('add-plat');
    const addDessertTextbox = document.getElementById('add-dessert');
    const addBoissonButton = document.getElementById('add-boisson').checked;

    const commande = {
        Entree: addEntreeTextbox.value.trim(),
        Plat: addPlatTextbox.value.trim(),
        Dessert:addDessertTextbox.value.trim(),
        Boisson: addBoissonButton.value,
        EtatCommande: "Commande enregistrée"
    };

    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commande)
    })
        .then(response => response.json())
        .then(() => {
            getCommandes();
            addEntreeTextbox.value = '';
            addPlatTextbox.value = '';
            addDessertTextbox.value = '';
            addBoissonButton.value = false;
        })
        .catch(error => console.error('Impossible d\'ajouter la commande.', error));
}

function updateCommande() {
    const commandeId = document.getElementById('id-commande').value;
    const commandeGet = commandes.find(item => item.id === parseInt(commandeId, 10));
    
    const commande = {
        Id: parseInt(commandeId, 10),
        Entree: commandeGet.entree,
        Plat: commandeGet.plat,
        Dessert: commandeGet.dessert,
        Boisson: commandeGet.boisson,
        EtatCommande: document.querySelector('input[name="etat-commande"]:checked').value
    };

    fetch(`${uri}/${commandeId}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(commande)
    })
        .then(() => getCommandes())
        .catch(error => console.error('Impossible de mettre à jour la commande.', error));

    closeInput();

    return false;
}

function _displayCommandes(data) {
    const tBody = document.getElementById('commandes');
    tBody.innerHTML = '';
    
    data.forEach(commande => {
        let hasBoissonCheckbox = document.createElement('input');
        hasBoissonCheckbox.type = 'checkbox';
        hasBoissonCheckbox.disabled = true;
        hasBoissonCheckbox.checked = commande.Boisson;

        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        let textIdCommande = document.createTextNode(commande.id);
        td1.appendChild(textIdCommande);

        let td2 = tr.insertCell(1);
        let textEntree = document.createTextNode(commande.entree);
        td2.appendChild(textEntree);

        let td3 = tr.insertCell(2);
        let textPlat = document.createTextNode(commande.plat);
        td3.appendChild(textPlat);

        let td4 = tr.insertCell(3);
        let textDessert = document.createTextNode(commande.dessert);
        td4.appendChild(textDessert);

        let td5 = tr.insertCell(4);
        td5.appendChild(hasBoissonCheckbox);

        let td6 = tr.insertCell(5);
        let textEtat = document.createTextNode(commande.etatCommande);
        td6.appendChild(textEtat);
    });

    commandes = data;
}