const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "img1": return state + action.payload;
        case "img2": return action.payload;
        case "img3": return action.payload;
        default: return state;
    }
}

export default changeTheNumber;

