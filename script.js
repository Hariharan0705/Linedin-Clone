// Function to filter profiles based on search term
function filterProfiles(searchTerm) {
    const profiles = document.querySelectorAll('.mainmid');
    
    profiles.forEach(mainmid => {
        const name = mainmid.getAttribute('data-name').toLowerCase();
        const industry =mainmid.getAttribute('data-industry').toLowerCase();
        const skills = mainmid.getAttribute('data-skills').toLowerCase();

        //
        
        if (name.includes(searchTerm.toLowerCase()) ||
            industry.includes(searchTerm.toLowerCase()) ||
            skills.includes(searchTerm.toLowerCase())) {
            mainmid.style.display = 'block';
            display="profile"
        } else {
            mainmid.style.display = 'none';
        }
    });
}

// Search input event listener
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
    filterProfiles(searchInput.value);
});





//add new poster


document.addEventListener('DOMContentLoaded', function() {
            // Retrieve cards from localStorage
            let cards = JSON.parse(localStorage.getItem('cards')) || [];

            // Get card container element
            const main_posters = document.getElementById('main_posters');
            

            // Loop through each card and create HTML elements to display them
            cards.forEach(cardData => {
                const { User_Name,User_ImageURL,User_Desigination,Industry,Skills,About,Hashtags,Post_ImageURL} = cardData;

                // Create card element
                const card = document.createElement('div');
                card.className = 'card';
                
                
                card.innerHTML = `
                    <div class="mainmid" id="mid-main" data-name=${User_Name} data-industry=${Industry} data-skills=${Skills}>
                      <div class="m1" style="padding-left: 20px; padding-top: 0px;">
                        <a href="" style="text-decoration: none; color: black;"><img src="./img/profile4.jpg" alt="" style="height: 30px; width: 30px; border-radius: 50% ; display: inline;"></a>
                        <a href="" style="text-decoration: none; color: black;"><p style="display: inline;"><b> &nbsp; <a href="" class="like-pro">Akshatha A</a></b> commended on this post</p></a>
                        <span style="padding-left: 220px; padding-top: 10px;"><button class=" btn dropdown" data-bs-toggle="dropdown" style="display: inline;"><sup><b>. . .</b></button>
                          <ul class="dropdown-menu" style="right: 0; width: 500px">
                            <li class="dropdown-item" style="padding-top: 5px; padding-left: 20px; padding-right: 5px; padding-bottom: 10px;"><a href="" style="text-decoration: none; color: black;"><img src="./img/save.png" alt="" style="width: 30px; height: 25px;"> <span style="font-size: 20px; padding-left: 10px; font-weight: 200;">Save</span></a></li>
                
                            <li class="dropdown-item" style="padding-top: 5px; padding-left: 20px; padding-right: 5px; padding-bottom: 10px;"><a href="" style="text-decoration: none; color: black;"><img src="./img/copy-link-icon-27-removebg-preview.png" alt="" style="width: 30px; height: 25px;"> <span style="font-size: 20px; padding-left: 10px; font-weight: 200;">Copy link to post</span></a></li>
              
                            <li class="dropdown-item" style="padding-top: 5px; padding-left: 20px; padding-right: 5px; padding-bottom: 10px;"><a href="" style="text-decoration: none; color: black;"><img src="./img/embed.png" alt="" style="width: 30px; height: 25px;"> <span style="font-size: 20px; padding-left: 10px; font-weight: 200;">Embed this post</span></a></li>

                            <li class="dropdown-item" style="padding-top: 5px; padding-left: 20px; padding-right: 5px; padding-bottom: 10px;"><a href="" style="text-decoration: none; color: black;"><img src="./img/hidden-icon-visible-invisible-icon-eye-icon-look-and-vision-hide-unhide-symbol-human-eye-magic-eye-cross-symbol-sencitive-content-see-unsee-incognito-mood-blind-sign-free-vector-removebg-preview.png" alt="" style="width: 30px; height: 25px;"> <span style="font-size: 20px; padding-left: 10px; font-weight: 200;">Hide post like this</span></a></li>
                
                            <li class="dropdown-item" style="padding-top: 5px; padding-left: 20px; padding-right: 5px; padding-bottom: 10px;"><a href="" style="text-decoration: none; color: black;"><img src="./img/cross-14-removebg-preview.png" alt="" style="width: 30px; height: 25px;"> <span style="font-size: 20px; padding-left: 10px; font-weight: 200;">Unfollow Raveena R</span></a></li>
              
                            <li class="dropdown-item" style="padding-top: 5px; padding-left: 20px; padding-right: 5px; padding-bottom: 10px;"><a href="" style="text-decoration: none; color: black;"><img src="./img/flag.png" alt="" style="width: 30px; height: 25px;"> <span style="font-size: 20px; padding-left: 10px; font-weight: 200;">Report this post</span></a></li>
                          </ul>
                        </span>
                        <a href="" style="text-decoration: none; color: black;"><h6 style="display: inline; padding-left: 5px;"> <b>X</b></h6></a> 
                        <hr style=" margin-right: 20px;">
                      </div>



                      <div class="post" style="padding:10px 20px 0px ; margin: 5px 0px 10px;">
                        <div class="author" style="display: flex; align-items: flex-start; margin-bottom: 20px;">
                          <a href=""><img src="${User_ImageURL}" alt="" style=" width: 70px; border-radius: 50%;height: 70px;"></a>
                          <div style="padding-left: 10px;">
                            <h6 style="font-size: 16px; font-weight: 600;"><a href="" class="like-pro">${User_Name}</a> </h6>
                            <small style="display: block;">${User_Desigination}</small>
                            <small style="display: block;">Just now</small>
                          </div>
                        </div>
                        <p><b>Skills:</b>${Skills}<br><b>Industry:</b>${Industry}<br>${About}<br>
                          <span><a href="" style="text-decoration: none;">${Hashtags}
                          Activate to view larger image,</span></a>
                        </p>
                        <a href=""><img src="${Post_ImageURL}" alt="" width="100%" height="400px"></a>
                      </div>


                      <div class="react" style="padding-left: 30px;">
                        <div>
                          <a href="" class="reactions" style=" width: 15px;"><img src="./img/Thumbs up.png" alt="" style="height: 25px; width: 25px; margin-right: -15px;">
                            <img src="./img/heart like.png" alt="" style="height: 30px; width: 30px; margin-right: -15px">
                    
                            <small style="display: inline; padding-left: 20px;">Tharun G and 230 others </small>
                          </a>
                          <div style="display: inline;">
                            <a href="" class="reactions" style="padding-left: 150px;">125 commends - 60 reposts</a>
                          </div>
                        </div>
                      </div>
                      <hr style="margin-left: 10px; margin-right: 10px;">


                      <div class="a-post">
                        <div class="buttons" style="padding-left: 10px; padding-right: 10px;">
                          <button class="btn" style="width: 150px; display: inline;"> <img src="./img/thumbs-up-115498907331ieo6e8abw-removebg-preview.png" alt="" style="width: 30px; height: 30px;"><span style="font-size: larger; font-weight: 500;">  Like </span></button>

                          <button class="btn" style="width: 150px; display: inline;"> <img src="./img/006-comment-reply-removebg-preview.png" alt="" style="width: 20px; height: 20px;"><span style="font-size: larger; font-weight: 500;">  Commend</span> </button>

                          <button class="btn" style="width: 150px; display: inline;"> <img src="./img/Repost-icon-removebg-preview.png" alt="" style="width: 20px; height: 20px;"> <span style="font-size: larger; font-weight: 500;">  Repost</span> </button>

                          <button class="btn" style="width: 140px; display: inline;"> <img src="./img/png-transparent-computer-icons-send-miscellaneous-angle-rectangle-thumbnail-removebg-preview.png" alt="" style="width: 20px; height: 20px;"> <span style="font-size: larger; font-weight: 500;">  Send </span> </button>
                        </div>

                        <div class="mid1-line1" style="padding: 7px 5px 0px 30px;">
                          <a href=""><img src="./img/proofile img.jpg" alt="" style="border-radius: 50%; height: 60px; width: 55px;"></a>
                          <input type="text" style="width: 500px; height: 50px; border-radius: 50px; " placeholder="      Add a commend" >  
                          <a href="" style="text-decoration: none; margin-left: -80px;"><img src="./img/emoji.png" alt="" style="width: 25px; height: 25px;"></a>
                          <a href="" style="text-decoration: none; margin-right: 10px; "><img src="./img/gallery.png" alt="" style="height: 25px; width: 25px;"></a>                
                        </div>
              
                        <div style="margin-left: 100px; margin-bottom: 10px;">
                          <a href="" class="lr">Like</a> <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span><a href="" class="lr">Reply</a>
                        </div>     
                        <a href="" class="cmnds">Show more 35 commends</a>    
                      </div>
                    </div>
                `;

                
                if (main_posters.firstChild) {
                    main_posters.insertBefore(card, main_posters.firstChild);
                } else {
                    main_posters.appendChild(card);
                }
                
            });
        });


