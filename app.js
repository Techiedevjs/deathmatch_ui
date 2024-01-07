let playerDetail = {
    name: 'bloodSoul',
    id: 'ax347e'
}

const attackingTeam = [
    {
        imageUrl: 'images/avatar.svg',
        id: 'cs45hj',
        name: 'QuantumQuasar',
        kills: 14,
        deaths: 0,
        score: 6344
    },
    {
        imageUrl: 'images/avatar.svg',
        id: 'hj456i',
        name: 'ShadowPhoenix',
        kills: 10,
        deaths: 2,
        score: 5245
    },
    {
        imageUrl: 'images/avatar.svg',
        id: 'ui8945',
        name: 'FrostHawk',
        kills: 5,
        deaths: 10,
        score: 4185
    },
    {
        imageUrl: 'images/avatar.svg',
        id: 'blr453',
        name: 'BladeRogue',
        kills: 6,
        deaths: 7,
        score: 3657
    },
    // {
    //     imageUrl: 'images/avatar.svg',
    //     id: 'ax347e',
    //     name: 'bloodSoul',
    //     kills: 7,
    //     deaths: 5,
    //     score: 4876
    // },
    {
        imageUrl: 'images/avatar.svg',
        id: 'ecp976',
        name: 'EclipsePulse',
        kills: 7,
        deaths: 4,
        score: 3406
    },
    {
        imageUrl: 'images/avatar.svg',
        id: 'wra567',
        name: 'Wraith',
        kills: 5,
        deaths: 15,
        score: 3109
    },
    {
        imageUrl: 'images/avatar.svg',
        id: 'klo908',
        name: 'RogueLynx',
        kills: 3,
        deaths: 10,
        score: 2500
    },
]

const defendingTeam = [
    {
        imageUrl: 'images/avatar.svg',
        id: 'cs56xj',
        name: 'BlazeSerpent',
        kills: 12,
        deaths: 0,
        score: 5780
    },
    {
        imageUrl: 'images/avatar.svg',
        id: 'hp4r6i',
        name: 'FrostQuill',
        kills: 9,
        deaths: 1,
        score: 5189
    },
    {
        imageUrl: 'images/avatar.svg',
        id: 'uip905',
        name: 'MysticViper',
        kills: 7,
        deaths: 3,
        score: 3760
    },
    {
        imageUrl: 'images/avatar.svg',
        id: 'bxr493',
        name: 'zephyr',
        kills: 7,
        deaths: 5,
        score: 3456
    },
    {
        imageUrl: 'images/avatar.svg',
        id: 'ax342r',
        name: 'nebula',
        kills: 4,
        deaths: 8,
        score: 3105
    },
    {
        imageUrl: 'images/avatar.svg',
        id: '3cz976',
        name: 'venomous',
        kills: 2,
        deaths: 6,
        score: 2406
    },
    {
        imageUrl: 'images/avatar.svg',
        id: 'ira867',
        name: 'inferno',
        kills: 0,
        deaths: 12,
        score: 567
    },
    // {
    //     imageUrl: 'images/avatar.svg',
    //     id: 'plo928',
    //     name: 'gravityGlider',
    //     kills: 0,
    //     deaths: 15,
    //     score: 300
    // },
    {
        imageUrl: 'images/avatar.svg',
        id: 'ax347e',
        name: 'bloodSoul',
        kills: 7,
        deaths: 5,
        score: 4876
    },
]

const pushDefendingTeam = (data) => {
    document.querySelector('.defending-team').innerHTML = '';
    let totalDefendingTeamScore = 0;
    data.sort((a, b) => b.score - a.score).map((player) => {
        const {name, imageUrl, id, kills, deaths, score} = player;
        if(id === playerDetail.id){
            document.querySelector('.attacking-team-status').innerHTML = 'Enemy Team';
            document.querySelector('.defending-team-status').innerHTML = 'Your Team';
            document.querySelector('.attacking-team-score').innerHTML = 'Enemy score';
            document.querySelector('.defending-team-score').innerHTML = 'Team score';
        }
        totalDefendingTeamScore += score
        document.querySelector('.defending-team').innerHTML += `
        <div class="player ${id === playerDetail.id ? 'you' : ''}" id=${id}>
            <div>
                <img src=${imageUrl} alt="">
                <p class="name">${name} ${id === playerDetail.id ? `<span>(You)</span>` : ''}</p>
            </div>
            <p>${kills}</p>
            <p>${deaths}</p>
            <p>${score}</p>
        </div>
        `
    })
    let total = totalDefendingTeamScore.toString();
    total = total.slice(0, 2) + ' ' + total.slice(2)
    document.querySelector('.totalDefendingForcesScore').innerHTML = total;
}

const pushAttackingTeam = (data) => {
    document.querySelector('.attacking-team').innerHTML = '';
    let totalAttackingTeamScore = 0;
    data.sort((a, b) => b.score - a.score).map((player) => {
        const {name, imageUrl, id, kills, deaths, score} = player;
        if(id === playerDetail.id){
            document.querySelector('.attacking-team-status').innerHTML = 'Your Team';
            document.querySelector('.defending-team-status').innerHTML = 'Enemy Team';
            document.querySelector('.attacking-team-score').innerHTML = 'Team score';
            document.querySelector('.defending-team-score').innerHTML = 'Enemy score';
        }
        totalAttackingTeamScore += score;
        document.querySelector('.attacking-team').innerHTML += `
        <div class="player ${id === playerDetail.id ? 'you' : ''}" id=${id}>
            <div>
                <img src=${imageUrl} alt="">
                <p class="name">${name} ${id === playerDetail.id ? `<span>(You)</span>` : ''}</p>
            </div>
            <p>${kills}</p>
            <p>${deaths}</p>
            <p>${score}</p>
        </div>
        `
    })
    let total = totalAttackingTeamScore.toString()
    total = total.slice(0, 2) + ' ' + total.slice(2)
    document.querySelector('.totalAttackingForcesScore').innerHTML = total;
}

pushDefendingTeam(defendingTeam);
pushAttackingTeam(attackingTeam);

const back = () => {
    document.querySelector('.container').classList.add('hide')
}

document.addEventListener('keydown', evt => {
    if(evt.key === 'Escape'){
        back()
    }
})
const toggleDisplay = () => {
    document.querySelector('.container').classList.toggle('hide')
}
document.addEventListener('keydown', evt => {
    if (evt.key === 'Home') {
        toggleDisplay();
    }
});