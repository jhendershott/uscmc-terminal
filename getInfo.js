let uname;
let pword

function FocusOnInput(){
	document.inputform.uname.focus();
}

function confirmClick(yn){
	elem = document.getElementById('fly');
	if(yn == "yes"){
		document.getElementById('notification').style.display = "none";
		document.getElementById("email").style.display = "inline-block";
		updateElementById('fly', getInfo(uname, pword));
	}
	else if(yn == "no"){
		document.getElementById('notification').style.display = "none";
		document.getElementById("email").style.display = "inline-block";
		updateElementById('fly', "\n\n   Well then, I guess you're not ready to check it out yet. Maybe next time.");
	}
}

function getInfo(uName, pword){
    switch(uName.toLowerCase()){
        case "rchambers": return robbyChambers(pword);
		case "lsacez": return lsacez(pword);
        default: return "Invalid username."
    }
}

function uName()
{
    uname = document.inputform.uname.value;  
    var x = document.getElementById('password');
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    document.getElementById('pword').focus();
}

function pWord()
{
    pword = document.getElementById('pword').value;
    document.inputform.style.display = "none";
    document.getElementById('notification').style.display = "inline-block";  
}

function robbyChambers(pword){
    if(pword == "password"){
        let text = "Hello, Robby! I hope this message finds you well amidst your duties. I look forward to catching up when you return."
        + "\n\n   Robby, I wanted to take a moment today to remind you of some valuable techniques we've discussed during our sessions to help you remain calm and composed under pressure. I know the weight of your responsibilities can be overwhelming at times, but I believe in your ability to navigate through it all."
        + "\n\n   First and foremost, remember to breathe. In moments of heightened stress, our breathing tends to become shallow and rapid. Take a deep breath in through your nose, feeling your lungs expand, and then exhale slowly through your mouth. Repeat this a few times, focusing on each breath, allowing yourself to center and regain control."
        + "\n\n   Visualizations can also be incredibly helpful. Close your eyes, Robby, and imagine yourself in a peaceful and serene place. It could be a picturesque beach, a quiet forest, or even a favorite spot from your childhood. Engage your senses—feel the warmth of the sun, listen to the soothing sounds of nature, and immerse yourself in the tranquility of that space. Let it ground you and provide a mental escape when things become overwhelming."
        + "\n\n   Another technique that may serve you well is reframing your thoughts. When faced with high-pressure situations, it's natural for negative thoughts to arise. However, challenge those negative thoughts by replacing them with positive, empowering ones. Remind yourself of your training, your capabilities, and the support system that surrounds you. Believe in yourself and your ability to overcome any obstacle that comes your way."
        + "\n\n   It's also essential to recognize your limits, Robby. You're only human, and it's okay to ask for help when needed. Reach out to your fellow marines, your superiors, or even to me if you feel overwhelmed. You don't have to face everything alone, and seeking support is a sign of strength, not weakness."
        + "\n\n   Lastly, don't forget self-care. Take moments for yourself, even in the midst of your duties. Engage in activities that bring you joy and help you unwind. Whether it's listening to music, reading a good book, or connecting with loved ones through messages or video calls, these small moments of self-nurturing can make a world of difference."
        + "\n\n   Robby, you have already shown incredible resilience and determination throughout your journey as a space marine. You've come so far, and I have no doubt that you will continue to thrive. Remember, you have the tools within you to remain calm under pressure. Trust in your training, trust in yourself, and never forget the strength that lies within."
        + "\n\n   If you ever need to talk or require additional support, please don't hesitate to reach out to me. I am here for you, Robby, cheering you on every step of the way."
        + "\n\n   Take care, my friend, and may you find peace and strength in the face of any challenge that comes your way."
        + "\n\n   Warmly,"
        + "\n   Dr. Lorna Hadley";
        return text;
    }
	else{
		return "Invalid password."
	}
}

function lsacez(pword){
    if(pword == "password"){
        let text = "'Skysnatch',"
		+ "\n\n   I hope this message finds you in good health and high spirits amidst your service as a member of our esteemed space platoon. I wanted to take a moment to personally address you and commend your dedication and commitment to your duties."
		+ "\n\n   Your nickname, 'Skysnatch,' speaks volumes about your determination and prowess in the field. It is this spirit that I believe will drive you towards great accomplishments in the space marines."
		+ "\n\n   I want to emphasize the importance of staying aligned with our mission objectives and following orders diligently. The success of our platoon depends on the unity and discipline of each individual. We are a team, and each member plays a vital role in upholding our core values and achieving our objectives."
		+ "\n\n   Your performance thus far has been commendable, and I have no doubt that you possess the skills and potential to excel in the space marines. As your commanding officer, I am looking forward to witnessing your progress and growth through the ranks. I see in you a valuable asset, someone who can inspire others with your determination and drive."
		+ "\n\n   Remember, 'Skysnatch,' greatness is achieved through consistent effort and adherence to our code of conduct. Stay focused, hone your skills, and never underestimate the power of continuous learning. The space marines offer a world of opportunities for advancement and personal growth. I have every confidence that you will seize these opportunities and excel."
		+ "\n\n   If you ever find yourself facing challenges or needing guidance, know that I am here to support you. Reach out to me or any of your fellow marines. We are a family, and together, we will overcome any obstacle that stands in our way."
		+ "\n\n   Continue to push your limits, strive for excellence, and uphold the honor of the space marines. Stay true to yourself and the values we hold dear, and you will undoubtedly carve a path of success within our ranks."
		+ "\n\n   I am proud to have you as a member of our platoon, 'Skysnatch,' and I eagerly await your continued progress and achievements."
		+ "\n\n   Stay focused, follow orders, and soar to new heights."
		+ "\n\n   Yours in service, Major Samuel Jackson";
        return text;
    }
	else{
		return "Invalid password."
	}
}
function updateElementById(id, string) {
	const element = document.getElementById(id);
	let index = 0;
	const delay = 2; // Adjust this value to change the delay between characters (in milliseconds)
  
	function updateNextChar() {
	  if (index < string.length) {
		const char = string[index];
  
		if (char === '\n') {
		  element.innerHTML += '<br>'; // Insert line break
		} else if (char === '<') {
		  const endIndex = string.indexOf('>', index);
		  if (endIndex !== -1) {
			const tag = string.substring(index, endIndex + 1);
			element.innerHTML += tag;
			index = endIndex;
		  }
		} else if (char === '\t') {
		  const tabSize = 4; // Number of spaces to represent a tab
		  element.innerHTML += '<span class="tab"></span>'; // Insert tab using CSS styling
		} else {
		  element.innerHTML += char; // Append the character
		}
  
		index++;
		setTimeout(updateNextChar, delay);
	  }
	}
  
	updateNextChar();
  }