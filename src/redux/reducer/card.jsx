import { createSlice } from "@reduxjs/toolkit";
import { House } from "../House";

const initialState = {
 
  carpetArea: 510,
  userCarpetAreaValue: 0,
  bedroomquantity: 1,
  bathroomquantity: 1,
  Flooring: 0,
  
  totalCost: 0,
};

export const card = createSlice({
  name: "home",
  initialState,
  reducers: {
    setID: (state) => {
      state.house.forEach((el) => {
        const id = el.title.toLowerCase().replaceAll(" ", "");
        el.id = id;
      });
    },


 handleBedroomIncrease : () => {
		setArea(area + 120);
		setNoOfBedrooms(noOfBedrooms + 1)
		setBedroomCards([...bedroomCards, bedroomCard()]);
	},

    

    handleBathroomDecrease : () => {
		setArea(area - 120);
		setNoOfBathrooms(noOfBedrooms - 1);
		setBathroomCards(bathroomCards.slice(0, -1));
	},

	 handleBathroomIncrease: () => {
		setArea(area + 40);
		setNoOfBathrooms(noOfBathrooms + 1)
		setBathroomCards([...bathroomCards, bathroomCard()]);
	},

	 handleBathroomDecrease: () => {
		setArea(area - 120);
		setNoOfBathrooms(noOfBedrooms - 1);
		setBathroomCards(bathroomCards.slice(0, -1));
	},



CarpetArea: (state, action) => {
      state.CarpetAreaValue = action.payload;
    },

    flooring: (state, action) => {
      state.house.map((room) => {
        if (room.id === action.payload.roomID) {
          room.floorCost = action.payload.image.cost;
        }
      });
    },

    totalExpense: (state, action) => {
      state.totalCost = action.payload;
    },
  },
});

export const {
  setID,
  handleBedroomIncrease,
  handleBedroomDecrease,
  handleBathroomIncrease,
  handleBathroomDecrease,
  CarpetArea,
  flooring,
  totalExpense,
} = card.actions

export default card;
