function navigatePictures(apartmentName, forward, defaultPictureIndex) {
    const apartment = document.getElementById("pictures_" + apartmentName);

    const pictures = apartment.querySelectorAll("img");

    let pictureIndex = defaultPictureIndex;

    pictures.forEach((img, index) => {
        if (!img.hidden) {
            pictureIndex = index;
        }
    });

    //Skjul alle billeder
    pictures.forEach(img => img.hidden = true);

    if (forward) {
        pictureIndex++;
        if (pictureIndex >= pictures.length) {
            pictureIndex = 0; //Gå til første billede hvis vi er ved slutningen
        }
    } else {
        pictureIndex--;
        if (pictureIndex < 0) {
            pictureIndex = pictures.length - 1; //Gå til sidste billede hvis vi er ved starten
        }
    }
    //vis det næste eller forrige billede
    pictures[pictureIndex].hidden = false;
}
