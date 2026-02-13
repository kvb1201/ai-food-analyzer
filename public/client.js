async function analyzeFood() {
    const input = document.getElementById('foodInput').value;
    const resultDiv = document.getElementById('result');
    const loadingDiv = document.getElementById('loading');
    const analysisText = document.getElementById('analysisText');

    if (!input.trim()) {
        alert('Please enter some food or ingredients.');
        return;
    }

    // Reset UI
    resultDiv.classList.add('hidden');
    loadingDiv.classList.remove('hidden');

    try {
        const response = await fetch('/analyze-food', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: input })
        });

        const data = await response.json();

        if (response.ok) {
            analysisText.textContent = data.analysis;
            resultDiv.classList.remove('hidden');
        } else {
            alert('Error: ' + (data.error || 'Something went wrong'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to connect to the server.');
    } finally {
        loadingDiv.classList.add('hidden');
    }
}
