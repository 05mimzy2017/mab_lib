function makeStory() {
    // comment out the line below once you're sure this page is properly connected
    // to your HTML file.
    // get form values
    var verb = document.getElementById('verb').value;
    var adjective1 = document.getElementById('adjective1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var plural_noun1 = document.getElementById('plural_noun1').value;
    var adjective3 = document.getElementById('adjective3').value;
    var person_inroom1 = document.getElementById('person_inroom1').value;
    var plural_noun2 = document.getElementById('plural_noun2').value;
    var place1 = document.getElementById('place1').value;
    var adjective4 = document.getElementById('adjective4').value;
    var celebrity1 = document.getElementById('celebrity1').value;
    var noun1 = document.getElementById('noun1').value;
    var plural_noun3 = document.getElementById('plural_noun3').value;
    var adjective5 = document.getElementById('adjective5').value;
    var plural_noun4 = document.getElementById('plural_noun4').value;
    var plural_noun5 = document.getElementById('plural_noun5').value;
    var noun2 = document.getElementById('noun2').value;
    var plural_noun6 = document.getElementById('plural_noun6').value;




    // Set title of story.
    var title = "Espionage Art";


    // Build story.

    var paragraph1 = "Espionage is the formal word for " + verb + ". In the shadowy world of spies, a/an " + adjective1 + " organization like the US government uses spies to infiltrate " + adjective2 + " groups for purpose of obtaining top secret " + plural_noun1 + ". For example, spies might have to crack code for accessing confidential," + adjective3 + " files, or their mission could be far more dangerous - like stealing the key ingredient for making " + person_inroom1 + "'s award-winning Explosive Fudgy " + plural_noun2 + ". Spies are found all over (the) " + place1 + "-but they are not allowed to reveal their " + adjective4 + " identities. A teacher," + celebrity1 + ", or even the little old " + noun1 + " with the cane and fifteen pet "
    + plural_noun3 + " who lives next door to you could be a spy. The world of spying might seem glamorous and " + adjective5 + "-but it's filled with risks and " + plural_noun4 + " ! Sure, spies have a never-ending suppy of supercool electronic " + plural_noun5 + ", but they can't trust any " + noun2 + "-which is why the number one rule of spies is to keep friends close- and " + plural_noun6 + " closer!";



    // Display story.
    document.getElementById('paragraph_one').innerHTML = paragraph1;


}
