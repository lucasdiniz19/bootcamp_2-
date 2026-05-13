
export async function buscarCotacao() {
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
        const data = await response.json();
        return parseFloat(data.USDBRL.bid);
    } catch (error) {
        console.error("Erro na API externa:", error);
        return "Indisponível";
    }
}