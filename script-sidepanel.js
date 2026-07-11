const leftSidepanel = document.querySelector('#left-sidepanel');
const triggerWidth = 20;


  document.body.addEventListener('mousemove', (event) => {
    if (event.clientX <= triggerWidth) {
      leftSidepanel?.classList.add('active');
    }
  });
  leftSidepanel?.addEventListener('mouseleave', () => {
    leftSidepanel.classList.remove('active');
  });
