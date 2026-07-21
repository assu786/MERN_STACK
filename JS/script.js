const show=()=>{
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const phoneno=document.getElementById("number").value;
    let gender="";
    const genders=document.getElementsByName("gender");
    for (let i=0;i<genders.length;i++){
        if (genders[i].checked){
            gender=genders[i].value;
            break;
        }
    }
    let qualifications=[];
    const qualify=document.getElementsByClassName("qualification");
    for(let i=0;i<qualify.length;i++){
        if (qualify[i].checked){
            qualifications.push(qualify[i].value);
        }
    }
    const dob=document.getElementById("datetime").value;
    const clr=document.getElementById("colour").value;
    const image = document.getElementById("file").files[0];

let imgname = "No Image Selected";
let imgDisplay = "";

if (image) {
    imgname = image.name;

    // Create a temporary URL for the selected image
    let imageURL = URL.createObjectURL(image);

    imgDisplay = `
        <img src="${imageURL}"
             width="200"
             height="200"
             alt="Uploaded Image"
             style="border:2px solid black; margin-top:10px;">
    `;
}
    document.getElementById("result").innerHTML=
    `
    <h2>Details</h2>
    <p><b>Name:</b>${name}</p>
    <p><b>Email:</b>${email}</p>
    <p><b>Password:</b>${phoneno}</p>
    <p><b>Gender:</b>${gender}</p>
    <p><b>Qualiication:</b>${qualifications.join(",")}</p>
    <p><b>DOB:</b>${dob}</p>
    <p><b>Color:</b>${clr}</p>
    <p><b>Image Name:</b> ${imgname}</p>

    ${imgDisplay}
    `;
};