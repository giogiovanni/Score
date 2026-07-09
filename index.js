let homePoints = 0, awayPoints = 0;
        function changeScore(team, amount) {
            if (team === 'home') { 
              homePoints = Math.max(0, homePoints + amount); 
              document.getElementById('home-score').innerText = String(homePoints).padStart(2, '0');
              }
            else { awayPoints = Math.max(0, awayPoints + amount); 
            document.getElementById('away-score').innerText = String(awayPoints).padStart(2, '0'); }
        }
        function resetScoreboard() { 
              homePoints = 0; 
              awayPoints = 0; 
              document.getElementById('home-score').innerText = "00"; 
              document.getElementById('away-score').innerText = "00"; }
    