function updateClock() {
            const now = new Date();
            
            // Format time
            const timeString = now.toLocaleTimeString('en-US', {
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
            
            // Format date
            const dateString = now.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Update DOM
            document.getElementById('digital-time').textContent = timeString;
            document.getElementById('digital-date').textContent = dateString;
            
            // Update greeting based on time
            const hour = now.getHours();
            let greeting = '';
            if (hour < 12) {
                greeting = 'Good Morning! ☀️';
            } else if (hour < 17) {
                greeting = 'Good Afternoon! 🌤️';
            } else {
                greeting = 'Good Evening! 🌙';
            }
            
            document.getElementById('greeting').textContent = greeting;
        }

        function toggleDarkMode() {
            const body = document.body;
            const themeIcon = document.getElementById('theme-icon');
            
            body.classList.toggle('dark');
            
            // Update icon
            if (body.classList.contains('dark')) {
                themeIcon.textContent = '☀️';
                localStorage.setItem('darkMode', 'true');
            } else {
                themeIcon.textContent = '🌙';
                localStorage.setItem('darkMode', 'false');
            }
        }

        // Initialize
        function init() {
            // Check for saved dark mode preference
            const savedDarkMode = localStorage.getItem('darkMode');
            if (savedDarkMode === 'true') {
                document.body.classList.add('dark');
                document.getElementById('theme-icon').textContent = '☀️';
            }
            
            // Set up event listeners
            document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);
            
            // Update clock immediately and then every second
            updateClock();
            setInterval(updateClock, 1000);
        }

        // Start when page loads
        document.addEventListener('DOMContentLoaded', init);