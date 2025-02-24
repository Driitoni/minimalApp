document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('create-post-form');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
  
      // Save the post (you can send it to a backend or localStorage)
      console.log('New Post:', { title, content });
  
      // Clear the form
      form.reset();
      alert('Post created successfully!');
    });
  });