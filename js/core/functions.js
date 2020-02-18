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