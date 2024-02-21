Const fetchDigimonData = async () => {
    try {
        const response = await fetch('https://digimon-api.vercel.app/api/digimon');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Digimon data:', error);
        return [];
    }
}

const organizeEvolutionTree = (digimonData) => {
    const evolutionTree = {};

    // Group Digimon data by their names
    digimonData.forEach(digimon => {
        const name = digimon.name.toLowerCase();
        evolutionTree[name] = digimon;
    });

    return evolutionTree;
}

const displayEvolution = (digimon, evolutionTree) => {
    const treeContainer = document.getElementById('evolution-tree');
    if (!treeContainer) {
        console.error('Tree container not found in the HTML.');
        return;
    }

    // Clear previous tree
    treeContainer.innerHTML = '';

    const ul = document.createElement('ul');
    treeContainer.appendChild(ul);

    let currentDigimon = digimon;
    while (currentDigimon) {
        const li = document.createElement('li');
        li.textContent = currentDigimon.name;

        ul.appendChild(li);

        // Check if the current Digimon has an evolution
        if (currentDigimon.evolves_to && currentDigimon.evolves_to.length > 0) {
            const evolvesTo = currentDigimon.evolves_to[0];
            const nextDigimon = evolutionTree[evolvesTo.name.toLowerCase()];
            currentDigimon = nextDigimon;
        } else {
            // End of evolution line
            break;
        }
    }
}

const init = async () => {
    const digimonData = await fetchDigimonData();
    if (!digimonData || digimonData.length === 0) {
        console.error('No Digimon data fetched.');
        return;
    }

    const evolutionTree = organizeEvolutionTree(digimonData);

    const form = document.getElementById('digimon-form');
    if (!form) {
        console.error('Digimon form not found in the HTML.');
        return;
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const input = document.getElementById('digimon-input');
        if (!input || !input.value) {
            console.error('Digimon input not found or empty.');
            return;
        }

        const digimonName = input.value.toLowerCase();
        const digimon = evolutionTree[digimonName];
        if (!digimon) {
            console.error(`Digimon "${digimonName}" not found.`);
            return;
        }

        displayEvolution(digimon, evolutionTree);
    });
}

init();