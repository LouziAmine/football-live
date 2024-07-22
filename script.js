document.addEventListener("DOMContentLoaded", function() {
    const londonDiv = document.getElementById('London');

    const matchData = [
        {
            team1: {
                name: 'FC Barcelona',
                logo: 'Logo/Logo_FC.png'
            },
            time: '18h00',
            status: 'Ça n\'a pas encore commencé',
            team2: {
                name: 'Real Madrid',
                logo: 'Logo/Real Madrid.png'
            }
        },
        // Add more matches here if needed
    ];

    matchData.forEach(match => {
        const matchContent = document.createElement('div');
        matchContent.className = 'Match__Content';

        const team1Img = document.createElement('img');
        team1Img.src = match.team1.logo;
        team1Img.alt = match.team1.name;
        team1Img.width = 75;
        team1Img.height = 75;

        const team1Name = document.createElement('div');
        team1Name.textContent = match.team1.name;

        const matchInfoContent = document.createElement('div');
        matchInfoContent.className = 'Match__Info__Content';

        const matchTime = document.createElement('div');
        matchTime.textContent = match.time;

        const matchStatus = document.createElement('div');
        matchStatus.textContent = match.status;

        matchInfoContent.appendChild(matchTime);
        matchInfoContent.appendChild(matchStatus);

        const team2Name = document.createElement('div');
        team2Name.textContent = match.team2.name;

        const team2Img = document.createElement('img');
        team2Img.src = match.team2.logo;
        team2Img.alt = match.team2.name;
        team2Img.width = 75;
        team2Img.height = 75;

        matchContent.appendChild(team1Img);
        matchContent.appendChild(team1Name);
        matchContent.appendChild(matchInfoContent);
        matchContent.appendChild(team2Name);
        matchContent.appendChild(team2Img);

        londonDiv.appendChild(matchContent);
    });
});
