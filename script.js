const PASSWORD = 'mremri';
let currentMode = 'heart'; // 'heart' or 'star'
let isTransitioning = false;

// Random facts
const facts = [
    "твой смех и твой голос останавливают время вокруг меня и каждый раз заставляют моё сердце пропустить удар",
    "каждый «котёночек», каждое нежное прозвище, которое ты мне даёшь, — как сокровище, которое я хочу хранить вечно",
    "у тебя удивительная способность делать даже самые простые моменты волшебными просто своим присутствием",
    "твоя доброта к незнакомым людям всегда восхищает меня и заставляет влюбляться в тебя ещё сильнее",
    "когда я думаю о тебе, даже самые тяжёлые дни становятся мягче",
    "ты помнишь каждую мелочь о вещах, которые важны для меня, даже когда я сам о них забываю",
    "твои объятия — как возвращение домой после долгого путешествия по вселенной",
    "твой способ заботы — как язык, который понимает только моё сердце",
    "ты единственный человек, который одновременно заставляет меня чувствовать полное спокойствие и дикую живость",
    "каждый раз, когда мы пишем что-то вместе, это кажется не столько словами, сколько переплетением кусочков наших душ",
    "ты заставляешь меня ощущать, что дом — это не место, а человек, и этот человек — ты",
    "даже на расстоянии тебе всегда удаётся заставить меня чувствовать себя рядом с тобой",
    "я никогда не был столь самим собой, как когда я с тобой",
    "иногда я ловлю себя на том, что улыбаюсь без причины, и понимаю, что это из-за тебя — потому что мои мысли вернулись к твоему смеху, твоим маленьким словам или просто к осознанию того, как мне повезло иметь тебя",
    "мне нравится, как мы можем взять самые простые вещи — тихий звонок, глупый звук, даже просто чтение рядом — и превратить их во что-то незабываемое, словно всё становится волшебным в момент, когда это «мы»",
    "бывают моменты, когда я скучаю по тебе даже во время разговора, потому что ни слов, ни времени никогда не хватает, когда моё сердце хочет быть ближе к твоему",
    "быть с тобой — как открыть новые цвета, о которых я не знал: оттенки уюта, волнения и нежности, которые только ты мог внести в мою жизнь",
    "даже когда мы ссоримся или не понимаем друг друга, ни одна часть меня не сомневается в том, как много ты для меня значишь — потому что любовь не исчезает в трудные моменты, она лишь доказывает свою силу",
    "я люблю, что наша любовь многослойна — игривая с нелепыми словами и плюшевыми игрушками, глубокая, когда мы делимся страхами, и волшебная, когда мы просто существуем вместе без объяснений",
    "иногда я перечитываю наш дневник и понимаю, что каждая страница — доказательство того, что между нами происходит нечто редкое и необыкновенное, то, что стоит беречь всем сердцем",
    "когда ты говоришь о своём прошлом, о надеждах или даже о тревогах, я чувствую честь — потому что это значит, что я держу части тебя, которые не всем открываются",
    "с тобой расстояние больше не пугает меня — сколько бы ни было миль, твоя любовь находит меня, словно солнечный свет достигает самых холодных уголков",
    "иногда я вспоминаю наши самые первые разговоры — такие неуклюжие и неуверенные — и меня поражает, как те первые искорки превратились в бесконечное тепло, которое у нас сейчас",
    "с тобой любая мечта кажется возможной — не потому что жизнь стала легче, а потому что твоя любовь заставляет меня верить в себя больше, чем когда-либо",
    "правда в том, что ты стал самой прекрасной частью моих ежедневных ритуалов: причиной, по которой я проверяю телефон, причиной моей улыбки без повода, причиной, по которой моё сердце полно перед сном",
    "даже мысль о том, чтобы держать тебя за руку, успокаивает бури внутри меня — это самый простой жест, но он ощущается как обещание навсегда",
    "мне нравится, что ты не только слушаешь мои слова, но и слышишь мои молчания — и как-то всегда понимаешь, что я имею в виду, даже когда я сам не могу объяснить",
    "ты — всё, о чём я не знал, что мне нужно: идеальный баланс нежности, силы и магии, который делает мой мир целым",
    "дело не только в том, что ты совершенен — ты совершен для меня. каждая часть тебя вписывается в пустоты моего сердца так, будто ты всегда был предназначен быть там",
    "у тебя самый прекрасный ум, и я мог бы слушать твои мысли и мечты вечно",
    "каждый день с тобой — как начало чего-то прекрасного и бесконечного"
];

function toggleMode() {
    if (isTransitioning) return;
    
    isTransitioning = true;
    const moonToggle = document.getElementById('moonToggle');
    
    // Create burst effect
    createBurstEffect();
    
    // Toggle mode
    currentMode = currentMode === 'heart' ? 'star' : 'heart';
    
    // Update moon button
    moonToggle.textContent = currentMode === 'heart' ? '🌙' : '⭐';
    
   // Apply theme
setTimeout(() => {
    document.body.setAttribute('data-theme', currentMode);
    
 // Toggle video background blur - force immediate change
const videoBackground = document.querySelector('.video-background');
if (videoBackground) {
    if (currentMode === 'star') {
        // Completely override all CSS with direct style
        videoBackground.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            min-width: 100%;
            min-height: 100%;
            transform: translate(-50%, -50%);
            filter: brightness(0.8);
            z-index: 1;
            transition: filter 0.8s ease;
        `;
    } else {
        // Reset to blurred state
        videoBackground.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            min-width: 100%;
            min-height: 100%;
            transform: translate(-50%, -50%);
            filter: blur(4px) brightness(0.6);
            z-index: 1;
            transition: filter 0.8s ease;
        `;
    }
}
    
    // Clear existing particles and recreate appropriate ones
    clearParticles();
    setTimeout(() => {
        if (currentMode === 'star') {
            createStarfield();
            createShootingStars();
        } else {
            createHearts();
            createParticles();
        }
        isTransitioning = false;
    }, 500);
}, 400);
}

function createBurstEffect() {
    const burstOverlay = document.getElementById('burstOverlay');
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    burstOverlay.style.opacity = '1';
    
    // Create burst particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'burst-particle';
        
        const size = Math.random() * 8 + 4;
        const randomX = (Math.random() - 0.5) * 800;
        const randomY = (Math.random() - 0.5) * 800;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${centerX}px;
            top: ${centerY}px;
            background: ${currentMode === 'heart' ? '#ff69b4' : '#6a0dad'};
            --random-x: ${randomX}px;
            --random-y: ${randomY}px;
            animation: burstParticle 1s ease-out forwards;
            border-radius: 50%;
            position: absolute;
            box-shadow: 0 0 10px ${currentMode === 'heart' ? '#ff69b4' : '#6a0dad'};
        `;
        
        burstOverlay.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
    
    // Create stardust swirl effect FUCKING BROKE IT AGAIN I CANT
    setTimeout(() => {
        for (let i = 0; i < 20; i++) {
            const star = document.createElement('div');
            star.textContent = currentMode === 'heart' ? '💫' : '✨';
            
            const randomX = Math.random() * window.innerWidth;
            const randomY = Math.random() * window.innerHeight;
            
            star.style.cssText = `
                position: absolute;
                left: ${randomX}px;
                top: ${randomY}px;
                font-size: ${Math.random() * 20 + 10}px;
                color: ${currentMode === 'heart' ? '#ff69b4' : '#6a0dad'};
                animation: stardustSwirl 1.5s ease-out forwards;
                text-shadow: 0 0 10px ${currentMode === 'heart' ? '#ff69b4' : '#6a0dad'};
                pointer-events: none;
            `;
            
            burstOverlay.appendChild(star);
            
            setTimeout(() => {
                star.remove();
            }, 1500);
        }
    }, 300);
    
    setTimeout(() => {
        burstOverlay.style.opacity = '0';
    }, 1500);
}

function clearParticles() {
    // Clear hearts
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach(heart => heart.remove());
    
    // Clear particles
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => particle.remove());
    
    // Clear stars
    const stars = document.querySelectorAll('.star-particle');
    stars.forEach(star => star.remove());
    
    // Clear shooting stars IN THEORY?
    const shootingStars = document.querySelectorAll('.shooting-star');
    shootingStars.forEach(star => star.remove());
}

function createStarfield() {
    const particlesContainer = document.querySelector('.bg-particles');
    
    function createStar() {
        const star = document.createElement('div');
        star.className = 'star-particle';
        
        const starTypes = ['⭐', '✨', '🌟', '💫', '⭐'];
        star.innerHTML = starTypes[Math.floor(Math.random() * starTypes.length)];
        
        star.style.left = Math.random() * 100 + '%';
        star.style.fontSize = (Math.random() * 15 + 10) + 'px';
        star.style.animationDuration = (Math.random() * 6 + 8) + 's';
        star.style.animationDelay = Math.random() * 4 + 's';
        
        particlesContainer.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 12000);
    }

    // Create stars periodically
    const starInterval = setInterval(() => {
        if (currentMode === 'star') {
            createStar();
        } else {
            clearInterval(starInterval);
        }
    }, 1200);
    
    // Create initial stars
    for(let i = 0; i < 5; i++) {
        setTimeout(createStar, i * 300);
    }
}

function createShootingStars() {
    function createShootingStar() {
        const star = document.createElement('div');
        star.className = 'shooting-star';
        
        star.style.left = Math.random() * 50 + '%';
        star.style.top = Math.random() * 50 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        
        document.querySelector('.bg-particles').appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 3000);
    }

    // Create shooting stars occasionally
    const shootingInterval = setInterval(() => {
        if (currentMode === 'star' && Math.random() < 0.3) {
            createShootingStar();
        } else if (currentMode !== 'star') {
            clearInterval(shootingInterval);
        }
    }, 4000);
}

function checkPassword() {
    const input = document.getElementById('passwordInput');
    const errorMsg = document.getElementById('errorMessage');
    
    if (input.value.toLowerCase() === PASSWORD.toLowerCase()) {
        // Correct password
        document.getElementById('passwordScreen').style.transform = 'translateY(-100%)';
        document.getElementById('passwordScreen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('passwordScreen').style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
            setTimeout(() => {
                document.getElementById('mainContent').style.opacity = '1';
            }, 100);
        }, 800);
        createHearts();
        createParticles();
    } else {
        // Wrong password
        errorMsg.classList.add('show');
        input.style.animation = 'shake 0.6s ease-in-out';
        input.style.borderColor = '#ff4444';
        setTimeout(() => {
            errorMsg.classList.remove('show');
            input.style.animation = '';
            input.style.borderColor = 'var(--primary-color)';
        }, 3000);
    }
}

// Allow Enter key to submit password
document.getElementById('passwordInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});

function openNotionDiary() {
    // huehuehue
    window.open('https://www.notion.so/Our-Little-World-1e870844216380aeab96c66cd335819e', '_blank');
}

function sendVirtualHug() {
    const hugOverlay = document.getElementById('hugOverlay');
    const hugMessage = document.getElementById('hugMessage');
    const hugProgressBar = document.getElementById('hugProgressBar');
    
    // Show the hug overlay
    hugOverlay.classList.add('active');
    hugMessage.textContent = 'Отправляю виртуальные объятия...';
    hugProgressBar.style.width = '0%';
    
    // Animate progress bar
    let progress = 0;
    const progressInterval = setInterval(() => {
        progress += 2;
        hugProgressBar.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(progressInterval);
            
            // Change message and stop pulsing
            hugMessage.textContent = currentMode === 'heart' ? 'Объятие отправлено! 💕' : 'Космическое объятие отправлено! ✨';
            hugOverlay.style.animation = 'none';
            hugOverlay.style.background = currentMode === 'heart' ? 
                'rgba(255, 105, 180, 0.3)' : 'rgba(106, 13, 173, 0.3)';
            
            // Fade out after 2 seconds
            setTimeout(() => {
                hugOverlay.classList.add('hug-complete');
                setTimeout(() => {
                    hugOverlay.classList.remove('active', 'hug-complete');
                    hugOverlay.style.animation = '';
                    hugOverlay.style.background = '';
                }, 1000);
            }, 2000);
        }
    }, 100);
}

function showRandomFact() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('factText').textContent = randomFact;
    document.getElementById('factModal').style.display = 'flex';
}

function closeFact() {
    document.getElementById('factModal').style.display = 'none';
}

function createHearts() {
    const heartsContainer = document.querySelector('.hearts');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '💕';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 7) + 's';
        heart.style.fontSize = (Math.random() * 15 + 20) + 'px';
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }

    // Create hearts more frequently
    const heartInterval = setInterval(() => {
        if (currentMode === 'heart') {
            createHeart();
        } else {
            clearInterval(heartInterval);
        }
    }, 1500);
    
    // Create initial hearts immediately
    for(let i = 0; i < 3; i++) {
        setTimeout(createHeart, i * 500);
    }
}

function createParticles() {
    const particlesContainer = document.querySelector('.bg-particles');
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = particle.style.height = (Math.random() * 4 + 2) + 'px';
        particle.style.animationDuration = (Math.random() * 6 + 6) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particlesContainer.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, 10000);
    }

    // Create particles periodically
    const particleInterval = setInterval(() => {
        if (currentMode === 'heart') {
            createParticle();
        } else {
            clearInterval(particleInterval);
        }
    }, 1000);
}

// Close modal when clicking outside
document.getElementById('factModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeFact();
    }
});

// Initialize particles and hearts on load
window.addEventListener('load', () => {
    createParticles();
    createHearts();
});