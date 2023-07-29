
function sendSubmit(){
    let EmailValue=document.getElementById('email')
    let passvalue=document.getElementById('Password')
    if(checkEmail(EmailValue.value)){
        checkEmail(EmailValue.value)
        return
    }
    else if(checkPass(passvalue.value)){
        checkPass(passvalue.value)
        return
    }
    else{
        alert='Tạo thành công!'
        window.location.href='https://soundcloud.com/discover'
    }
}
function checkEmail(e){
    let emailFormat=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e=e.trim(   )
    if(e==''){
        showError(true,'Khong duoc de trong ')
        return true
    }
    else if(!emailFormat.test(e)){
        console.log('loi email')
        showError(true,'vui long xem lai thong tin')
        document.getElementById('ErrorEmail').innerText="Email không đúng định dạng"
        return true
    }
     else{
        showError(false)
        return false
        }
}
function checkPass(e){
    if(e==''){
        showError(true,'Khong duoc de trong')
        return true
    }
    else if(e.length<8)
        {
            showError(true,'Vui long xem lai thong tin')
            document.getElementById('ErrorPass').innerText='Mat khau phai it nhat 8 ki tu'
            return true
        }
    else if(checkLengthPass(e)){
        showError(true,'vui long xem lai thong tin')
        document.getElementById('ErrorPass').innerText='Mat khau phai co it nhat mot chu cai va mot chu so'
        return true
    }
    else if(checkEnterPass(e)){
        showError(true,'vui long xem lai thong tin')
        document.getElementById('ErrorEnterPass').innerText=' mat khau khong trung khop'
        return true
    }
    else{
        showError(false)
        return false
    }
}
function checkEnterPass(e){
    let EnterPass=document.getElementById('Enter-Password')
    
    if(EnterPass==''){
        return true
    }
    if(EnterPass.value!=e){
        return true
    }
    return false
}
function checkLengthPass(e){
    let CountChu=0,CountSo=0;
    for(let i=0;i<e.length;i++)
    {
        if((e[i] >= 'a' && e[i] <= 'z') || (e[i] >= 'A' && e[i] <= 'Z'))
        {
            CountChu++;
        }
        if((e[i] >= '0' && e[i] <= '9'))
        {
            CountSo++;
        }
    }
    if(CountChu==0||CountSo==0){
        return true
    }
    return false
}
function showError(e,massage){
    if(e){
      let error= document.getElementsByClassName('Error')
        for(let i=0;i<error.length;i++){
           document.getElementsByClassName('Error')[i].innerText = massage
            error[i].style.display='block'
            error[i].style.color='red'
        }
      let boder=document.getElementsByClassName('input-field')
        for(let i=0;i<boder.length;i++){
            boder[i].style.border='1px solid red'
        }
    }
    else{
        let error= document.getElementsByClassName('Error')
        for(let i=0;i<error.length;i++){
            error[i].style.display='none'
        }
        let boder=document.getElementsByClassName('input-field')
        for(let i=0;i<boder.length;i++){
            boder[i].style.border='1px solid #92bcba'
        }
    }
}