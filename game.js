let affichage = document.getElementById('affichage');
let score = 0;
let multiplicateur = 1;
let prixMultiplier = 10;
let prixAuto = 10;
let prixBonus = 10;
affichage.innerHTML = score;
// cookie clicker
let bouton = document.getElementsByTagName('img');
bouton[3].addEventListener('click', function() {
    addition();
    affichage.innerHTML = score;
})

// multiplier
let boutonMultiplier = document.getElementsByTagName('img');
boutonMultiplier[0].innerHTML = "Multiplicateur x" + multiplicateur + " Prix : " + prixMultiplier;
boutonMultiplier[0].disabled = true;
boutonMultiplier[0].addEventListener('click', function augmenterMultiplicateur() {
    if (score >= prixMultiplier) {
        multiplicateur += 1;
        score -= prixMultiplier;
        prixMultiplier = prixMultiplier * 2;
        affichage.innerHTML = score;
        boutonMultiplier.innerHTML = "Multiplicateur x" + multiplicateur + " Prix : " + prixMultiplier;
    }
})

// addition
function addition() {
    score += multiplicateur;
}

// vérifier les boutons
setInterval(function() {
    boutonMultiplier.disabled = true;
    autoclic.disabled = true;
    bonus.disabled = true;
    if (score >= prixMultiplier) {
        boutonMultiplier.disabled = false;
    } else if (score >= prixAuto) {
        autoclic.disabled = false;
    } else if (score >= prixBonus) {
        bonus.disabled = false;
    }
}, 100)

// autoclic
let autoclic = document.getElementsByTagName('img');
autoclic[1].addEventListener('click', function() {
    score -= prixAuto;
    setInterval(function autoclic() {
        addition();
        affichage.innerHTML = score;
    }, 1000);
    prixAuto = prixAuto ** 2;
})

// bonus
let bonus = document.getElementsByTagName('img');
let time = 30;
bonus.innerHTML = time;
bonus[2].addEventListener('click', function() {
    multiplicateur = multiplicateur * 2
    setInterval(function bonus() {
        time -= 1;
    }, 1000);
    setTimeout(function() {
        clearInterval(bonus);
        multiplicateur = multiplicateur / 2;
        prixBonus = prixBonus ** 2;
        
    }, 5000);
})





