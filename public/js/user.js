

const Myform = document.getElementById("my_form");

Myform.addEventListener('submit', onsubmit);

async function onsubmit(eve) {
    try {
        eve.preventDefault();
        const Name = document.getElementById('username');
        const Email = document.getElementById('useremail');
        const Phone = document.getElementById('usernumber');
        const Password = document.getElementById('userpassword');


        let obj = {
            Name: Name.value,
            Email: Email.value,
            Phone: Phone.value,
            Password: Password.value
        }
        // console.log(obj);
        let userloginData = await axios.post('http://localhost:3000/user', obj)
        console.log(userloginData);
    } catch (err) {
        console.log(err);
    }
}