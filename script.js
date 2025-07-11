document.addEventListener('DOMContentLoaded', function() {
    const playerCountSelect = document.getElementById('playerCount');
    const playerNamesDiv = document.getElementById('playerNames');
    const nameInputsDiv = document.getElementById('nameInputs');
    const splitTeamsBtn = document.getElementById('splitTeams');
    const resultsSection = document.getElementById('results');
    const resetBtn = document.getElementById('resetBtn');

    // Event listeners
    playerCountSelect.addEventListener('change', handlePlayerCountChange);
    splitTeamsBtn.addEventListener('click', handleSplitTeams);
    resetBtn.addEventListener('click', handleReset);

    // Xử lý thay đổi số lượng người chơi
    function handlePlayerCountChange() {
        const count = parseInt(playerCountSelect.value);
        
        if (count) {
            createNameInputs(count);
            playerNamesDiv.classList.remove('hidden');
            splitTeamsBtn.classList.remove('hidden');
        } else {
            playerNamesDiv.classList.add('hidden');
            splitTeamsBtn.classList.add('hidden');
            resultsSection.classList.add('hidden');
        }
    }

    // Tạo input fields cho tên người chơi
    function createNameInputs(count) {
        nameInputsDiv.innerHTML = '';
        
        for (let i = 1; i <= count; i++) {
            const nameInputDiv = document.createElement('div');
            nameInputDiv.className = 'name-input';
            
            nameInputDiv.innerHTML = `
                <label for="player${i}">Người ${i}:</label>
                <input type="text" id="player${i}" placeholder="Nhập tên người chơi ${i}" required>
            `;
            
            nameInputsDiv.appendChild(nameInputDiv);
        }
    }

    // Xử lý chia team
    function handleSplitTeams() {
        const count = parseInt(playerCountSelect.value);
        const players = [];
        
        // Lấy tên các người chơi
        for (let i = 1; i <= count; i++) {
            const name = document.getElementById(`player${i}`).value.trim();
            if (!name) {
                alert(`Vui lòng nhập tên cho người chơi ${i}`);
                return;
            }
            players.push(name);
        }

        // Kiểm tra tên trùng lặp
        const uniqueNames = new Set(players);
        if (uniqueNames.size !== players.length) {
            alert('Vui lòng không nhập tên trùng lặp!');
            return;
        }

        // Chia team và hiển thị kết quả
        const teams = splitIntoTeams(players);
        displayResults(teams);
    }

    // Chia players thành 2 team ngẫu nhiên với roles
    function splitIntoTeams(players) {
        const shuffledPlayers = shuffleArray(players);
        const teamSize = players.length / 2;
        const playerCount = players.length;
        
        const team1Players = shuffledPlayers.slice(0, teamSize);
        const team2Players = shuffledPlayers.slice(teamSize);
        
        // Assign roles cho mỗi team dựa trên số lượng người chơi
        const team1WithRoles = assignRoles(team1Players, playerCount);
        const team2WithRoles = assignRoles(team2Players, playerCount);
        
        // Random champions cho mỗi team
        const team1Champions = getRandomChampions(10);
        const team2Champions = getRandomChampions(10);
        
        return {
            team1: {
                players: team1WithRoles,
                champions: team1Champions
            },
            team2: {
                players: team2WithRoles,
                champions: team2Champions
            }
        };
    }

    // Assign roles ngẫu nhiên cho một team
    function assignRoles(players, playerCount) {
        let availableRoles;
        
        // Xác định roles dựa trên số lượng người chơi
        if (playerCount === 6) {
            // 6 người: mỗi team 3 người, bỏ jungle
            availableRoles = ["Top", "Mid", "ADC"];
        } else if (playerCount === 8) {
            // 8 người: mỗi team 4 người, bỏ support
            availableRoles = ["Top", "Jungle", "Mid", "ADC"];
        } else {
            // 10 người: mỗi team 5 người, đủ tất cả roles
            availableRoles = ["Top", "Jungle", "Mid", "ADC", "Support"];
        }
        
        const shuffledRoles = shuffleArray(availableRoles);
        return players.map((player, index) => ({
            name: player,
            role: shuffledRoles[index % shuffledRoles.length]
        }));
    }

    // Hiển thị kết quả
    function displayResults(teams) {
        // Hiển thị thông tin format game
        const playerCount = parseInt(playerCountSelect.value);
        let formatInfo = '';
        if (playerCount === 6) {
            formatInfo = '🎮 Format: 3v3 (không có Jungle)';
        } else if (playerCount === 8) {
            formatInfo = '🎮 Format: 4v4 (không có Support)';
        } else {
            formatInfo = '🎮 Format: 5v5 (đầy đủ vị trí)';
        }
        
        const resultsH2 = resultsSection.querySelector('h2');
        resultsH2.innerHTML = `Kết quả chia team<br><small style="font-size: 0.8em; color: #c9aa71;">${formatInfo}</small>`;
        
        // Hiển thị team 1
        const team1PlayersDiv = document.getElementById('team1Players');
        team1PlayersDiv.innerHTML = '';
        teams.team1.players.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'player';
            playerDiv.innerHTML = `
                <div class="player-name">${player.name}</div>
                <div class="player-role">${getRoleIcon(player.role)} ${player.role}</div>
            `;
            team1PlayersDiv.appendChild(playerDiv);
        });

        // Hiển thị champions team 1
        const team1ChampionsDiv = document.getElementById('team1Champions');
        team1ChampionsDiv.innerHTML = '';
        teams.team1.champions.forEach(champion => {
            const championDiv = document.createElement('div');
            championDiv.className = 'champion';
            championDiv.textContent = champion;
            team1ChampionsDiv.appendChild(championDiv);
        });

        // Hiển thị team 2
        const team2PlayersDiv = document.getElementById('team2Players');
        team2PlayersDiv.innerHTML = '';
        teams.team2.players.forEach(player => {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'player';
            playerDiv.innerHTML = `
                <div class="player-name">${player.name}</div>
                <div class="player-role">${getRoleIcon(player.role)} ${player.role}</div>
            `;
            team2PlayersDiv.appendChild(playerDiv);
        });

        // Hiển thị champions team 2
        const team2ChampionsDiv = document.getElementById('team2Champions');
        team2ChampionsDiv.innerHTML = '';
        teams.team2.champions.forEach(champion => {
            const championDiv = document.createElement('div');
            championDiv.className = 'champion';
            championDiv.textContent = champion;
            team2ChampionsDiv.appendChild(championDiv);
        });

        // Hiển thị kết quả
        resultsSection.classList.remove('hidden');
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Lấy icon cho role
    function getRoleIcon(role) {
        const icons = {
            'Top': '⚔️',
            'Jungle': '🌲',
            'Mid': '⭐',
            'ADC': '🏹',
            'Support': '🛡️'
        };
        return icons[role] || '❓';
    }

    // Reset về trạng thái ban đầu
    function handleReset() {
        playerCountSelect.value = '';
        playerNamesDiv.classList.add('hidden');
        splitTeamsBtn.classList.add('hidden');
        resultsSection.classList.add('hidden');
        nameInputsDiv.innerHTML = '';
    }

    // Animation hiệu ứng khi load trang
    function addLoadAnimation() {
        const container = document.querySelector('.container');
        container.style.opacity = '0';
        container.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            container.style.transition = 'all 0.8s ease';
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }, 100);
    }

    // Khởi tạo animation
    addLoadAnimation();
}); 