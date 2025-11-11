import * as allClients from "./clients.json"
import { Client } from "./client.type";

for (const client of allClients.default) {
    client.logo = `/clientShowcase${client.logo}`;
}

const EMPTY_SPACE_PLACEHOLDER = {
    name: "Empty Slot",
    logo: null, // No tiene logo, solo el círculo
    isPlaceholder: true, // Marca para identificarlo en el renderizado
};

// Función para dividir los clientes en grupos de 10 (las "diapositivas" de la grilla 2x5)
// La función debe asegurar que el último chunk tenga 10 elementos
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const chunkAndPadClients = (size: number) => {
    const chunks = [];
    let i = 0;
    
    // 1. Chunking normal
    while (i < allClients.default.length) {
        chunks.push(allClients.default.slice(i, i + size));
        i += size;
    }

    // 2. Rellenar (Padding) el último chunk si no está lleno
    const lastChunk = chunks[chunks.length - 1];
    if (lastChunk && lastChunk.length < size) {
        const remaining = size - lastChunk.length;
        for (let j = 0; j < remaining; j++) {
            lastChunk.push(EMPTY_SPACE_PLACEHOLDER);
        }
    }

    return chunks;
};

// Genera las diapositivas de la grilla, cada una con un máximo de 10 logos
// export const clientSlides = chunkAndPadClients(allClients.default);

export default chunkAndPadClients;