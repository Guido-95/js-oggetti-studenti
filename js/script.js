// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

// oggetto studente
var studente = {
    nome:"Domenico",
    cognome:"Lavandino",
    eta:20
}

console.log("oggetto studente ",studente);

// ciclo per stampare le proprietà
for (var chiave in studente) {
    console.log(chiave + ": ", studente[chiave]);    
}


// array di oggetti
var studenti = [
    
    {
        nome:"Domenico",
        cognome:"Lavandino",
        eta:22  
    }
    ,
    {
        nome:"Giovanni",
        cognome:"Salone",
        eta:22  
    }
    
]

console.log("array di oggetti studenti ", studenti);

// stampa nome e cognome degli studenti nell'array studenti
for (var i = 0; i < studenti.length; i++) {
    console.log("studente: ",studenti[i].nome + " " + studenti[i].cognome ); 
}

// richiesta nome
var nome = prompt("inserisci il nome");
var letteraMaiuscola = nome[0].toUpperCase()
nome = nome.slice(1);
nome = letteraMaiuscola + nome;

console.log(nome);
// controllo che non sia un numero
while(!isNaN(nome)){
    var nome = prompt("ERRORE, inserisci il nome");
}

// richiesta cognome
var cognome = prompt("inserisci il cognome");
var letteraMaiuscola = cognome[0].toUpperCase()
cognome = cognome.slice(1);
cognome = letteraMaiuscola + cognome;

// controllo che non sia un numero
while(!isNaN(cognome)){
    var cognome = prompt("ERRORE, inserisci il cognome");
}

// richiesta età
var eta = parseInt(prompt("inserisci l'eta"));
// controllo che sia un numero
while(isNaN(eta)){
    var eta = parseInt(prompt("ERRORE, inserisci l'eta"));
}

// stampa dati utente
console.log("nome utente: ",nome);
console.log("cognome utente: ",cognome);
console.log("età utente: ",eta);

// inserisci oggetto nell'array studenti
studenti.push({nome,cognome,eta});

console.log("array di oggetti studenti",studenti);



