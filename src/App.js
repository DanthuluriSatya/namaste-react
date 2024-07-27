import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";


const resObj2={
  id: "340484",
  name: "Millet Express",
  "cloudinaryImageId": "75f8103a06f57c043f26343fa42e23e2",
  "locality": "Kphb",
  "areaName": "Kukatpally",
  "costForTwo": "₹150 for two",
  "cuisines": [
    "Healthy Food",
    "South Indian",
    "North Indian",
    "Biryani",
    "Chinese",
    "Beverages"
  ],
  "avgRating": 4.3,
  "parentId": "10639",
  "avgRatingString": "4.3",
  "totalRatingsString": "10K+",
  "sla": {
    "deliveryTime": 24,
    "lastMileTravel": 3,
    "serviceability": "SERVICEABLE",
    "slaString": "20-25 mins",
    "lastMileTravelString": "3.0 km",
    "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
    "nextCloseTime": "2024-07-21 23:59:00",
    "opened": true
  },
  "badges": {
    "imageBadges": [
      {
        "imageId": "Rxawards/_CATEGORY-Guiltfree.png",
        "description": "Delivery!"
      }
    ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
    "entityBadges": {
      "imageBased": {
        "badgeObject": [
          {
            "attributes": {
              "description": "Delivery!",
              "imageId": "Rxawards/_CATEGORY-Guiltfree.png"
            }
          }
        ]
      },
      "textBased": {
        
      },
      "textExtendedBadges": {
        
      }
    }
  },
  "aggregatedDiscountInfoV3": {
    "header": "30% OFF",
    "subHeader": "UPTO ₹75"
  },
  "differentiatedUi": {
    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    "differentiatedUiMediaDetails": {
      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
      "lottie": {
        
      },
      "video": {
        
      }
    }
  },
  "reviewsSummary": {
    
  },
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {
    
  },
  "externalRatings": {
    "aggregatedRating": {
      "rating": "--"
    }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
}


const AppLayout=()=>{
  return(
    <div className="app">
    <Header/>
    <Body/>
    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);