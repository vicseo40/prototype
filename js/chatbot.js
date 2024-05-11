document.addEventListener('DOMContentLoaded', function() {
    const helpButton = document.getElementById('askForHelp');
    if (helpButton) {
        helpButton.addEventListener('click', openHelpModal);
    }

    const submitButton = document.querySelector('#helpChatbotModal button[aria-label="Submit your question"]');
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            processChatInput();
            closeHelpModal(); // Assuming you want to close the modal after processing input
        });
    }

    const closeButton = document.querySelector('#helpChatbotModal .close');
    if (closeButton) {
        closeButton.addEventListener('click', closeHelpModal);
    }

    function openHelpModal() {
        const helpChatbotModal = document.getElementById('helpChatbotModal');
        helpChatbotModal.style.display = 'block';
        helpChatbotModal.setAttribute('aria-hidden', 'false');
    }

    function closeHelpModal() {
        const helpChatbotModal = document.getElementById('helpChatbotModal');
        helpChatbotModal.style.display = 'none';
        helpChatbotModal.setAttribute('aria-hidden', 'true');
    }

    function processChatInput() {
        var input = document.getElementById('chatInput').value.toLowerCase();
        highlightService(input);
    }

    function highlightService(input) {
        const services = [
            { keywords: ['migration', 'visa', 'passport'], elementId: 'migrationsverket' },
            { keywords: ['tax', 'taxation', 'income'], elementId: 'skatteverket' },
            { keywords: ['police', 'report', 'emergency'], elementId: 'polismyndigheten' },
            { keywords: ['job', 'employment', 'work'], elementId: 'arbetsformedlingen' },
            { keywords: ['insurance', 'social', 'benefits'], elementId: 'forsakringskassan' },
            { keywords: ['health', 'medical', 'doctor'], elementId: '1177' }
        ];
    
        // Clear existing highlights
        document.querySelectorAll('.highlight').forEach(function(node) {
            node.classList.remove('highlight');
        });
    
        let matchedService = services.find(service => service.keywords.some(keyword => input.includes(keyword)));
    
        if (matchedService) {
            const element = document.getElementById(matchedService.elementId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                element.classList.add('highlight');
                setTimeout(() => element.classList.remove('highlight'), 5000); // Highlight for 5 seconds
            }
        }
    }
    
});
