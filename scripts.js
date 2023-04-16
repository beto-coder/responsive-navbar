const handleMobileMenuToggle = () => {
  const menu = document.getElementById("mobile-menu");
  const isHidden = menu.classList.contains("hidden");
  if (isHidden) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
};
