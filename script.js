function convertToSpeech()
{
    const inputText = document.getElementById('inputText').value;
    const languageSelect = document.getElementById('language-select');
    const selectedLanguage = languageSelect.options[languageSelect.selectedIndex].value;


    const utterance = new SpeechSynthesisUtterance(inputText);
    utterance.lang = selectedLanguage;
    if('speechSynthesis' in window)
    {
        const synthesis = window.speechSynthesis;
        synthesis.speak(utterance);
    }
    else{
        alert('Text-to-speech is not supported in your browser.');
    }
}