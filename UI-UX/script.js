document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tabs li");
  const tabContents = document.querySelectorAll(".tab-content");
  const body = document.body;
  const banner = document.querySelector("header .banner");

  // Define banners for each tab
  const banners = {
    "about-webdesign": "images/about-webdesign.png",
    "about-uxui": "images/about-uiux.png",
    importance: "images/user-value.png",
    future: "images/future.png",
    literature: "images/literature.png",
    authorship: "images/authorship.png",
  };

  // Function to activate a tab
  function activateTab(tab) {
    // Remove "active" class from all tabs
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");

    // Hide all content
    tabContents.forEach((content) => {
      content.style.display = "none";
      content.style.opacity = "0";
    });

    // Show the selected content
    const selectedTab = tab.getAttribute("data-tab");
    const activeContent = document.getElementById(selectedTab);
    activeContent.style.display = "block";
    setTimeout(() => (activeContent.style.opacity = "1"), 10);

    // Change the background and banner
    body.setAttribute("data-tab", selectedTab);
    const newBanner = banners[selectedTab] || "images/default-banner.png";
    banner.classList.add("fade-out");
    setTimeout(() => {
      banner.src = newBanner;
      banner.classList.remove("fade-out");
    }, 500);
  }

  // Set the first tab as active on load
  const firstTab = tabs[0];
  activateTab(firstTab);

  // Add event listeners for all tabs
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      activateTab(tab);
    });
  });
});
