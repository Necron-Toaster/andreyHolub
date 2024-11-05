'use strict';

import {profiles} from "./usersData.js";

const profileCardContainer = document.getElementById('profile-cards-container');
const profileCardTemplate = document.getElementById('profile-card-template');

function createProfileCards(profiles) {
    profiles.forEach((profile) => {

        const profileCard = profileCardTemplate.content.cloneNode(true);


        //profileCard.querySelector(".profile-picture").src = profile.pictureUrl;
        profileCard.querySelector(".profile-title").textContent = profile.name;
        profileCard.querySelector(".profile-job-title").textContent = profile.jobTitle;
        profileCard.querySelector(".profile-description").textContent = profile.description;

        profileCardContainer.appendChild(profileCard);
    });
}


createProfileCards(profiles);