import { Client } from "./client.type";
import data from "./clients.json";

// `data` can be the array itself or a module with a `default` property depending on
// how the bundler resolves JSON imports. Normalize to an array to avoid runtime
// "is not iterable" errors during server-side prerendering.
const rawData: unknown = data;
const allClients: Client[] = Array.isArray(rawData)
    ? (rawData as Client[])
    : ((rawData as { default?: Client[] }).default ?? []) as Client[];

for (const client of allClients) {
    client.logo = `/clientShowcase${client.logo}`;
}

const EMPTY_SPACE_PLACEHOLDER = {
    name: "Empty Slot",
    logo: null, // No tiene logo, solo el círculo
    isPlaceholder: true, // Marca para identificarlo en el renderizado
};

// Función para dividir los clientes en grupos de 10 (las "diapositivas" de la grilla 2x5)
// La función debe asegurar que el último chunk tenga 10 elementos
const chunkAndPadClients = (size: number) => {
    const chunks = [];
    let i = 0;
    
    // 1. Chunking normal
    while (i < allClients.length) {
        chunks.push(allClients.slice(i, i + size));
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