const burger = document.querySelector('.burger');
const nav = document.querySelector('.main-nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const expanded = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

document.addEventListener('click', (event) => {
  const button = event.target.closest('.read-more');
  if (!button) return;

  const bio = button.closest('.media-card')?.querySelector('.bio-text');
  if (!bio) return;

  const expanded = bio.classList.toggle('expanded');
  button.textContent = expanded ? 'See less' : 'See more';
});
