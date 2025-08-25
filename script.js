// Member count animation
document.addEventListener('DOMContentLoaded', () => {
  const memberCountElem = document.getElementById('member-count');
  let count = 0;
  const target = 30;
  const interval = setInterval(() => {
    if(count < target){
      count++;
      memberCountElem.textContent = count + "+";
    } else {
      clearInterval(interval);
    }
  }, 100);
});
