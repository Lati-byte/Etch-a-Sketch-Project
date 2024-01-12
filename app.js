const container = document.getElementById('container');
        const newGridButton = document.getElementById('newGridButton');

        function createGrid(size) {
            // Clear the container
            while (container.firstChild) {
                container.firstChild.remove();
            }

            // Adjust the size of the container
            container.style.width = '960px';
            container.style.height = '960px';

            // Create the new grid
            for (let i = 0; i < size * size; i++) {
                const div = document.createElement('div');
                div.className = 'grid-item';
                div.style.width = `${960 / size}px`;
                div.style.height = `${960 / size}px`;
                div.dataset.count = 0;
                div.addEventListener('mouseover', function() {
                    let count = parseInt(this.dataset.count);
                    if (count < 10) {
                        this.style.backgroundColor = `rgb(${Math.floor((10 - count) * Math.random() * 25.5)}, ${Math.floor((10 - count) * Math.random() * 25.5)}, ${Math.floor((10 - count) * Math.random() * 25.5)})`;
                        this.dataset.count = count + 1;
                    }
                });
                container.appendChild(div);
            }
        }

        newGridButton.addEventListener('click', function() {
            let size = prompt('Enter the number of squares per side for the new grid (max 100):');
            size = Math.min(Math.max(parseInt(size), 1), 100);  // Ensure size is between 1 and 100
            createGrid(size);
        });

        // Create the initial 16x16 grid
        createGrid(16);