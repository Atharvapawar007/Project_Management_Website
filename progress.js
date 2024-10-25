function updateProgress(taskNumber) {
    const progressInput = document.getElementById(`input${taskNumber}`);
    const progressValue = progressInput.value;

    const progressBar = document.getElementById(`progress${taskNumber}`);
    progressBar.style.width = progressValue + '%';

    
    if (progressValue < 50) {
        progressBar.style.backgroundColor = '#e74c3c';  
    } else if (progressValue < 80) {
        progressBar.style.backgroundColor = '#f39c12';  
    } else {
        progressBar.style.backgroundColor = '#27ae60';  
    }
}

function updateAllProgress() {
    for (let i = 1; i <= 5; i++) {
        updateProgress(i);
    }
}
