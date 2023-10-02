const processingDiv = document.querySelector('.processing');
const successDiv = document.querySelector('.success');
const failureDiv = document.querySelector('.failure');
const payButton = document.getElementById('payButton');

function simulatePayment() {
    return new Promise((resolve, reject) => {
        // Simulate payment processing
        setTimeout(() => {
            const isSuccess = Math.random() < 0.5; // Simulate a 50% success rate
            if (isSuccess) {
                resolve();
            } else {
                reject();
            }
        }, 2000); // Simulate a 2-second payment process
    });
}

payButton.addEventListener('click', () => {
    processingDiv.style.display = 'block';

    simulatePayment()
        .then(() => {
            processingDiv.style.display = 'none';
            successDiv.style.display = 'block';
        })
        .catch(() => {
            processingDiv.style.display = 'none';
            failureDiv.style.display = 'block';
        });
});
