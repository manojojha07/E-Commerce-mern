import userModel from "../models/user.model.js";


//  add product to usercart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData || {};

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            }
            else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }

        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "Added To Cart " })

    } catch (error) {

        console.log(error);
        res.json({ success: false, message: error.message });
        console.log(
            "Cart API error:",
            error.response?.data || error.message
        );

    }
}

const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, quantity } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = await userData.cartData;

        cartData[itemId][size] = quantity;
        await userModel.findByIdAndUpdate(userId, { cartData });
        res.json({ success: true, message: "updateed cart  " });
        console.log("USER ID:", userId);

        console.log("USER FOUND:", userData?._id);
        console.log("CART BEFORE SAVE:", cartData);

    } catch (error) {

        console.log(error);
        res.json({ success: false, message: error.message });

    }

}

const getUserCart = async (req, res) => {
    try {
        const { userId } = req.body;

        const userData = await userModel.findById(userId);
        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        let cartData = await userData.cartData;

        res.json({ success: true, cartData })

    } catch (error) {

        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export { addToCart, updateCart, getUserCart }