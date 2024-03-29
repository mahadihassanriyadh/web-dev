const paymentSuccess = true;
const marks = 80;

function enroll(callback) {
    console.log("Course enrollment is in progress...");

    setTimeout(function () {
        if (paymentSuccess) {
            callback();
        } else {
            console.log("Payment failed.");
        }
    }, 2000);
}

function progress(callback) {
    console.log("Course on progress...");

    setTimeout(function () {
        if (marks >= 80) {
            callback();
        } else {
            console.log("Course failed.");
        }
    }, 9000);
}

function getCertificate() {
    console.log("Preparing certificate...");

    setTimeout(() => {
        console.log("Congratulations! Your certificate is ready.");
    }, 1000);
}

enroll(() => progress(getCertificate));
