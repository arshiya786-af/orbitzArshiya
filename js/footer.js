let footer = ()=>{
    return `
<div id="footer">
<div>
    <img src="https://a.travel-assets.com/globalcontrols-service/content/f285fb631b0a976202ef57611c7050e9ef5ca51a/images/EG_Wordmark_blue_RGB.svg" alt="">
</div>
<div class="footer_div">
    <h3>Company</h3>
    <ul>
        <li><a href="">About</a></li>
        <li><a href="">Job</a></li>
        <li><a href="">List your property</a></li>
        <li><a href="">Partnerships</a></li>
        <li><a href="">Newsroom</a></li>
        <li><a href="">Investor Relations</a></li>
        <li><a href="">Site Map</a></li>
        <li><a href="">Orbitz Rewards</a></li>
        <li><a href="">Advertising</a></li>
    </ul>
</div>
<div class="footer_div">
    <h3>Explore</h3>
    <ul>
        <li><a href="">Hotels in United States</a></li>
        <li><a href="">Vacation Rentals in United States</a></li>
        <li><a href="">Car Rentals in United States</a></li>
        <li><a href="">Domestic Flights</a></li>
        <li><a href="">Vacation Packages in United States</a></li>
        <li><a href="">Vacation Packages in United States</a></li>
        <li><a href="">Vacation Packages in United States</a></li>
        <li><a href="">Orbitz Reviews</a></li>
        <li><a href="">Orbitz Coupons</a></li>
        <li><a href="">LGBTQ Travel</a></li>
        <li><a href="">Unique Accommodations</a></li>
        <li><a href="">Travel Blog</a></li>
    </ul>
</div>
<div class="footer_div">
    <h3>Policies</h3>
    <ul>
        <li><a href="">Privacy Policies</a></li>
        <li><a href="">Terms of Use</a></li>
        <li><a href="">Orbitz Rewards Terms</a></li>
        <li><a href="">Do not sell my personal information</a></li>
    </ul>
</div>
<div class="footer_div">
    <h3>Help</h3>
    <ul>
        <li><a href="">Support</a></li>
        <li><a href="">Cancel your hotel or vacation rental booking</a></li>
        <li><a href="">Cancel your flight</a></li>
        <li><a href="">Refund timelines, policies & processes</a></li>
        <li><a href="">Use an Orbitz Coupon</a></li>
    </ul>
</div>
</div>

<div id="copyright">
<hr>
<p>© 2021 Orbitz, LLC, an Expedia Group Company. All rights reserved</p>
<p>Orbitz, Orbitz.com, and the Orbitz logo are trademarks or registered trademarks of Orbitz, LLC. CST# 2083930-50.</p>
</div>
</div>
<style>
#footer{
    display: flex;
    width: fit-content;
    margin: auto;
    font-size: 20px;
    margin-top: 40px;
   }
   .footer_div{
    padding: 0px 20px;
    margin: 0px 30px;
    border: 0;
   }
   #footer > div >img{
    margin-top: 15px;
   }
   .footer_div li {
    margin: 0px -38px;
    margin-bottom: 10px;
    font-size: 5px;
    list-style-type: none;
   }
   .footer_div h3{
       font-size: 13px;
       margin-bottom: 0;
   }
   .footer_div a {
   text-decoration: none;
   color: #25b8b5;
   font-size: 12px;
   font-weight: 100;
   
   }
   #copyright{
    width: fit-content;
    margin: auto;
    text-align: center;
    padding: 20px;
   }
   .FOimg1{
    background-image: url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_LastMinute_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh);
    width: 255px;
    height: 200px;
    background-size: cover;
    color: white;
   }
   .FOimg1 h2{
    margin-top: 140px;
   }
   .FOimg1 p{
       margin-left: 10px;
   }
   
   .FOimg2{
    background-image: url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_AllInclusive_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh);
    width: 255px;
    height: 200px;
    background-size: cover;
    color: white;
    /* vertical-align: text-bottom; */
   }
   
   .FOimg2 h2{
    margin-top: 140px;
   }
   .FOimg2 p{
       margin-left: 10px;
   }
   .FOimg3{
    background-image: url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_MOD_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh);
    width: 255px;
    height: 200px;
    background-size: cover;
    color: white;
   }
   .FOimg3 h2{
    margin-top: 140px;
   }
   .FOimg3 p{
       margin-left: 10px;
   }
   .FOimg4{
    background-image: url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/02/ORB_Storefront_JetAndReset_imgB_900x600_20211101.jpg?impolicy=fcrop&w=900&h=600&q=mediumHigh);
    width: 255px;
    height: 200px;
    background-size: cover;
    color: white;   
   }
   .FOimg4 h2{
    margin-top: 140px;
   }
   .FOimg4 p{
       margin-left: 10px;
   }
   #FOdivflex{
   display: flex;
   }
   #FOdivflex > h2,p{
    bottom: 1px;
   }
   #Vacationimg{
    background-image: url(https://forever.travel-assets.com/flex/flexmanager/images/2020/12/02/ORB_Storefront_BigMarquee_MODwithrewards_1124x480_V5.jpg?impolicy=fcrop&w=900&h=386&q=mediumHigh);
    background-size: cover;
    width: 700px;
    height: 280px;
   }
   #vacatext{
    background-color: white;
    margin-top: 230px;
    padding-left: 15px;
    padding-top: 1px;
    height: 65px;
    font-size: 13px;
   }
   #fcontainer {
   width: 1200px;
   height: 250px;
   padding: 5px;
   margin: auto;
   background-color: white;
   top: 60px;
   position: relative;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   }
   #fcontainer > div:nth-child(1) {
   display: flex;
   height: 50px;
   width: 500px;
   margin-left: 400px;
   /* border: 1px solid red; */
   justify-content: space-between;
   }
   .hoverEff:hover{
       cursor: pointer;
       color: teal;
   }
   #fcontainer > div > {
   margin-left: 50px;
   }
   #fcontainer > div > input {
   height: 40px;
   }
   #fcontainer>button{
     height: 50px;
     width: 150px;
     background-color: rgb(200,50,89);
     color: white;
     margin-left: 500px;
     font-size: 17px;
   }
   #fcontainer > div>span{
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     font-size: 14px;
   
   
   }
   #fcontainer > div>span{
     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
     font-size: 14px;
   }
   #searchdiv{
       height: 500px;
       background-image: url(https://forever.travel-assets.com/flex/flexmanager/images/2022/01/06/ORB_MaySale_imgB_1920x1440_20220106.jpg);
       background-size: cover;
       background-position: bottom;
       /* padding-top: 80px; */
   }
   #TTimg1 {
       height: 240px;
       background-size: cover;
       width: 550px;
       background-image: url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_NationalParks_imgB_1199x399_20211117.jpg);
       margin-right: 20px;
       background-color: rgb(75, 75, 75);
       color: white;
       background-blend-mode:overlay;
   }
   #TTimg2{
       color: white;
       margin-left: 20px;
       height: 240px;
       background-size: cover;
       width: 550px;
       background-image: url(https://forever.travel-assets.com/flex/flexmanager/images/2021/11/18/ORB_Blog_RoadTrips_imgB_1199x399_20211117.jpg);
       background-color: rgb(75, 75, 75);
       background-blend-mode:overlay;
   }
   .Pbtn{
       display: inline-block;
       padding: 10px 15px;
       background-color: white;
       color: rgb(88, 143, 161);
       font-size: 15px;
       font-weight: bolder;
   }
   .Pbtn:hover{
       background-color: rgb(198, 241, 255);
       color: rgb(0, 0, 0);
   }
   .black p{
       margin-left: 20px;
       margin-bottom: 3px;
   }
   .black h1{
       margin-bottom: 0;
   }
   .black {
       margin-top: 50px;
   }
   #navtext{
       position: absolute  ;
       top: 380px;
       left: 70px;
       font-size: 16px;
       color: white;
   }
   #nbtn{
       margin-top: 0;
       padding: 10px 20px;
       background-color: white;
       display: inline-block;
       color: rgb(42, 93, 110);
   }
   #nbtn:hover{
       background-color: rgb(202, 221, 228);
       color: black;
       cursor: pointer;
   }
   </style>`;
};
export {footer}