const users= ['Saint', 'Dogar', 'Knight'];
const memberDiv = document.querySelector('.memberDiv');
const addIcon= document.querySelector('.addIcon');

const userIcons = () => {
	users.reverse();
	users.map((curElem)=>{
		memberDiv.insertAdjacentHTML('afterbegin',
		`<button class="btn"><span><a href="D:\Semester 1\ICT-LAB\ICT-LAB 10\Last.html">${curElem}</a></span></button>`
		);
	})
};

addIcon.addEventListener('click',()=> { 
	let userName=prompt('Please Enter Your Name: ');

	if(userName != null && !users.includes(userName)){
		users.push(userName);
		console.log(users);
		memberDiv.insertAdjacentHTML('afterbegin',
		`<button class="btn"><span><a href="D:\Semester 1\ICT-LAB\ICT-LAB 10\Last.html">${userName}</a></span></button>`
		);
	}else{
		alert('UserName Already Exists! ');
	}
})