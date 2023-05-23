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
		case "kgristle": return kgristle(pword);
		case "crogers": return srogers(pword);
		case "jdrummer": return jdrummer(pword);
		case "alouis": return alouis(pword);
		

        default: return "Invalid username."
    }
}

function uName()
{
	unames = ["rchambers", "lsacez", "kgristle", "crogers", "jdrummer", "alouis"];
    uname = document.inputform.uname.value;  
	if(!unames.includes(uname.toLowerCase())){
		document.inputform.uname.style.display = "none";
		document.getElementById('notification').value = "Invalid username. Please try again."
		document.getElementById('notification').style.display = "inline-block";
	}
	else
	{
		var x = document.getElementById('password');
			if (x.style.display === "none") {
				x.style.display = "block";
			} else {
				x.style.display = "none";
			}
		document.getElementById('pword').focus();
	}
}

function pWord()
{
    pword = document.getElementById('pword').value;
    document.inputform.style.display = "none";
    document.getElementById('notification').style.display = "inline-block";  
}

function alouis(pword){
	if(pword == "hunter2"){
        let text = "Lieutenant Lewis,"
		+ "\n\n   I hope this message finds you well. I wanted to take a moment to remind you of the importance of your current assignment and the expectations that come with it."
		+ "\n\n   This is a critical opportunity for you to prove your capabilities and dedication as a leader. I trust that you will handle your responsibilities with the utmost professionalism and competence. The success of this mission depends on your commitment and attention to detail."
		+ "\n\n   Now, let's be clear: I have high expectations for you. I expect nothing less than excellence in every aspect of your performance. This assignment is a chance for you to shine, and I know you have the potential to exceed even the loftiest of goals."
		+ "\n\n   If you execute your duties flawlessly, I will personally consider pulling some strings to expedite your promotion to the rank of lieutenant. However, let it be known that this opportunity is not guaranteed. It is earned through your actions and results."
		+ "\n\n   So, Lieutenant Lewis, don't let me down. Rise to the occasion, prove your worth, and demonstrate the qualities of a true leader. I have confidence in your abilities, and I expect nothing less than your best."
		+ "\n\n   Stay focused, remain disciplined, and remember that your actions have consequences. Show me that you have what it takes to excel, and you will find doors opening for you."
		+ "\n\n     Make me proud."
		+ "\n\n     Sergeant Major Lewis Louis";
		return text;
    }
	else{
		return "Invalid password."
	}
}

function jdrummer(pword){
    if(pword == "80085"){
        let text = "Private Drummer,"
		+ "\n\n   I hope this email finds you in good health and spirits, amidst your duties as a space marine. I must admit, it feels like a lifetime ago since I served alongside your father, Benji Drummer. He was a remarkable man and an exceptional marine—a hell of a guy, as you rightly put it. The same qualities I admired in him, I see in you, Jett. You have my utmost respect."
		+ "\n\n   I'm reaching out to you today, not only as your captain but also as someone who holds a deep concern for the safety and well-being of every marine under my command. Something feels amiss around Fort Nebraska, and I believe it's crucial for us to remain vigilant and prepared for whatever may come our way."
		+ "\n\n   Recent events have indicated that our enemies are probing our defenses, testing our resolve. We cannot afford to underestimate the gravity of this situation. While I cannot provide concrete details at this moment, it's essential that you and your fellow marines stay on high alert, ensuring that our defenses are solid and our response capabilities are at their peak."
		+ "\n\n   The future of Fort Nebraska hangs in uncertainty, Jett. The challenges we face may be formidable, but I have faith in the resilience and strength of our team. We have overcome countless trials in the past, and we will prevail once again."
		+ "\n\n   Remember, it is in times like these that the bonds between marines are truly tested. We must stand united, supporting one another and working as a cohesive unit. Your father embodied the spirit of camaraderie, and I see that same spirit in you. Lean on your fellow marines, trust in their abilities, and together, we will weather this storm."
		+ "\n\n   I wanted you to be aware of the situation, Jett, as your father's legacy holds a special place in my heart. I believe in you and your ability to rise to the occasion. Stay focused, stay sharp, and maintain the unwavering determination that defines a true marine."
		+ "\n\n   If you have any concerns or questions, do not hesitate to reach out to me. We are in this together, and I am here to provide guidance and support."
		+ "\n\n   Stay strong, Private Drummer. I have every confidence that you will honor your father's memory and make a significant impact in our fight to secure Fort Nebraska."
		+ "\n\n       Yours in solidarity,"		
		+ "\n\n       Captain Ishmael Martens";
		return text;
    }
	else{
		return "Invalid password."
	}
}

function srogers(pword){
    if(pword == "hunter2"){
        let text = "Yo Steve,"
		+ "\n\n   I hope this email finds you in good spirits and high morale amidst your valiant service as a space marine. It's been quite a while since we last crossed paths, but I wanted to share some exciting news with you."
		+ "\n\n   You know, I've been the cook aboard the station Fort Nebraska for quite some time now, and I've had the pleasure of preparing various meals to keep the crew fueled and satisfied. Among the many dishes we've served, there's always been one that held a special place in your heart - your all-time favorite: Grandma's Spicy Chicken Noodles."
		+ "\n\n   I remember the delight on your face every time it was on the menu. It's been a while since we last made it, and unfortunately, I have some bittersweet news to share. The stock of ingredients needed for Grandma's Spicy Chicken Noodles has become incredibly scarce, and it's unlikely that we'll ever be able to make it again."
		+ "\n\n   However, my friend, I wanted to let you in on a little secret. Knowing how much you adored that dish and how it brought a smile to your face, I couldn't bear the thought of you missing out on it forever. So, against all odds, I managed to save a portion of Grandma's Spicy Chicken Noodles specifically for you."
		+ "\n\n   Yes, you read that right, Steve! I've stashed away a container of that tantalizing goodness in the freezer, waiting for the perfect moment to surprise you. It may not be the same as having it fresh from the kitchen, but I hope it brings back memories and puts a smile on your face, even if you're far away from the comforts of home."
		+ "\n\n   Now, I must confess, keeping it a secret hasn't been easy. The aroma of those noodles has been calling to me, tempting me to dig in. But the thought of seeing the joy on your face when you finally get to taste them again is what keeps me strong."
		+ "\n\n   I'll coordinate with the logistics team to ensure that the container finds its way to you. You'll be receiving it soon, my friend, so keep an eye out for a special delivery."
		+ "\n\n   Remember, Steve, even in the vastness of space, it's the little things that bring us comfort and remind us of home. I hope this small gesture serves as a reminder that you are not alone out there. Your presence is missed here on the station, and we eagerly await your return."
		+ "\n\n   Stay safe, stay strong, and keep fighting the good fight. And when that package arrives, savor each bite of Grandma's Spicy Chicken Noodles as if it were a taste of home."
		+ "\n\n   Take care, my friend, and until we meet again."
		+ "\n\n   Regards,"
		+ "\n\n   Jessup Jones";
		return text;
    }
	else{
		return "Invalid password."
	}
}

function kgristle(pword){
    if(pword == "Hunter2"){
        let text = "My dearest son,"
		+ "\n\n   I hope this message finds you well, amidst the stars and the unknown. It's been far too long since we last saw each other, and there isn't a day that goes by where I don't think of you and hold you close in my heart. As a mother, it's both a joy and a challenge to watch you grow into the remarkable marine you've become."
		+ "\n\n   Your father, may he rest in peace, would be so proud of the strong, brave man you've become. He left this world too soon, leaving behind a legacy of honor and courage. I see those very same qualities shining through you, my son. When I look at you, I see him living on in you, a testament to the love we shared and the values we hold dear."
		+ "\n\n   Working here at the docking bay, surrounded by the constant movement of ships and the diverse crew that passes through, I can't help but feel a connection to the vastness of space. It's a reminder that life is full of endless possibilities and challenges, much like your own journey as a marine. I know it's not an easy path you've chosen, but you've embraced it with unwavering dedication and determination."		
		+ "\n\n   I want you to know, my dear son, that I am incredibly proud of you. Every day, as I watch the ships arrive and depart, I'm reminded of the sacrifices you make to protect others, to ensure their safe return home. Your selflessness is a beacon of light in a universe that can sometimes be filled with darkness."
		+ "\n\n   Remember, my son, that you are never alone. Even when the vastness of space seems overwhelming, know that you carry our love with you, a love that knows no boundaries. Your father's spirit surrounds you, guiding and protecting you, just as my thoughts and prayers do."
		+ "\n\n   Take a moment in the midst of your duties to look up at the stars, and know that I am looking up at them too, sending you my love across the expanse of space. As you face challenges and make difficult decisions, always trust your instincts, for they are rooted in the values we instilled in you."
		+ "\n\n   Please take care of yourself, my dear son. Your well-being is always on my mind, and your safe return is what keeps my heart beating. Know that whenever you need a listening ear or a comforting word, my love and support will be there for you, just as sure as the stars continue to shine."
		+ "\n\n   Stay strong, stay courageous, and know that you are loved beyond measure. I eagerly await the day when we can be together again, to embrace each other and celebrate the incredible person you've become."
		+ "\n\n   With all my love,"
		+ "\n\n   Mom";
        return text;
    }
	else{
		return "Invalid password."
	}
}

function robbyChambers(pword){
    if(pword == "Packers27"){
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