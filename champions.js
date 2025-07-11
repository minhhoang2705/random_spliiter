// Danh sách đầy đủ tướng Liên Minh Huyền Thoại (170 tướng - cập nhật 2025)
const champions = [
    "Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Ambessa", "Ammu", "Anivia", 
    "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Aurora", "Azir", "Bard", 
    "Bel'Veth", "Blitzcrank", "Brand", "Braum", "Briar", "Caitlyn", "Camille", 
    "Cassiopeia", "Cho'Gath", "Corki", "Darius", "Diana", "Dr. Mundo", "Draven", 
    "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", 
    "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", 
    "Hecarim", "Heimerdinger", "Hwei", "Illaoi", "Irelia", "Ivern", "Janna", 
    "Jarvan IV", "Jax", "Jayce", "Jhin", "Jinx", "K'Sante", "Kai'Sa", 
    "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", 
    "Kennen", "Kha'Zix", "Kindred", "Kled", "Kog'Maw", "LeBlanc", "Lee Sin", 
    "Leona", "Lillia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", 
    "Malzahar", "Maokai", "Master Yi", "Mel", "Milio", "Miss Fortune", 
    "Mordekaiser", "Morgana", "Naafiri", "Nami", "Nasus", "Nautilus", "Neeko", 
    "Nidalee", "Nilah", "Nocturne", "Nunu & Willump", "Olaf", "Orianna", 
    "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", 
    "Rek'Sai", "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven", "Rumble", 
    "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", 
    "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Smolder", "Sona", 
    "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", 
    "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", 
    "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", 
    "Vel'Koz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", 
    "Warwick", "Wukong", "Xayah", "Xerath", "Xin Zhao", "Yasuo", "Yone", 
    "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"
];

// Các vị trí trong game
const roles = ["Top", "Jungle", "Mid", "ADC", "Support"];

// Hàm shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Hàm lấy random tướng không trùng lặp
function getRandomChampions(count) {
    const shuffled = shuffleArray(champions);
    return shuffled.slice(0, count);
} 