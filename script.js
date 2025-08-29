// counting hearts

const hearts = document.getElementsByClassName('heart-icon');
let heartCount = 0;

for (const heart of hearts) {
    heart.addEventListener('click', function (e) {
        e.preventDefault();
        heartCount++;
        document.getElementById('main-heart').innerText = heartCount;
    });
}


// clear history

const clearHistory = document.getElementById('clear-btn')
    .addEventListener('click', function(e){
        e.preventDefault();

        const clearedHistory = document.getElementsByClassName('history-cards')[0];
        clearedHistory.innerHTML = '';
    })




// call National Emergency

const calls1 = document.getElementById('National Emergency')
    .addEventListener('click', function (e) {
        e.preventDefault();

        let coins = parseInt(document.getElementById('coins').innerText);

        if (coins >= 20) {
            coins = coins - 20;
            document.getElementById('coins').innerText = coins;

            alert('📞 Calling National Emergency Service 999...');


            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


            const nationalEmergencyHistory = document.createElement('div');
            nationalEmergencyHistory.classList.add('history-card');

            nationalEmergencyHistory.innerHTML = `
            <div class="history-info">
                <div class="history-text">
                    <p class="service-name">National Emergency Number</p>
                    <p class="service-number">999</p>
                </div>
                <p class="history-time">${time}</p>
            </div>
            `;

            // Append to the history container
            const historyContainer = document.querySelector('.history-cards');
            historyContainer.appendChild(nationalEmergencyHistory);


        }
        else {
            alert('not enoigh coins');
        }
    })



// call Police Helpline Number


const calls2 = document.getElementById('Police Helpline Number')
    .addEventListener('click', function (e) {
        e.preventDefault();

        let coins = parseInt(document.getElementById('coins').innerText);

        if (coins >= 20) {
            coins = coins - 20;
            document.getElementById('coins').innerText = coins;

            alert('📞 Calling Police Helpline Number 999...');


            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


            const nationalEmergencyHistory = document.createElement('div');
            nationalEmergencyHistory.classList.add('history-card');

            nationalEmergencyHistory.innerHTML = `
            <div class="history-info">
                <div class="history-text">
                    <p class="service-name">Police Helpline Number</p>
                    <p class="service-number">999</p>
                </div>
                <p class="history-time">${time}</p>
            </div>
            `;

            // Append to the history container
            const historyContainer = document.querySelector('.history-cards');
            historyContainer.appendChild(nationalEmergencyHistory);


        }
        else {
            alert('not enoigh coins');
        }
    })


// call Fire Service Number

const calls3 = document.getElementById('Fire Service Number')
    .addEventListener('click', function (e) {
        e.preventDefault();

        let coins = parseInt(document.getElementById('coins').innerText);

        if (coins >= 20) {
            coins = coins - 20;
            document.getElementById('coins').innerText = coins;

            alert('📞 Calling Fire Service Number 999...');


            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


            const nationalEmergencyHistory = document.createElement('div');
            nationalEmergencyHistory.classList.add('history-card');

            nationalEmergencyHistory.innerHTML = `
            <div class="history-info">
                <div class="history-text">
                    <p class="service-name">Fire Service Number</p>
                    <p class="service-number">999</p>
                </div>
                <p class="history-time">${time}</p>
            </div>
            `;

            // Append to the history container
            const historyContainer = document.querySelector('.history-cards');
            historyContainer.appendChild(nationalEmergencyHistory);


        }
        else {
            alert('not enoigh coins');
        }
    })


// call Ambulance Service

const calls4 = document.getElementById('Ambulance Service')
    .addEventListener('click', function (e) {
        e.preventDefault();

        let coins = parseInt(document.getElementById('coins').innerText);

        if (coins >= 20) {
            coins = coins - 20;
            document.getElementById('coins').innerText = coins;

            alert('📞 Calling Ambulance Service 1994-999999...');


            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


            const nationalEmergencyHistory = document.createElement('div');
            nationalEmergencyHistory.classList.add('history-card');

            nationalEmergencyHistory.innerHTML = `
            <div class="history-info">
                <div class="history-text">
                    <p class="service-name">Ambulance Service</p>
                    <p class="service-number">1994-999999</p>
                </div>
                <p class="history-time">${time}</p>
            </div>
            `;

            // Append to the history container
            const historyContainer = document.querySelector('.history-cards');
            historyContainer.appendChild(nationalEmergencyHistory);


        }
        else {
            alert('not enoigh coins');
        }
    })


// call Women & Child Helpline

const calls5 = document.getElementById('Women & Child Helpline')
    .addEventListener('click', function (e) {
        e.preventDefault();

        let coins = parseInt(document.getElementById('coins').innerText);

        if (coins >= 20) {
            coins = coins - 20;
            document.getElementById('coins').innerText = coins;

            alert('📞 Calling Women & Child Helpline 109...');


            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


            const nationalEmergencyHistory = document.createElement('div');
            nationalEmergencyHistory.classList.add('history-card');

            nationalEmergencyHistory.innerHTML = `
            <div class="history-info">
                <div class="history-text">
                    <p class="service-name">Women & Child Helpline</p>
                    <p class="service-number">109</p>
                </div>
                <p class="history-time">${time}</p>
            </div>
            `;

            // Append to the history container
            const historyContainer = document.querySelector('.history-cards');
            historyContainer.appendChild(nationalEmergencyHistory);


        }
        else {
            alert('not enoigh coins');
        }
    })


// call Anti-Corruption Helpline

const calls6 = document.getElementById('Anti-Corruption Helpline')
    .addEventListener('click', function (e) {
        e.preventDefault();

        let coins = parseInt(document.getElementById('coins').innerText);

        if (coins >= 20) {
            coins = coins - 20;
            document.getElementById('coins').innerText = coins;

            alert('📞 Calling Anti-Corruption Helpline 106...');


            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


            const nationalEmergencyHistory = document.createElement('div');
            nationalEmergencyHistory.classList.add('history-card');

            nationalEmergencyHistory.innerHTML = `
            <div class="history-info">
                <div class="history-text">
                    <p class="service-name">Anti-Corruption Helpline</p>
                    <p class="service-number">106</p>
                </div>
                <p class="history-time">${time}</p>
            </div>
            `;

            // Append to the history container
            const historyContainer = document.querySelector('.history-cards');
            historyContainer.appendChild(nationalEmergencyHistory);


        }
        else {
            alert('not enoigh coins');
        }
    })




// call Electricity Helpline

const calls7 = document.getElementById('Electricity Helpline')
    .addEventListener('click', function (e) {
        e.preventDefault();

        let coins = parseInt(document.getElementById('coins').innerText);

        if (coins >= 20) {
            coins = coins - 20;
            document.getElementById('coins').innerText = coins;

            alert('📞 Calling Electricity Helpline 16216...');


            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


            const nationalEmergencyHistory = document.createElement('div');
            nationalEmergencyHistory.classList.add('history-card');

            nationalEmergencyHistory.innerHTML = `
            <div class="history-info">
                <div class="history-text">
                    <p class="service-name">Electricity Helpline</p>
                    <p class="service-number">16216</p>
                </div>
                <p class="history-time">${time}</p>
            </div>
            `;

            // Append to the history container
            const historyContainer = document.querySelector('.history-cards');
            historyContainer.appendChild(nationalEmergencyHistory);


        }
        else {
            alert('not enoigh coins');
        }
    })


//  call Brac Helpline

const calls8 = document.getElementById('Brac Helpline')
    .addEventListener('click', function (e) {
        e.preventDefault();

        let coins = parseInt(document.getElementById('coins').innerText);

        if (coins >= 20) {
            coins = coins - 20;
            document.getElementById('coins').innerText = coins;

            alert('📞 Calling Brac Helpline 16445...');


            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


            const nationalEmergencyHistory = document.createElement('div');
            nationalEmergencyHistory.classList.add('history-card');

            nationalEmergencyHistory.innerHTML = `
            <div class="history-info">
                <div class="history-text">
                    <p class="service-name">Brac Helpline</p>
                    <p class="service-number">16445</p>
                </div>
                <p class="history-time">${time}</p>
            </div>
            `;

            // Append to the history container
            const historyContainer = document.querySelector('.history-cards');
            historyContainer.appendChild(nationalEmergencyHistory);


        }
        else {
            alert('not enoigh coins');
        }
    })

//  call Bangladesh Railway Helpline

const calls9 = document.getElementById('Bangladesh Railway Helpline')
    .addEventListener('click', function (e) {
        e.preventDefault();

        let coins = parseInt(document.getElementById('coins').innerText);

        if (coins >= 20) {
            coins = coins - 20;
            document.getElementById('coins').innerText = coins;

            alert('📞 Calling Bangladesh Railway Helpline 163...');


            const now = new Date();
            const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


            const nationalEmergencyHistory = document.createElement('div');
            nationalEmergencyHistory.classList.add('history-card');

            nationalEmergencyHistory.innerHTML = `
            <div class="history-info">
                <div class="history-text">
                    <p class="service-name">Bangladesh Railway Helpline</p>
                    <p class="service-number">163</p>
                </div>
                <p class="history-time">${time}</p>
            </div>
            `;

            // Append to the history container
            const historyContainer = document.querySelector('.history-cards');
            historyContainer.appendChild(nationalEmergencyHistory);


        }
        else {
            alert('not enoigh coins');
        }
    })


// copy Count 

const copys = document.getElementsByClassName('btn-left');
let copyCount = 0;

for (const copy of copys) {
    copy.addEventListener('click', function (e) {
        e.preventDefault();

        const card = copy.closest('.card');

        const number = card.querySelector('h2').innerText;

        navigator.clipboard.writeText(number);

        copyCount++;
        document.getElementById('main-copy-count').innerText = copyCount;

    });
}