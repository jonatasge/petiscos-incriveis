document.addEventListener("DOMContentLoaded", function () {
  function formatTime(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  let remainingTime = parseInt(localStorage.getItem("remainingTime")) || 900000;
  document.getElementById("countdown").textContent = formatTime(remainingTime);

  const interval = setInterval(function () {
    remainingTime -= 1000;
    localStorage.setItem("remainingTime", remainingTime);

    document.getElementById("countdown").textContent =
      formatTime(remainingTime);

    if (remainingTime <= 0) {
      clearInterval(interval);
      document.getElementById("countdown").textContent = "00:00";
      localStorage.removeItem("remainingTime");
    }
  }, 1000);
});
