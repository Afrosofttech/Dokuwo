function swal(title,text,icon,confirmButtonText){
	Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmButtonText
        })
}
function activate_trial(){
        Swal.fire({
                title: 'FREE TRIAL?',
                text: "Click on the 'Activate trial' button below to activate a 14 days trial to be able to create jobs, send messages and view profiles of jobseekers!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Activate trial!'
              }).then((result) => {
                if (result.value) {
                return activate_free_trial();
                }
              })   
}
function swalNotify(title,icon){
        Swal.fire({
                position: 'top-end',
                title: title,
                icon: icon,
                showConfirmButton: false,
                timer: 1500
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