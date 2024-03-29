const jwt = require("jsonwebtoken");
const { Admin } = require("../db");

const adminMiddleware = async (req, res, next) => {
    const [authorizationSchemeType, token] =
        req.headers.authorization.split(" ");
    if (authorizationSchemeType !== "Bearer") {
        return res.status(401).send({ message: "Unauthorized" });
    }
    try {
        const decodedValue = jwt.verify(token, process.env.JWT_SECRET);
        // check if the user is an admin
        const isAdmin = await Admin.findById(decodedValue.id);
        if (!isAdmin) {
            return res
                .status(403)
                .send({ message: "You are not allowed to visit these pages." });
        }
        req.admin = decodedValue;
        next();
    } catch (err) {
        console.log("err", err);
        res.status(401).send({ message: "Unauthorized" });
    }
};

module.exports = adminMiddleware;
