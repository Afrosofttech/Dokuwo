function swal(title,text,icon,confirmButtonText){
	Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmButtonText
        })
}
function currencyFormat(num){
        return (num*1).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1, ');
}
function postalCodeFormatter(code) {
        while (code.length < 5) {code = "0" + code;}
        return code;
}
function validEmail(email){
        var regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var validEmail = regEx.test(email);
        return validEmail;
}