export const parquesService = async() => {
    const response = await fetch('https://pacopul.github.io/json/pn/parques.json');
    if(!response.ok)throw new Error('Error al obtener los parques');

    const data = await response.json();
    return data.parques;
    
};