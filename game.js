let affichage = document.getElementById('affichage');
let score = 0;
let multiplicateur = 1;
let prixMultiplier2 = 40;
let compteurM2 = 0;
let prixMultiplier4 = 500;
let compteurM4 = 0;
let prixAuto1 = 40;
let compteurA1 = 0;
let prixAuto2 = 40;
let compteurA2 = 0;
let prixBonus = 1000;
let prixUnSurDeux = 40;
let niveau = 1;
let liste = [null, true, true, true, true];
affichage.innerHTML = score;

// cookie clicker
let cookie = document.getElementById('pacMan');
cookie.addEventListener('click', function() {
    score += multiplicateur;
    affichage.innerHTML = score;
})

// afficher le niveau
let niveauAffichage = document.getElementById('niveau');
niveauAffichage.innerHTML = "Niveau : " + niveau;

// multiplier x 2
let Multiplier2 = document.getElementById('multiplier2');
let prixm2 = document.getElementById('prix-m2');
Multiplier2.addEventListener('click', function() {
    if (score >= prixMultiplier2) {
        multiplicateur = multiplicateur * 2;
        score -= prixMultiplier2;
        affichage.innerHTML = score;
        prixMultiplier2 = prixMultiplier2 * 2;
        compteurM2 += 1;
        prixm2.innerHTML = prixMultiplier2 + " clicks" + " *" + compteurM2 + " ";
    }
})

// multiplier x 4
let Multiplier4 = document.getElementById('multiplier4');
let prixm4 = document.getElementById('prix-m4');
Multiplier4.addEventListener('click', function() {
    if (score >= prixMultiplier4) {
        multiplicateur = multiplicateur * 4;
        score -= prixMultiplier4;
        affichage.innerHTML = score;
        prixMultiplier4 = prixMultiplier4 * 2;
        compteurM4 += 1;
        prixm4.innerHTML = prixMultiplier4 + " clicks" + " *" + compteurM4 + " ";
    }
})

// bonus
let bonusCheck = false;
let bonus = document.getElementById('bonus');
let time = 31;
let timeElement = document.getElementById('time');
let prixB = document.getElementById('prix-bonus');
let eventbonus = bonus.addEventListener('click', function() {
    if (score >= prixBonus && !bonusCheck) {
        bonusCheck = true;
        multiplicateur = multiplicateur * 10
        score -= prixBonus;
        affichage.innerHTML = score;
        prixBonus = prixBonus * 2;
        prixB.innerHTML = prixBonus + " clicks"
        let interval = setInterval(function() {
            timeElement.innerHTML = "Temps restant : " +( time - 1);
            time -= 1;
            console.log(time, timeElement);
            if (time == 0) {
                clearInterval(interval);
                multiplicateur = multiplicateur / 10;
                timeElement.innerHTML = "";
                time = 31;
                bonusCheck = false;
            }
        }, 1000);
    }
})


// écouter le changement du score
setInterval(function() {
    if (score >= 50 && liste[1] == true) {
        niveau += 1;
        niveauAffichage.innerHTML = "Niveau : " + niveau;
        cookie.classList.toggle('animation');
        // document.body.style.backgroundImage = '';
        liste[1] = false;
        cookie.addEventListener('animationend', function() {
        cookie.classList.remove('animation');
        });
    } else if (score >= 100 && liste[2] == true) {
        niveau += 1;
        niveauAffichage.innerHTML = "Niveau : " + niveau;
        cookie.classList.toggle('animation');
        // document.body.style.backgroundImage = '';
        liste[2] = false;
        cookie.addEventListener('animationend', function() {
            cookie.classList.remove('animation');
            });
    } else if (score >= 500 && liste[3] == true) {
        niveau += 1;
        niveauAffichage.innerHTML = "Niveau : " + niveau;
        cookie.classList.toggle('animation');
        // document.body.style.backgroundImage = '';
        liste[3] = false;
        cookie.addEventListener('animationend', function() {
            cookie.classList.remove('animation');
            });
    } else if (score >= 1000 && liste[4] == true) {
        niveau += 1;
        niveauAffichage.innerHTML = "Niveau : " + niveau;
        cookie.classList.toggle('animation');
        // document.body.style.backgroundImage = '';
        liste[4] = false;
        cookie.addEventListener('animationend', function() {
            cookie.classList.remove('animation');
            });
    }
}, 500)

// autoclick1
let autoclick1 = document.getElementById('autoclick');
let prixa = document.getElementById('prix-a');
autoclick1.addEventListener('click', function() {
    if (score >= prixAuto1) {
        score -= prixAuto1;
        affichage.innerHTML = score;
        setInterval(function() {
            score += 1;
            affichage.innerHTML = score;
        }, 1000);
        prixAuto1 = prixAuto1 * 2;
        compteurA1 += 1;
        prixa.innerHTML = prixAuto1+ " clicks" + " *" + compteurA1 + " ";
    }
})

// autoclick2
let autoclick2 = document.getElementById('autoclick2');
let prixa2 = document.getElementById('prix-a2');
autoclick2.addEventListener('click', function() {
    if (score >= prixAuto2) {
        score -= prixAuto2;
        affichage.innerHTML = score;
        setInterval(function() {
            score += 2;
            affichage.innerHTML = score;
        }, 1000);
        prixAuto2 = prixAuto2 * 2;
        compteurA2 += 1;
        prixa2.innerHTML = prixAuto2+ " clicks" + " *" + compteurA2 + " ";
    }
})

// un sur deux
let unSurDeux = document.getElementById('double');
let prixdouble = document.getElementById('prix-double');
unSurDeux.addEventListener('click', function() {
    if (score >= prixUnSurDeux) {
        score -= prixUnSurDeux;
        affichage.innerHTML = score;
        if (Math.random() < 0.5) {
            score = score * 2;
            affichage.innerHTML = score;
        } else {
            score = 0;
            affichage.innerHTML = score;
        }
        prixUnSurDeux = prixUnSurDeux * 2;
        prixdouble.innerHTML = prixUnSurDeux+ " clicks";
    }
})
