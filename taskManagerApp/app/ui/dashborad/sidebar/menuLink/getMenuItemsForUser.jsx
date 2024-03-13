
const getMenuItemsForUser =async (user) => {
    if (!user) {
      // If there's no user, return an empty array or a public menu
      return [];
    }
  
    const filteredMenuItems = menuItems.filter((menuItem) => {
      if (menuItem.title === "Manager pages") {
        // Show manager pages if the user is an admin and active
        return user.isAdmin && user.isActive;
      } else if (menuItem.title === "Student Pages") {
        // Show student pages if the user is not an admin but is active
        // Assuming all users should see Student Pages as long as they are active
        return user.isActive;
      } else {
        // Show other pages like "User" to all logged-in users
        return true;
      }
    });
  
    return filteredMenuItems;
  };
  
  // Usage
  const userMenuItems = getMenuItemsForUser(user); // Assuming 'user' is your user object
  