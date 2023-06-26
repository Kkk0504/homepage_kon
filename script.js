function openImage(element) {
    var imageSrc = element.getAttribute("src");
    var downloadLink = document.createElement("a");
    downloadLink.href = imageSrc;
    downloadLink.download = "image.jpg";
    downloadLink.click();
  }
  
