// Fetch and display posts
document.addEventListener('DOMContentLoaded', () => {
    const postList = document.getElementById('post-list');
  
    // Example posts (replace with real data from an API or database)
    const posts = [
      { title: 'First Post', content: 'This is the content of the first post.' },
      { title: 'Second Post', content: 'This is the content of the second post.' },
    ];
  
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.classList.add('post');
      postElement.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
      `;
      postList.appendChild(postElement);
    });
  });