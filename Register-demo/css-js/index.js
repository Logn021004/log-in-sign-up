
function Create(){
   window.location.href='index.html'
}
function signin(){
    window.location.href='signin.html'
}  

function sendSubmit(){
    let EmailValue=document.getElementById('email')
    let passvalue=document.getElementById('Password')
    let user =localStorage.getItem(EmailValue.value)
    let data =JSON.parse(user)
    if(checkEmail(EmailValue.value)){
        checkEmail(EmailValue.value)
        return
    }
    else if(checkPass(passvalue.value)){
        checkPass(passvalue.value)
        return
    }                 
    else{
        let keyEmail ={
            email:EmailValue.value,
            pass:passvalue.value,
        };
        let json=JSON.stringify(keyEmail)
        localStorage.setItem(EmailValue.value,json)
        alert("tạo account thành công!")
        window.location.href='signin.html'
    }
}
function Login(){
    let EmailValue=document.getElementById('email')
    let passvalue=document.getElementById('Password')
    let user =localStorage.getItem(EmailValue.value)
    let data=JSON.parse(user)

    if(EmailValue.value=='' ||passvalue.value==''){
alert('điền thông tin đăng nhập')
    }
    else if(user==null){
        alert('tài khoản không tồn tại')
    }
    else if(passvalue.value!=data.pass){
        alert('sai mật khẩu đăng nhập')
    }
    else if(EmailValue.value==data.email && passvalue.value==data.pass){
        alert('Đăng nhập thành công')
        window.location.href='./Register-demo/css-js/main.html'
    }
}
function checkEmail(e){
    let emailFormat=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e=e.trim(   )
    let user=localStorage.getItem(e)
    if(e==''){
        showError(true,'vui lòng điền đầy đủ các thông tin')
        return true
    }
    else if(!emailFormat.test(e)){
        showError(true,'vui lòng điền đầy đủ các thông tin')
        document.getElementById('ErrorEmail').innerText="Email không đúng định dạng"
        return true
    }
    else if(user!=null){
        showError(true,'vui long xem trai thong tin')
        document.getElementById('ErrorEmail').innerText="Email đã tồn tại"
        return true
    }
     else{
        showError(false)
        return false
        }
}
function checkPass(e){
    if(e==''){
        showError(true,'vui lòng điền đầy đủ các thông tin')
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