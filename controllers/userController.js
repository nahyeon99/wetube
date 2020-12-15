export const join = (req, res) => {
    res.send("Join");
}
export const login = (req, res) => {
    res.send("Login");
}
export const logout = (req, res) => {
    res.render("logout", { pageTitle: "Logout" })
}
export const userDetail = (req, res) => {
    res.render("userDetail", { pageTitle: "User Detail" });
}
export const editProfile = (req, res) => {
    res.render("editProfile", { pageTitle: "Edit Profile" });
}
export const changePassword = (req, res) => {
    res.render("changePassword", { pageTitle: "Change Password" });
}