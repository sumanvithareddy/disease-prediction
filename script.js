function predictDisease(){

let symptoms=[];

document.querySelectorAll("input:checked").forEach(item=>{

symptoms.push(item.value);

});

let disease="Unknown";

let advice="Please consult a doctor.";

if(symptoms.includes("fever") &&
symptoms.includes("cough") &&
symptoms.includes("fatigue")){

disease="Flu";

advice="Drink plenty of water and take rest.";

}

else if(symptoms.includes("fever") &&
symptoms.includes("headache") &&
symptoms.includes("vomit")){

disease="Dengue";

advice="Visit the hospital immediately.";

}

else if(symptoms.includes("diarrhea") &&
symptoms.includes("vomit")){

disease="Food Poisoning";

advice="Stay hydrated and seek medical attention.";

}

else if(symptoms.includes("chest") &&
symptoms.includes("breath")){

disease="Possible Heart/Lung Problem";

advice="Emergency medical attention is recommended.";

}

else if(symptoms.includes("sore") &&
symptoms.includes("cough")){

disease="Common Cold";

advice="Drink warm fluids and rest.";

}

document.getElementById("result").innerHTML=`

<h2>Prediction</h2>

<br>

<h1>${disease}</h1>

<br>

<p>${advice}</p>

`;

}
