    function sendEmail() {
            var recipient = document.getElementById("recipient").value;
    var subject = encodeURIComponent(document.getElementById("subject").value);
    var dateFrom = encodeURIComponent(document.getElementById("datefrom").value);
    var dateTo = encodeURIComponent(document.getElementById("dateto").value);
    var persons = encodeURIComponent(document.getElementById("persons").value);
    var phone = encodeURIComponent(document.getElementById("phone").value);
    var name = encodeURIComponent(document.getElementById("name").value);
    var message = encodeURIComponent(document.getElementById("message").value);

    if (recipient) {
        window.location.href = `mailto:${recipient}?subject=${subject}%20period:%20${dateFrom}%20to%20${dateTo}%20persons:%20${persons}&body=Phone:%20${phone}%0AName:%20${name}%0A${message}`;
            } else {
        alert("Please enter a recipient e-mail.");
            }
    }