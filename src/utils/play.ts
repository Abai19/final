export const play = (text: string) => {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Get the list of available voices
        const voices = window.speechSynthesis.getVoices();
        // Find the voice object with the desired name
        const selectedVoice = voices.find(voice => voice.name === 'Google UK English Female');
        
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        } else {
            console.error('Desired voice not found');
        }

        window.speechSynthesis.speak(utterance);
    } else {
        console.error('Speech synthesis not supported');
    }
}
