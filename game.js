let affichage = document.getElementById('affichage');
let score = 0;
let multiplicateur = 1;
let prixMultiplier2 = 10;
let prixMultiplier4 = 10
let prixAuto1 = 10;
let prixAuto2 = 10
let prixBonus = 10;
let prixUnSurDeux = 50;
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
Multiplier2.addEventListener('click', function() {
    if (score >= prixMultiplier2) {
        multiplicateur = multiplicateur * 2;
        score -= prixMultiplier2;
        affichage.innerHTML = score;
        prixMultiplier2 = prixMultiplier2 ** 2;
    }
})

// multiplier x 4
let Multiplier4 = document.getElementById('multiplier4');
Multiplier4.addEventListener('click', function() {
    if (score >= prixMultiplier4) {
        multiplicateur = multiplicateur * 4;
        score -= prixMultiplier4;
        affichage.innerHTML = score;
        prixMultiplier4 = prixMultiplier4 ** 2;
    }
})

// bonus
let bonus = document.getElementById('bonus');
let time = 30;
bonus.addEventListener('click', function() {
    if (score >= prixBonus) {
        multiplicateur = multiplicateur * 2
        setInterval(function() {
            time -= 1;
        }, 1000);
        setTimeout(function() {
            clearInterval(bonus);
            multiplicateur = multiplicateur / 2;
            prixBonus = prixBonus ** 2;
            
        }, 5000);
    }
})

// écouter le changement du score
setInterval(function() {
    if (score >= 5 && liste[1] == true) {
        niveau += 1;
        niveauAffichage.innerHTML = "Niveau : " + niveau;
        cookie.style.animation = 'rotate 1s 1 ease';
        // document.body.style.backgroundImage = '';
        liste[1] = false;
        cookie.addEventListener('animationend', function() {
        cookie.style.animation = "initial";
        });
    } else if (score >= 10 && liste[2] == true) {
        niveau += 1;
        niveauAffichage.innerHTML = "Niveau : " + niveau;
        cookie.style.animation = 'rotate 2s 1 ease running';
        // document.body.style.backgroundImage = '';
        liste[2] = false;
    } else if (score >= 30 && liste[3] == true) {
        niveau += 1;
        niveauAffichage.innerHTML = "Niveau : " + niveau;
        cookie.style.animation = '2s 1 ease rotate';
        // document.body.style.backgroundImage = '';
        liste[3] = false;
    } else if (score >= 40 && liste[4] == true) {
        niveau += 1;
        niveauAffichage.innerHTML = "Niveau : " + niveau;
        cookie.style.animation = '2s 1 ease rotate';
        // document.body.style.backgroundImage = '';
        liste[4] = false;
    }
}, 500)

// autoclick1
let autoclick1 = document.getElementById('autoclick');
autoclick1.addEventListener('click', function() {
    if (score >= prixAuto1) {
        score -= prixAuto1;
        affichage.innerHTML = score;
        setInterval(function() {
            score += multiplicateur;
            affichage.innerHTML = score;
        }, 1000);
        prixAuto1 = prixAuto1 ** 2;
    }
})

// autoclick2
let autoclick2 = document.getElementById('autoclick2');
autoclick2.addEventListener('click', function() {
    if (score >= prixAuto2) {
        score -= prixAuto2;
        affichage.innerHTML = score;
        setInterval(function() {
            score += multiplicateur;
            affichage.innerHTML = score;
        }, 1000);
        prixAuto1 = prixAuto2 ** 2;
    }
})

// un sur deux
let unSurDeux = document.getElementById('double');
unSurDeux.addEventListener('click', function() {
    if (score >= prixUnSurDeux) {
        score -= prixUnSurDeux;
        affichage.innerHTML = score;
        if (Math.random() < 0.5) {
            score = score * 2;
        } else {
            score = 0;
        }
    }
})