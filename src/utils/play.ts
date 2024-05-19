export const play = (text: string, path: string) => {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        // Get the list of available voices
        const voices = window.speechSynthesis.getVoices();
        let voiceLanguage = '';
        if (path === '/kyrgyz') {
            voiceLanguage = 'Google русский';
        } else if (path === '/english') {
            voiceLanguage = 'Google UK English Female';
        } else if (path === '/korean') {
            voiceLanguage = 'Юна';
        }
        
        // Find the voice object with the desired name

        //Google UK English Female
        const selectedVoice = voices.find(voice => voice.name === voiceLanguage);
        
        if (selectedVoice) {
            utterance.voice = selectedVoice;
        } else {
            console.error('Desired voice not found');
        }

        window.speechSynthesis.speak(utterance);
    } else {
        console.error('Speech synthesis not supported');
    }
};
