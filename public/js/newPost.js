//this is for new posts on the website


const newtechPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#title-new-tech-post').value.trim();
  const content = document.querySelector('#content-new-tech-post').value.trim();
  const time = document.querySelector('#time-new-tech-post').value.trim();
  


  if (title && content  && time) {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ 
          title, 
          content,
          time,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        throw new Error('Failed to create a new post. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  } else {
    alert('Please fill in all the fields before submitting.');
  }
};

const newtechPostForm = document.querySelector('.new-tech-post-form');
if (newtechPostForm) {
  newtechPostForm.addEventListener('submit', newtechPostFormHandler);
}

  