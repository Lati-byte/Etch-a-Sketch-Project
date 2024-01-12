const container = document.getElementById('container');

        for (let i = 0; i < 16 * 16; i++) {
            const div = document.createElement('div');
            div.className = 'grid-item';
            container.appendChild(div);
            div.className = 'grid-item';
            div.addEventListener('mouseover', function() {
                this.style.backgroundColor = 'blue';
            });
            container.appendChild(div);
        }