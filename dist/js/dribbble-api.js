const endpoint = "https://api.dribbble.com/v2/user/shots?access_token=";
const accessToken = "7bf3ebc95a1b4dd9aa4d235be2a540fcb1e104c65b2359fcc258b82f5e42dc41";
const url = endpoint + accessToken;

const galleryGrid = document.querySelector("#gallery-grid");

fetch(url)
  .then((result) => result.json())
  .then((data) => {
    data.forEach((shot) => {
      const thumbnail = shot.images.normal;
      const title = shot.title;
      const shotURL = shot.html_url;

      const galleryItem = document.createElement("div");
      galleryItem.classList.add("gallery-item");

      const galleryImage = document.createElement("img");
      galleryImage.classList.add("gallery-img");
      galleryImage.setAttribute("src", thumbnail);
      galleryImage.setAttribute("alt", title);

      galleryItem.appendChild(galleryImage);
      galleryGrid.appendChild(galleryItem);
    });
  })
  .catch((error) => console.log(error));
