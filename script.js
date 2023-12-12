document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('http://localhost:3000/');
        const data = await response.json();

        document.getElementById('totalMembers').innerText = data.totalMembers;
        document.getElementById('totalBots').innerText = data.totalBots;
        document.getElementById('activeMembers').innerText = data.totalActive;
        document.getElementById('inactiveMembers').innerText = data.totalInactive;

    } catch (error) {
        console.error(error);
        alert('Error fetching data. Please try again later.');
    }
});
