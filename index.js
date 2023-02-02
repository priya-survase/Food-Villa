import React from "react";
import ReactDOM from "react-dom/client";

//Creating Header Component
const Logo = () => {
  return (
    <a href="">
      <img
        className="img"
        alt="logo"
        src="https://i.pinimg.com/originals/3d/a0/00/3da000e71ddc31ec29da41266b182ade.jpg"
      />
    </a>
  );
};
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

const Searchbar = () => {
  return (
    <div>
      <input className="searchbar" type="text" placeholder="Search" />
      <button>Search</button>
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      {<Logo />}
      {<Searchbar />}
      {<Navbar />}
    </div>
  );
};

const restaurantList = [
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "375868",
        name: "4:20-Burger Joint",
        uuid: "1516d923-e495-4e18-b1ab-6fa278a782ff",
        city: "6",
        area: "Baner",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "it4gxho13isfnxtxilkj",
        cuisines: ["American", "European", "Beverages"],
        tags: [],
        costForTwo: 25000,
        costForTwoString: "₹250 FOR TWO",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        slaString: "22 MINS",
        lastMileTravel: 0.6000000238418579,
        slugs: {
          restaurant: "#4:20--food.experiments-baner-baner",
          city: "pune",
        },
        cityState: "6",
        address: "138/2/2/D, Narayan Nagar, Mulshi, Hinjawadi, Pune",
        locality: "Mulshi",
        parentId: 238157,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 3300,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3300,
          message: "",
          title: "Delivery Charge",
          amount: "3300",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.6 kms",
        hasSurge: false,
        sla: {
          restaurantId: "375868",
          deliveryTime: 22,
          minDeliveryTime: 22,
          maxDeliveryTime: 22,
          lastMileTravel: 0.6000000238418579,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.1",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "364194",
        name: "Anavrin Kitchen - 100% Desi Ghee Made",
        uuid: "dc9b4c53-0ca8-4fd4-983a-88c1d981cc3d",
        city: "6",
        area: "HINJEWADI",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "ubgzno8icjtq25a2nrr1",
        cuisines: ["North Indian", "Biryani"],
        tags: [],
        costForTwo: 60000,
        costForTwoString: "₹600 FOR TWO",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        slaString: "31 MINS",
        lastMileTravel: 2.5999999046325684,
        slugs: {
          restaurant: "the-biryani-flakes-nerul-nerul",
          city: "pune",
        },
        cityState: "6",
        address:
          "ANAVRIN,Shop 101, Gera, Imperium Rise,PLOT NO 1B HINJEWADI PH-2 PUNE, Haveli- North of Mutha River, Pune, Maharashtra - 411057",
        locality: "Imperium Rise",
        parentId: 21966,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "distance",
              fee: 3300,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3300,
          message: "",
          title: "Delivery Charge",
          amount: "3300",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=5700860~p=19~eid=00000185-a21d-0b45-29ce-c2cb00dc1314",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "364194",
          deliveryTime: 31,
          minDeliveryTime: 31,
          maxDeliveryTime: 31,
          lastMileTravel: 2.5999999046325684,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "261405",
        name: "Faasos - Wraps & Rolls",
        uuid: "22d9df50-70dd-4389-8bb8-76fa415ad0c6",
        city: "6",
        area: "Hinjawadi",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "qtsscxc0o61plgbsucyh",
        cuisines: ["Fast Food", "North Indian", "Street Food", "Desserts"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        slaString: "26 MINS",
        lastMileTravel: 0.5,
        slugs: {
          restaurant: "faasos-bhatewara-nagar-hinjewadi",
          city: "pune",
        },
        cityState: "6",
        address:
          "1st floor, s no 275/1 and 275/3, Time square Building, Bhatewara nagar, Dange chowk road, phase 1, hinjewadi, pune, pin 411057",
        locality: "Bhatewara nagar",
        parentId: 21809,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "Flat ₹125 off",
          shortDescriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code FLAT125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "₹125 OFF",
          shortDescriptionList: [
            {
              meta: "Use FLAT125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "Flat ₹125 off on orders above ₹249 | Use code FLAT125",
              discountType: "Flat",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 3100,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3100,
          message: "",
          title: "Delivery Charge",
          amount: "3100",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "261405",
          deliveryTime: 26,
          minDeliveryTime: 26,
          maxDeliveryTime: 26,
          lastMileTravel: 0.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.3",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "554627",
        name: "Sandwich Slice",
        uuid: "0841febc-1281-4c05-a785-e321175ad031",
        city: "6",
        area: "Hinjewadi",
        totalRatingsString: "Too Few Ratings",
        cloudinaryImageId: "fmosc2f78cixsvt55z5e",
        cuisines: ["Fast Food", "Snacks"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        slaString: "28 MINS",
        lastMileTravel: 0.5,
        slugs: {
          restaurant: "sandwich-slice-hinjewadi-hinjewadi",
          city: "pune",
        },
        cityState: "6",
        address:
          "SHOP NO. 9, MHATOBA COMPLEX, \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\r\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\",
        locality: "Hinjewadi",
        parentId: 333749,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 3300,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3300,
          message: "",
          title: "Delivery Charge",
          amount: "3300",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "554627",
          deliveryTime: 28,
          minDeliveryTime: 28,
          maxDeliveryTime: 28,
          lastMileTravel: 0.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "--",
        totalRatings: 0,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "41803",
        name: "Firangi Bake",
        uuid: "6500612f-0f35-4943-9e09-dcf2ea2224de",
        city: "6",
        area: "Hinjawadi",
        totalRatingsString: "50+ ratings",
        cloudinaryImageId: "drperdpbiioxhmphcos6",
        cuisines: ["Italian", "Mexican", "Pastas", "Ice Cream"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 29,
        minDeliveryTime: 29,
        maxDeliveryTime: 29,
        slaString: "29 MINS",
        lastMileTravel: 2,
        slugs: {
          restaurant: "firangi-bake-rajiv-gandhi-infotech-park-hinjewadi",
          city: "pune",
        },
        cityState: "6",
        address:
          "Central Co-Op Bank, 220, Hinjewadi Maan Road, Phase 1, Hinjewadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra - 411057",
        locality: "Maan Road Om plaza 2nd floor",
        parentId: 3952,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        ribbon: [
          {
            type: "PROMOTED",
          },
        ],
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 3100,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3100,
          message: "",
          title: "Delivery Charge",
          amount: "3100",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=5710512~p=22~eid=00000185-a21d-0b45-29ce-c2cc00dc1616",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "2 kms",
        hasSurge: false,
        sla: {
          restaurantId: "41803",
          deliveryTime: 29,
          minDeliveryTime: 29,
          maxDeliveryTime: 29,
          lastMileTravel: 2,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: true,
        avgRating: "4.1",
        totalRatings: 50,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "295761",
        name: "Badshahs Of BIRYANI",
        uuid: "87bbe6a7-52bc-44df-a35c-3d44fa9fce6a",
        city: "6",
        area: "Hinjawadi",
        totalRatingsString: "100+ ratings",
        cloudinaryImageId: "sorfbqiqyrrtk93li5ne",
        cuisines: ["Biryani", "Kebabs", "Mughlai", "North Indian"],
        tags: [],
        costForTwo: 30000,
        costForTwoString: "₹300 FOR TWO",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        slaString: "23 MINS",
        lastMileTravel: 0.8999999761581421,
        slugs: {
          restaurant: "badshahs-of-biryani-wakad-wakad",
          city: "pune",
        },
        cityState: "6",
        address:
          "NICE Foods, Behind KFC, Opp. HP Petrol Pump, Sr. No 21/5, Milkat No 1193, Hinjawadi - Aundh Rd, Hinjawadi Village, Tal: Mulshi, Wakad, Pimpri-Chinchwad, Maharashtra 411057",
        locality: "Wakad",
        parentId: 18532,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use SPECIALS",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 on select items | Use code SPECIALS",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use SPECIALS",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹120 on select items | Use code SPECIALS",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 3300,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3300,
          message: "",
          title: "Delivery Charge",
          amount: "3300",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.8 kms",
        hasSurge: false,
        sla: {
          restaurantId: "295761",
          deliveryTime: 23,
          minDeliveryTime: 23,
          maxDeliveryTime: 23,
          lastMileTravel: 0.8999999761581421,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.1",
        totalRatings: 100,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
  {
    cardType: "restaurant",
    layoutAlignmentType: "VERTICAL",
    data: {
      type: "restaurant",
      data: {
        type: "F",
        id: "372386",
        name: "The Brooklyn Creamery - Healthy Ice Cream",
        uuid: "c0ef342b-8f63-4220-a4e2-e3568fab83e9",
        city: "6",
        area: "Hinjawadi",
        totalRatingsString: "20+ ratings",
        cloudinaryImageId: "hjpajzkglsvtm41frbdv",
        cuisines: ["Desserts", "Ice Cream", "Healthy Food"],
        tags: [],
        costForTwo: 20000,
        costForTwoString: "₹200 FOR TWO",
        deliveryTime: 19,
        minDeliveryTime: 19,
        maxDeliveryTime: 19,
        slaString: "19 MINS",
        lastMileTravel: 0.5,
        slugs: {
          restaurant:
            "the-brooklyn-creamery-low-cal-ice-cream-hinjewadi-hinjewadi",
          city: "pune",
        },
        cityState: "6",
        address:
          "UNIT NO 101, SR. NO 275/1 & 3/A3, TIMES SQUARE, MULSHI, PUNE HINJAVADI(CT), PIN 411057,  Pune PMC & Rural, Maharashtra- 411057",
        locality: "Hinjewadi",
        parentId: 236673,
        unserviceable: false,
        veg: true,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        aggregatedDiscountInfo: {
          header: "60% off",
          shortDescriptionList: [
            {
              meta: "60% off | Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        aggregatedDiscountInfoV2: {
          header: "60% OFF",
          shortDescriptionList: [
            {
              meta: "Use WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          descriptionList: [
            {
              meta: "60% off up to ₹100 | Use code WELCOMEBACK",
              discountType: "Percentage",
              operationType: "RESTAURANT",
            },
          ],
          subHeader: "",
          headerType: 0,
          superFreedel: "",
        },
        chain: [],
        feeDetails: {
          fees: [
            {
              name: "distance",
              fee: 3100,
              message: "",
            },
            {
              name: "time",
              fee: 0,
              message: "",
            },
            {
              name: "special",
              fee: 0,
              message: "",
            },
          ],
          totalFees: 3100,
          message: "",
          title: "Delivery Charge",
          amount: "3100",
          icon: "",
        },
        availability: {
          opened: true,
          nextOpenMessage: "",
          nextCloseMessage: "",
        },
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID: "",
        badges: {
          imageBased: [],
          textBased: [],
          textExtendedBadges: [],
        },
        lastMileTravelString: "0.5 kms",
        hasSurge: false,
        sla: {
          restaurantId: "372386",
          deliveryTime: 19,
          minDeliveryTime: 19,
          maxDeliveryTime: 19,
          lastMileTravel: 0.5,
          lastMileDistance: 0,
          serviceability: "SERVICEABLE",
          rainMode: "NONE",
          longDistance: "NOT_LONG_DISTANCE",
          preferentialService: false,
          iconType: "EMPTY",
        },
        promoted: false,
        avgRating: "4.1",
        totalRatings: 20,
        new: false,
      },
      subtype: "basic",
    },
    parentWidget: false,
  },
];

const RestaurantCard = ({ restaurant }) => {
  //console.log(restaurant?.data?.data);
  const { name, cuisines, cloudinaryImageId, avgRating } =
    restaurant?.data?.data;
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
      />
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{`${avgRating} Stars`}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="cardslist">
      <RestaurantCard restaurant={restaurantList[0]} />
      <RestaurantCard restaurant={restaurantList[1]} />
      <RestaurantCard restaurant={restaurantList[2]} />
      <RestaurantCard restaurant={restaurantList[3]} />
      <RestaurantCard restaurant={restaurantList[4]} />
      <RestaurantCard restaurant={restaurantList[5]} />
      <RestaurantCard restaurant={restaurantList[6]} />
      <RestaurantCard restaurant={restaurantList[7]} />
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
