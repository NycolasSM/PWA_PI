function goToPage(pageName) {
  if (pageName === "index") {
    console.log("teste")
    return (window.location.href = pageName + ".html");
  }

  window.location.href = "/pages/" + pageName + ".html";
}
